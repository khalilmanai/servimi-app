import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const handleLogin = async (username, password) => {
  this.username = username.toLowerCase();
  try {
    const response = await ApiManager.post("/api/auth/signin", {
      username: this.username,
      password,
    });
    if (response.status === 200) {
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userData", JSON.stringify(response.data));
      console.log("login successful");
      return true;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Login error: ", error.message);
    return false;
  }
};
export const registerUser = async (userData) => {
  try {
    const response = await ApiManager.post("/api/auth/inscription", userData);
    console.log("Successfully added a new account:", response.data);
    return response.data;
  } catch (error) {
    console.error("Registration problem: ", error);
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