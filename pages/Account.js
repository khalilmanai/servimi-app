import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Inputs from "../Components/Inputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


const Account = () => {
  const [username, setUsername] = useState(null);
  const [emailPlaceholder, setEmailPlaceholder] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  useEffect(() => {
    AsyncStorage.getItem('username')
      .then(value => {
        console.log(value)
        setUsername(value || '');
      })
      .catch(error => {
        console.error('Error retrieving username:', error);
      });

    AsyncStorage.getItem('email')
      .then(value => {
        console.log(value)
        setEmailPlaceholder(value || '');
      })
      .catch(error => {
        console.error('Error retrieving email:', error);
      });
  }, []);


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
      const token = await AsyncStorage.getItem("token");
      return token;
    } catch (error) {
      console.error("Error getting token from AsyncStorage:", error);
      return null;
    }
  };

  const onSavePress = async () => {
    const token = await getToken();

    const newData = {
      username: userName,
      password: password,
      email: email,
      userID: userid,
    };
    await changeInformations(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundView}>
        <TouchableOpacity style={{ marginTop: "10%", marginLeft: "5%" }}
        onPress={()=>{
          navigation.goBack()
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
        <View style={styles.inputContainer}>
          <Inputs
            value={email}
            changeValue={handleEmailChange}
            placeholder={
              emailPlaceholder ? emailPlaceholder : "email"
            }
            type="email-address"
          />
          <Inputs
            value={userName}
            changeValue={handleUserNameChange}
            placeholder={username ? username : "Nom d'utilisateur"}
          />
          <Inputs
            value={password}
            changeValue={handlePasswordChange}
            placeholder="Mot du passe"
          />

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
    width: "100%",
    marginTop: "10%",
    alignItems: "center",
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
