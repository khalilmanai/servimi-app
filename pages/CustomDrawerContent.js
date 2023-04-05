import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

import { disconnectUser } from "../api/Disconnect";
import { getuser } from "../api/getUser";


const MENUs = [
   {

    name: "HomePage",
    label: "Acceuil",
    icon: "home-outline",
   },
  {
    name: "Account",
    label: "Compte",
    icon: "person-outline",
  },

  {
    name:  'Cart',
    label: "Liste Commandes",
    icon: "fast-food-outline",
  },
  {
    name: "Settings",
    label: "Paramétres",
    icon: "settings-outline",
  },
];




const CustomDrawerContent = ({ navigation }) => {
  const user = getuser()
 
 const handleDisconnect = async()=>  await disconnectUser(navigation);

  const [activeIndex, setActiveIndex] = useState(0);
  function greet() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    if (currentHour < 12) {
      return "Bonjour , et bon appetit";
    } else {
      return "Bonsoir , et bon appetit";
    }
  }
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.headerBox}>
          <View style={styles.ImgContainer}>
            <Image
              style={styles.userImg}
              source={require('../assets/images/user.jpg')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>{greet()}</Text>
            
          </View>
        </View>
      </View>

      <DrawerContentScrollView
        scrollEnabled={false}
        contentContainerStyle={{}}
        style={{ marginLeft: "-2%" }}
      >
        {MENUs.map((menu, index) => {
          return (
            <DrawerItem
              onPress={() => {
                navigation.navigate("StackScreens", { screen: menu.name });;
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
      <TouchableOpacity style={styles.contents}
           onPress={()=>{
            handleDisconnect()
           }}
          >
        <View style={styles.contents}>
        
            <FontAwesome5 name="power-off" size={24} color="#C0C0C0" />
            <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
              se déconnecter
            </Text>
        
        </View>
        </TouchableOpacity>
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
    fontSize: 16,
    
    fontFamily: "Cairo",

  
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
