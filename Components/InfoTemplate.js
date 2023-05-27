import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import logo from "../assets/images/logo.png";
import { useFonts } from "expo-font";
const InfoTemplate = (props) => {

  return (

    <View style={styles.container}>
      <Image style={styles.img} source={logo} />
      <Text style={styles.txt}>{props.text}</Text>
         {/* This divider is not working  */}
      <View style={styles.divider} />
    
    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", 
    flexDirection: "column",
    
  },

  img: {
    marginTop:-30,
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
  txt: {
    fontFamily: "Cairo",
    fontSize: 24,
  },
  divider:{
    margin:10,
    height:2,
    width: 300,
    backgroundColor:'#FB8703'
  }
});

export default InfoTemplate;
