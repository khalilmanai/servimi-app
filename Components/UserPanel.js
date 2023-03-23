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
          <TouchableOpacity>
            <Image style={styles.userImg} source={require('../assets/images/user.jpg')} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Bienvenue!</Text>
            <Text style={styles.username}>{user?.username}</Text>
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
    flexDirection: "column",
    margin: 10,
  },
  welcomeText: {
    fontFamily: "Cairo",
    fontSize: 16,
    fontWeight: "800",
  },
  welcomeText: {
    fontFamily: "Cairo",
    fontSize: 16,
    fontWeight: "600",
  },
  username: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "#FB8703",
    fontWeight: "800",
  },
});

export default UserPanel;
