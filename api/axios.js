import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
// physical phone url http://192.168.1.15:8081
const baseUrl = "http://192.168.1.15:8081";
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

// Log in a user and store the token
export const handlelogin = async (username, password) => {
  try {
    const response = await ApiManager.post("/api/auth/authentification", {
      username,
      password,
    });

    if (response.status === 200) {
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
     ApiManager.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      console.log("User logged in successfully");
      return true;
    } else if (response.status == 401) {
      Alert("verifier vos informations");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Login error:", error.message);
    return false;
  }
};
export const registerUser = async (userData) => {
  try {
    const response = await ApiManager.post("/api/auth/inscription", userData);

    if (response.status === 200) {
      console.log("New account created successfully:", response.data);
      return response.data;
    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    console.error("Registration error:", error.message);
    return undefined;
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

export const fetchImage = async (ItemId) => {
  try {
    const response = await ApiManager.get(
      `/solutionprisecommandeatable/v1/MANAGER/filter/${ItemId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

///  API commandes

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
    const response = await ApiManager.post("/api/auth/oublier-mdp", email);
    return response.data;
  } catch (error) {
    console.error("error in forgot password", error);
    throw error;
  }
};

// change account informations

export const changeInformations = async (newData) => {
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

export const disconnect = async () => {
  try {
    await AsyncStorage.removeItem("token");
    ApiManager.defaults.headers.common["Authorization"] = "";
    console.log("User logged out successfully");
    return true;
  } catch (error) {
    console.error("Logout error:", error.message);
    return false;
  }
};
