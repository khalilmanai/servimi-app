import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import User from "../utils/User";
import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
const MENUs = [
  {
    name: "Account",
    label: "Compte",
    icon: "person-outline",
  },
  {
    name: "ListeCommandes",
    label: "Consulter Commandes",
    icon: "reorder-four-outline",
  },
  {
    name: "ConsulterMenu",
    label: "Consulter Menu",
    icon: "fast-food-outline",
  },
  {
    name: "Notifications",
    label: "Notifications",
    icon: "notifications-outline",
  },
  {
    name: "Settings",
    label: "Paramétres",
    icon: "settings-outline",
  },
];

const CustomDrawerContent = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fontsLoaded] = useFonts({
    Cairo: require("../assets/fonts/Cairo-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.headerBox}>
          <View style={styles.ImgContainer}>
            <Image
              style={styles.userImg}
              source={User.img}
              resizeMode="contain"
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>{User.name}</Text>
            <Text style={styles.txt}>{User.Country}</Text>
          </View>
        </View>
      </View>

      <DrawerContentScrollView
        scrollEnabled={false}
        contentContainerStyle={{}}
        style={{ marginLeft: -18 }}
      >
        {MENUs.map((menu, index) => {
          return (
            <DrawerItem
              onPress={() => {
                navigation.navigate(menu.name);
                setActiveIndex(index);
              }}
              activeTintColor="#D3D3D3"
              focused={activeIndex === index}
              key={index}
              label={({ focused }) => {
                return (
                  <View style={styles.contents}>
                    <View
                      style={{
                        height: 33,
                        width: 4,
                        marginRight: 26,
                        backgroundColor: focused ? "#fb8703" : "transparent",
                      }}
                    ></View>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <Ionicons name={menu.icon} size={16} />
                      <Text
                        style={{
                          marginLeft: 10,
                          fontWeight: focused ? "bold" : "normal",
                        }}
                      >
                        {menu.label}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            ></DrawerItem>
          );
        })}
      </DrawerContentScrollView>
      <View style={{ marginBottom: 27, marginLeft: 30 }}>
        <View style={styles.contents}>
          <TouchableOpacity style={styles.contents}>
            <FontAwesome5 name="power-off" size={24} color="#C0C0C0" />
            <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
              se déconnecter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 23 }}>
          <Text style={{ color: "gray" }}> version 1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F4",
  },
  box: {
    width: 280,
    heigtht: 257,
    PaddingTop: 20,
    borderBottomEndRadius: 107 / 2,
    backgroundColor: "white",
  },
  headerBox: {
    height: 100,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  ImgContainer: {
    height: 50,
    width: 50,
    marginLeft: 10,
  },
  txtContainer: {
    marginLeft: 20,
  },
  txt: {
    fontSize: 18,
    fontFamily: "Cairo",
    fontWeight: "bold",
  },
  textbold: {
    fontWeight: "bold",
  },
  textNormal: {
    fontWeight: "normal",
  },
  contents: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
