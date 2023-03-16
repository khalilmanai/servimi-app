import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import logo from "../assets/images/logo.png";
import google from "../assets/images/google.png";
import Inputs from "../Components/Inputs";
import facebook from "../assets/images/facebook.png";
import { Ionicons } from "@expo/vector-icons";
import InputBar from "../Components/InputBar";

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
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

  const validateUserName = () => {
    //validate usernmae
  };
  const handleSubmit = () => {
    const userData = {
      username: userName,
      password: password,
    };
    console.log(userData);
    // Validate inputs and submit form
  };

  const goto = () => {
    navigation.navigate("SignUpScreen");
  };

  const gotoReset = () => {
    navigation.navigate("ResetPassword");
  };

  const gotoHome = () => {
    navigation.navigate("TabScreens", { screen: "Home" });
  };

  const validatePassword = (password) => {
    // Password validation logic here
  };

  const [obscure, setObscure] = useState(true);

  const handleObscure = () => {
    setObscure(!obscure);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image source={logo} resizeMode="contain" style={styles.img} />
      </View>
      <View style={styles.InputContainer}>
        <InputBar
          label="Nom D'utilisateur"
          value={userName}
          onChange={handleUserNameChange}
        />
        {userNameError ? (
          <Text style={styles.errorText}>{userNameError}</Text>
        ) : null}
        <View style={styles.passInput}>
          <InputBar
            label="Mot de Passe"
            value={password}
            changeValue={handlePasswordChange}
            secureText={obscure}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              handleObscure();
            }}
          >
            <Ionicons
              name={obscure ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "80%",
    height: "50%",
  },
  imgBox: {
    alignItems: "center",
    justifyContent: "flex-start",
  },

});

export default LoginScreen;
