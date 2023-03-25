import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { DrawerActions } from "@react-navigation/native";
import { DzrawerActions, useNavigation } from "@react-navigation/native";
import { getuser } from "../api/getUser";
const SecondPanel = () => {
  const navigation = useNavigation();
  const user = getuser();
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <View style={styles.left}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="keyboard-backspace" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <TouchableOpacity>
            <Image
              style={styles.userImg}
              source={ require("../assets/images/user.jpg")}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Bienvenue!</Text>
            <Text style={styles.username}>{user?.name}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Feather name="align-right" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecondPanel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 25,
  },

  center: {
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
    alignItems: "center",
    margin: 10,
  },
  welcomeText: {
    fontFamily: "Cairo",
    fontSize: 24,
    fontWeight: "800",
  },
  welcomeText: {
    fontFamily: "Cairo",
    fontSize: 24,
    fontWeight: "600",
  },
  username: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "#FB8703",
    fontWeight: "800",
  },
});
