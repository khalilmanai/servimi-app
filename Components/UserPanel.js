import React, { useEffect, useState }  from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { getuser } from "../api/getUser";


const UserPanel = () => {
const user = getuser()
   const navigation = useNavigation()


  return (

    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.userContainer}>
        
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Bienvenue dans </Text>
            <Text style={{marginTop :-10, fontFamily:'Cairo' , fontSize : 42, color:'#FB8703'}}>Servimi</Text>
          </View>
        </View>
        <TouchableOpacity
        
          onPress={() => {
        navigation.toggleDrawer()
          }}
        >
          <Octicons name="three-bars" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 20,
    width:'100%'
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    alignItems: "center",
  },

  userImg: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FB8703",
  },
  userContainer: {
    flexDirection: "row",
  },

  textContainer: {
    width:'80%',
    justifyContent:'center',

  },
  welcomeText: {
    fontFamily: "Cairo",
    fontSize : 24,
  },
  welcomeText: {
    fontFamily: "Cairo",
    fontSize: 32,
  },
  username: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "#FB8703",
    fontWeight: "800",
  },
});

export default UserPanel;
