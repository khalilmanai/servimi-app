import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { setRole } from "../redux/userSlice";
//http://10.0.2.2:8081
//http://192.168.1.15:8081

const baseUrl = "http://192.168.31.172:8081";
export const ApiManager = axios.create({
  baseURL: `${baseUrl}`,
  responseType: "json",
  withCredentials: true, 
});

//getEtablissement responsable a l'affichage des etablissements de la base

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

// fonction du login 'authentification'

export const handlelogin = async (username, password, dispatch) => {
  try {
    const response = await ApiManager.post("/api/auth/authentification", {
      username,
      password,
    });

    if (response.status === 200) {
      const { token, role, userID  , email , username} = response.data;
   // get the token and role from the respons
      dispatch(setRole(role));
// sauvegarde de data utile
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("role", role);
      await AsyncStorage.setItem("userID", JSON.stringify(userID));
      await AsyncStorage.setItem("username", username)
      await AsyncStorage.setItem("email", email)

      return { success: true, role }; // retrour du role pour accées spécifique 
    }
  } catch (error) {
    console.error("Login error:", error.message);
    return { success: false, error: error.message };
  }
};
// fonction d'inscription 
export const registerUser = async (userData) => {
  const response = await ApiManager.post("/api/auth/inscription", userData);

  if (response.status === 200) {

    return response.data;
  } else {
    console.error("Unexpected response status:", response.status);
    throw new Error("Registration failed");
  }
};
// appel au elements par catégories
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
// creation de la commande globale
 export const creerCommande = async (commandeInfo) => {
  try {
    const response = await ApiManager.post(
      "/solutionprisecommandeatable/v1/creerCommande",
      commandeInfo
    );
    const comid  = response.data.comid
    await AsyncStorage.setItem('comid', JSON.stringify(comid));
    return response.data;
  } catch (error) {
    console.error("saving problem: ", error);
    throw error;
  }
}; 


//deconnection
export const disconnect = async (navigation) => {
  try {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("role");
    const token = await AsyncStorage.getItem("token");

    if (token === null) {
      ApiManager.defaults.headers.common["Authorization"] = "";

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

// changement des informations utilisateurs 
export const changeStatus = async (TableId , status) => {

  try {
    const response = await ApiManager.put(
      `/WAITER/${TableId}/status`,
      Object(status)
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
// changement status commandes 
export const changeStatusCommande = async (comid , status) => {
  try {
    const response = await ApiManager.put(`/${comid}/statut`, Object(status));
    return response.data
  } catch (error) {
    console.error(error);
  }
};
// appel data pour serveur
export const getData = async () => {
  try {
    const response = await ApiManager.get(
      "/solutionprisecommandeatable/v1/WAITER/commandes"
    );
    return response.data;
  } catch (error) {
    console.error("error", error);
  }
};

export const getCommandClient = async (commandeId) => {
  try {
    const response = await ApiManager.get(
      `/solutionprisecommandeatable/v1/commandeClientByComId/${commandeId}`
    );
    return response.data;
  } catch (error) {
    console.error("error in getting commandeClient by id", error);
  }
};
 //appel items
export const getItemById = async (itemId) => {
  try {
    const response = await ApiManager.get(
      `/solutionprisecommandeatable/v1/MANAGERafficher/${itemId}`
    );

    return response.data;
  } catch (error) {
    console.error("error in fetching items from databse", error);
    throw new Error(error);
  }
};
//appel supplements
export const getSuppsById = async (suppId) => {
  try {
    const response = await ApiManager.get(
      `/solutionprisecommandeatable/v1/afficherSupplement/${suppId}`
    );

    return response.data;
  } catch (error) {
    console.error("error fetching supplement items : ", error);
    throw new Error(error);
  }
};
// envoi a la base du commande client
export const sendCommandeClient = async (commandeData) => {
  try {
    const response = await ApiManager.post(
      "/solutionprisecommandeatable/v1/commandeclient",
      commandeData
    );

    return response.data
  } catch (error) {
    console.error("error in sending commandeClient ", error);
  }
};

export const updateUserData  =  async (newData , userId) =>{
   try {
    const response = await ApiManager.put(`/solutionprisecommandeatable/v1/Serveur/modifier/${userId}`, newData)
    return response.data
   }catch(error){
    console.error("error in updating user data" , error)
   }
}

// appel au information par id 


export const getCommandeById = async(tableId)=>{
  try{
    const response = await ApiManager.get(`/solutionprisecommandeatable/v1/commandeByTable${tableId}
    `)
    console.log(response.data)
    return response.data
  }catch(error){
    console.error(error)
    throw new Error(error)
  }
}


//changement statut du table par table ID

export const getStatusforSwitch = async (tableID) => {
  try {
    const response = await ApiManager.get(`/solutionprisecommandeatable/v1findById/${tableID}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error as needed
  }
};
