import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import logo from "../assets/images/logo.png";
import google from "../assets/images/google.png";
import Inputs from "../Components/Inputs";
import facebook from "../assets/images/facebook.png";
import { Dimensions } from "react-native";
import { handleLogin } from "../api/fetch";

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
  const validatePassword = () => {
    //validate usernmae
  };

  const [obscure, setObscure] = useState(true);

  const handleObscure = () => {
    setObscure(!obscure);
  };

  const goto = () => {
    navigation.navigate("SignUpScreen");
  };
  const gotoReset = () => {
    navigation.navigate("ResetPassword");
  };
  const gotoHome = () => {
    navigation.replace ("TabScreens", { screen: "Home" });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={logo} />
      <Inputs
        value={userName}
        changeValue={handleUserNameChange}
        placeholder="Nom D'utilisateur"
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
      <TouchableOpacity onPress={gotoReset} style={styles.passText}>
        <Text style={styles.text}> mot de passe oublié ?</Text>
      </TouchableOpacity>
      <View style={styles.connectBtn}>
        <TouchableOpacity
           onPress={async () => {
            const result = await handleLogin(userName , password);
            result ? gotoHome() : console.log('error logging');
          }}
        >
          <Text style={[styles.text, styles.connect]}>Se Connecter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Vous n'avez pas du compte ?</Text>
        <TouchableOpacity onPress={goto}>
          <Text style={{ color: "blue", marginLeft: -7 }}>Créer compte</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonBox}>
        <View >
          <TouchableOpacity style={styles.gbutton}>
            <Image style={styles.icon} source={google} />
            <Text style={styles.text}>Connecter avec Google</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.gbutton}>
            <Image style={styles.icon} source={facebook} />
            <Text style={styles.text}>Connecter avec Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
// all buttons require Onpress function to be added after

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    flex:4,
    resizeMode: "contain",
    height: height / 2.5,
    width: width / 1.5,
  },
  divider: {
    width: "50%",
    height: 2.5,
    margin: 20,
    backgroundColor: "#D3D3D3",
  },
  text: {
    margin: 10,
    fontFamily: "Cairo",
    color: "#28231D",
  },
  gbutton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    backgroundColor: "#FFF9A6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    margin:10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 5,
    height: 30,
    width: 30,
  },

  bottomText: {
    margin: 20,
    textAlign: "center",
    alignItems: "center",
  },
  policeText: {
    fontFamily: "Cairo",
    textDecorationLine: "underline",
    color: "#FB8703",
  },
  aideText: {
    marginTop: 5,
    fontFamily: "Cairo",
    textDecorationLine: "underline",
  },
  connectBtn: {
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: "#FB8703",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  passText: {
    marginTop: -10,
    marginLeft: 30,
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  connect: {
    color: "white",
  },
  buttonBox: {

   marginBottom:50,

  },
});

export default LoginScreen;