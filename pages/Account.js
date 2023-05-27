import { Alert, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Inputs from "../Components/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { updateUserData } from "../api/axios";
import { StatusBar } from "expo-status-bar";

const Account = () => {
  const [username, setUsername] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");
console
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("userID")

      .then((value) => {
        setUserID(value || "");
      })
      .catch((error) => {
        console.error("Error retrieving userID:", error);
      });

    AsyncStorage.getItem("username")
      .then((value) => {
        setUsername(value || "");
      })
      .catch((error) => {
        console.error("Error retrieving username:", error);
      });

    AsyncStorage.getItem("email")
      .then((value) => {
        setEmailPlaceholder(value || "");
      })
      .catch((error) => {
        console.error("Error retrieving email:", error);
      });
  }, []);

  const handleUserNameChange = (value) => {
    setUsername(value);
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
      const token = await AsyncStorage.getItem("token");
      return token;
    } catch (error) {
      console.error("Error getting token from AsyncStorage:", error);
      return null;
    }
  };

  const onSavePress = async () => {
    console.log(username)
    const newData = {
      username: username,
      password: password,
      email: email,
      userID: userID,
      role: {
        id: 3,
        name: "ROLE_CLIENT",
      },
    };
    
    await updateUserData(newData, userID);
        Alert.alert('Servimi', 'vos informations sont changé avec succées')
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={styles.container}
    >
      <StatusBar />
      <View style={styles.backgroundView}>
        <TouchableOpacity
          style={{ marginTop: "10%", marginLeft: "5%" }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-outline" size={32} color="white" />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Text style={styles.headerText}>Informations</Text>
          <Text style={styles.paragraph}>
            vous pouvez changer les informations relatives a votre compte via
            cette interface
          </Text>
        </View>
      </View>
      <View style={styles.foregroundView}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              marginTop: "10%",
              marginBottom: "-10%",
              fontFamily: "Cairo",
              fontSize: 16,
              color: "#8E8D8C",
              width: "60%",
              textAlign: "center",
            }}
          >
            Veuillier intégrer vos nouvelles informations
          </Text>
          <View style={styles.inputContainer}>
            <Inputs
              value={email? email : emailPlaceholder}
              changeValue={handleEmailChange}
              placeholder={emailPlaceholder ? emailPlaceholder : "email"}
              type="email-address"
            />
            <Inputs
              value={username? username :username}
              changeValue={handleUserNameChange}
              placeholder={username ? username : "Nom d'utilisateur"}
            />
           
            <View style={{ flexDirection: "row", left: 15 }}>
              <Inputs
                value={password}
                changeValue={handlePasswordChange}
                placeholder="Mot du passe"
                secureText={obscure}
              />
              <View style={{ alignSelf: "center", left: -45 }}>
                <TouchableOpacity style={{}} onPress={handleObscure}>
                  <Ionicons
                    name={obscure ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  onSavePress();
                }}
              >
                <Text style={styles.paragraph}>Sauvegarder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FB8703",
  },
  foregroundView: {
    position: "absolute",
    height: "60%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    bottom: 0,
  },
  headerText: {
    fontFamily: "Cairo",
    fontSize: 36,
    color: "white",
    textAlign: "center",
  },
  paragraph: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },

  inputContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: "10%",
    marginBottom: "10%", // Add marginBottom to adjust spacing
  },

  buttonContainer: {
    marginTop: "10%",
    width: "90%",
  },
  btn: {
    width: "90%",
    backgroundColor: "#fb8703",
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default Account;
