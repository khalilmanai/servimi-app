import { React, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import BottomButtons from "../Components/BottomButtons";
import Inputs from "../Components/Inputs";
import InfoTemplate from "./InfoTemplate";
import { Ionicons } from "@expo/vector-icons";
import { registerUser } from "../api/axios";
const InputsScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (value) => {
    setUserName(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const userData = {
    email: email,
    password: password,
    role: {
      id: 3
    },
    username: userName,
  };

  const [obscure, setObscure] = useState(true);

  const handleObscure = () => {
    setObscure(!obscure);
  };

  const goto = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <ScrollView style={styles.Scrollcontainer}>
      <View style={styles.container}>
        <InfoTemplate text="Vos Informations" />
      </View>
      <View style={styles.inputcontainer}>
        <Inputs
          placeholder="Nom D'utilisateur"
          value={userName}
          changeValue={handleUserNameChange}
        />

        <Inputs
          placeholder="Email"
          value={email}
          changeValue={handleEmailChange}
          type="email-address"
        />
        <View style={{ flexDirection: "row" }}>
          <Inputs
            value={password}
            secureText={obscure}
            changeValue={handlePasswordChange}
            placeholder="Mot du passe"
          />
          <TouchableOpacity
            style={{ position: "absolute", right: "9%", top: "30%" }}
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
      <BottomButtons
      onSkipPress = {()=>{
        navigation.goBack()
      }}
        onPressContinue={() => {
          registerUser(userData);
          goto();
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Scrollcontainer: {
    flex: 1,
  },

  container: {
    flex: 2,
    marginTop: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputcontainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  suffixIcon: {
    marginLeft: "-6%",
    marginBottom: "5%",
  },
  passContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default InputsScreen;
