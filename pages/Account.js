import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import SecondPanel from "../Components/SecondPanel";

import { TouchableOpacity } from "react-native";
import { getuser } from "../api/getUser";
import Inputs from "../Components/Inputs";


const Account = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUserNameChange = (value) => {
    setUserName(value);
    setUserNameError(validateUserName(value));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };
  
  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(Email(value));
  };

  const validateUserName = () => {
    //validate usernmae
  };
  const validatePassword = () => {
    //validate usernmae
  };
  const validateEmail = () =>{}

  const [obscure, setObscure] = useState(true);

  const handleObscure = () => {
    setObscure(!obscure);
  };
  const User = getuser()
  
  return (
    <View style={styles.container}>
      <View style={{ flex: 1  ,}}>
        <SecondPanel />
         <View style={styles.inputContainer}>
         <Inputs
        value={email}
        changeValue={handleEmailChange}
        placeholder="Nom D'utilisateur"
      />
         <Inputs
        value={userName}
        changeValue={handleUserNameChange}
        placeholder="Nom D'utilisateur"
      />
         <Inputs
          value={password}
          secureText={obscure}
          changeValue={handlePasswordChange}
          placeholder="Mot du passe"
        />
         </View>
   
       
      </View>
<View style={styles.boxbox}>
      
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontFamily:'Cairo' , fontSize:16, color:'white'}}>Sauvgarder</Text>
        </TouchableOpacity>
      </View></View>
  
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'center',
    marginTop:'5%',
  },
  inputContainer : {
    
     alignItems:'center',
     justifyContent:'center'
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
  boxbox:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'10%',
  }
});
