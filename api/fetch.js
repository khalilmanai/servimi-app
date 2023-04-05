/* import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const baseUrl = 'http://10.0.2.2:8081';

const headers = {
  'Content-Type': 'application/json',
  withCredentials: true,
};

export const getEtablissement = async () => {
  try {
    const response = await fetch(`${baseUrl}/solutionprisecommandeatable/v1/MANAGER/etablissements`, { headers });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleLogin = async (username, password) => {
  const lowerCaseUsername = username.toLowerCase();
  try {
    const response = await fetch(`${baseUrl}/api/auth/signin`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        username: lowerCaseUsername,
        password
      })
    });
    if (response.status === 200) {
      const data = await response.json();
      const token = data.token;
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userData", JSON.stringify(data));
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
    const response = await fetch(`${baseUrl}/api/auth/inscription`, {
      method: 'POST',
      headers,
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Successfully added a new account:", data);
      return data;
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error("Registration problem: ", error);
  }
};

export const getCategorie = async (etabId) => {
  try {
    const response = await fetch(`${baseUrl}/solutionprisecommandeatable/v1/MANAGER/filter/${etabId}`, { headers });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchImage = async (ItemId) => {
  try {
    const response = await fetch(`${baseUrl}/solutionprisecommandeatable/v1/MANAGER/filter/${ItemId}`, { headers });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error(error);
  }
};
 */