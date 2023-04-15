import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { setRole } from "../redux/userSlice";
//http://10.0.2.2:8081
const baseUrl = "http://10.0.2.2:8081";
export const ApiManager = axios.create({


  baseURL: `${baseUrl}`,
  responseType: "json",
  withCredentials: true,
});

export const getEtablissement = async () => {
  try {
    const response = await ApiManager.get(
      "/solutionprisecommandeatable/v1/MANAGER/etablissements"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const handlelogin = async (username, password, dispatch) => {
  try {
    const response = await ApiManager.post("/api/auth/authentification", {
      username,
      password,
    });

    if (response.status === 200) {
      const { token, role } = response.data; // get the token and role from the respons
      dispatch(setRole(role));
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("role", role);
      console.log(role);

      console.log("User logged in successfully");

      return { success: true, role }; // return the role along with the success message
    } else if (response.status == 401) {
      Alert("verifier vos informations");
    } else if (response.status == 400) {
      Alert("veuiller inserer des informations");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Login error:", error.message);
    return { success: false, error: error.message };
  }
};

export const registerUser = async (userData) => {
  const response = await ApiManager.post("/api/auth/inscription", userData);

  if (response.status === 200) {
    console.log("New account created successfully:", response.data);
    return response.data;
  } else {
    console.error("Unexpected response status:", response.status);
    throw new Error("Registration failed");
  }
};

export const getCategorie = async (etabId) => {
  try {
    const response = await ApiManager.get(
      `/solutionprisecommandeatable/v1/MANAGER/filter/${etabId}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const creerCommande = async (commandeInfo) => {
  try {
    const response = await ApiManager.post(
      "/solutionprisecommandeatable/v1/creerCommande",
      commandeInfo
    );
    console.log("cart added to database", response.data);
    return response.data;
  } catch (error) {
    console.error("saving problem: ", error);
    throw error;
  }
};

// mot de passe oublié

export const forgotPassword = async (email) => {
  try {
    const response = await ApiManager.post("/api/auth/oublier-mdp", {
      email: email,
    });
    return response.data;
  } catch (error) {
    console.error("error in forgot password", error);
    throw error;
  }
};

// change account informations

export const resetPassword = async (newData) => {
  try {
    const response = await ApiManager.post(
      "/api/auth/reinitialisation-mdp",
      newData
    );
    return response.data;
  } catch (error) {
    console.error("error in change user informations", error);
    throw error;
  }
};

export const disconnect = async (navigation) => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("role");
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    if (token === null) {
      ApiManager.defaults.headers.common["Authorization"] = "";
      console.log("User logged out successfully");
      navigation.navigate("FirstScreen");
      return true;
    } else {
      console.error("Logout error: Token was not removed from AsyncStorage");
      return false;
    }
  } catch (error) {
    console.error("Logout error:", error.message);
    return false;
  }
};
 //error in this request , command is not being validated
// axios http requests to server
export const getCommandesServeur = async () => {
  try {
    const { data: commandes } = await ApiManager.get("/solutionprisecommandeatable/v1/WAITER/commandes");

    const tableIds = commandes.map((commande) => commande.comid);

    const responses = await axios.all(
      tableIds.map((tableId) => ApiManager.get(`/solutionprisecommandeatable/v1/commandeClientByComId/${tableId}`))
    );

    const data = responses.map((response) => response.data[0]);

    const items = data.flatMap(({ items }) => items);
    const supps = data.flatMap(({ supps }) => supps);

    const { data: itemsResponseData } = await ApiManager.get(`/solutionprisecommandeatable/v1/MANAGERafficher/${items.join(',')}`);
    const { data: suppsResponseData } = await ApiManager.get(`/solutionprisecommandeatable/v1/afficherSupplement/${supps.join(',')}`);

    // return an object containing all the relevant data
    return {
      commandes,
      data,
      itemsResponseData,
      suppsResponseData
      ,
    }; 

  } catch (error) {
    console.error("error in receiving command from api", error);
    throw new Error(error);
  }
};



