import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";




const baseUrl = 'https://b2de-197-2-36-229.eu.ngrok.io'
export const ApiManager = axios.create({
  baseURL :`${baseUrl}`,

  responseType:'json',
  withCredentials:true
})

export const getEtablissement = async () => {
  try {
    const response = await ApiManager
      .get("/solutionprisecommandeatable/v1/etablissements");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}; 

export const handleLogin = async (username , password) => {
  this.username = username.toLowerCase()
  try {
    const response = await ApiManager.post('/api/auth/signin', {
      username : this.username, 
      password
    });
    if (response.status === 200) {
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userData', JSON.stringify(response.data));
      console.log('login successful');
      return true;
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error: ', error.message);s
    return false;
  }
};


export const registerUser = async (userData) => {
  try {
    const response = await ApiManager.post('/api/auth/signup', userData);
    console.log('Successfully added a new account:', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration problem: ', error);
  }
};



