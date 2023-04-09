import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import SecondPanel from "../Components/SecondPanel";

import { TouchableOpacity } from "react-native";
import { getuser } from "../api/getUser";
import Inputs from "../Components/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeInformations } from "../api/axios";

const Account = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleUserNameChange = (value) => {
    setUserName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const [obscure, setObscure] = useState(true);

  const handleObscure = () => {
    setObscure(!obscure);
  };
  
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.error('Error getting token from AsyncStorage:', error);
      return null;
    }
  };
  
  const onSavePress = async () => {
    const token = await getToken();
  
    const newData = {
      username: userName,
      password: password,
      email: email,
      token: token,
    };
  console.log(token)
    await changeInformations(newData);
    
  };
  


  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <SecondPanel />
        <View style={styles.inputContainer}>
          <Inputs
            value={email}
            changeValue={handleEmailChange}
            placeholder="Email"
            type='email-address'
          />
          <Inputs
            value={userName}
            changeValue={handleUserNameChange}
            placeholder="Nom D'utilisateur"
          />
          <Inputs
            value={password}
          
            changeValue={handlePasswordChange}
            placeholder="Mot du passe"
          />
        </View>
      </View>
      <View style={styles.boxbox}>
        <TouchableOpacity style={styles.btn}
        onPress={()=>{
          onSavePress()
        }}
        >
          <Text style={{ fontFamily: "Cairo", fontSize: 16, color: "white" }}>
            Sauvgarder
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5%",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "70%",
    padding: 14,
    borderRadius: 10,
    margin: 25,
    backgroundColor: "#FB8703",
    justifyContent: "center",
    alignItems: "center",
  },
  boxbox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
});
