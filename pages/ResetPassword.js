import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import passImg from "../assets/images/passImg.png";
import InfoTemplate from "./InfoTemplate";
import Inputs from "../Components/Inputs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { forgotPassword } from "../api/axios";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (value) => {
    setEmail(value);
  };



  return (
    <SafeAreaView style={styles.container}>
      <InfoTemplate text="re-initialiser votre mot du passe" />
      <Image source={passImg} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.text1}>C'est normal tout le monde a vécu ça</Text>
        <Text style={styles.text2}>Veuiller entrer votre email</Text>
      </View>
      <View style={styles.inputContainer}>
        <Inputs
          style={styles.input}
          label="Email"
          placeholder="Email"
          type="email-address"
          changeValue={handleEmailChange}
          value={email}
        />
        <TouchableOpacity
          style={styles.icon}
       onPress={async()=>{
        console.log(email)
        forgotPassword(email)
       
       }}
        >
          <Ionicons name="send" size={32} color="#FB8703" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    marginTop: "10%",
    height: "40%",
    width: "80%",
  },
  textContainer: {
    flex: 2,
    alignItems: "center",
  },
  text1: {
    fontFamily: "Cairo",
    fontSize: 18,
  },
  text2: {
    fontFamily: "Cairo",
    color: "#FB8703",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  inputContainer: {
    flex: 3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginLeft: "-15%",
  },
});

export default ResetPassword;
