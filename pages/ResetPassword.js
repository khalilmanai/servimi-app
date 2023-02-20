import React from "react";
import { View  , Text , Image  , StyleSheet} from "react-native";
import passImg from '../assets/images/passImg.png'
import InfoTemplate from "./InfoTemplate";
import Inputs from '../Components/Inputs'
import { useFonts } from "expo-font";
const ResetPassword = () => {
  const [fontsLoaded] = useFonts({
    Cairo: require("../assets/fonts/Cairo-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null
  };

  const continuePressed = ()=>{
     navigation.navigate('LoginScreen')
  }
  return (
    <View style={styles.container}>
      <InfoTemplate text='Reset Votre mot de passe' />
      <Image source={passImg} style={styles.img} />
    <View style={styles.textContainer}>
    <Text style={styles.text1}>C'est normal tout le monde a vécu ça</Text>
      <Text style={styles.text2}>Veuiller entre votre email</Text>
    </View>
      <Inputs styl={styles.input} label="Email" />
      <View style={styles.bottomText}>
        <Text style={styles.policeText}>Polices et termes d'utilisation</Text>
        <Text style={styles.aideText}>Aide</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems:'center',
    marginTop:90,
  },
  img: {
    flex:2,
    justifyContent:"center",
    alignItems:"center",
    margin:100,
    flex:6,
    resizeMode : 'contain',
    height: 400,
    width: 400,
  },
  textContainer : {
    flex:2,
    alignItems:'center'
  },
  Text1: {
    fontFamily: "Cairo",
    fontSize: 16,
    fontWeight:'bold'
  },
  text2: {
    fontFamily:'Cairo',
    color: "#FB8703",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  input: {
    width: "60%",
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
});

export default ResetPassword;
