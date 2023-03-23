import "react-native-gesture-handler";
import React, { useState , useEffect} from "react";


import Profile from './pages/Profile'

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import Splash from "./Components/Splash";
import CustomDrawerContent from "./pages/CustomDrawerContent";
import {
  StackScreens,
  DrawerScreens,
  TabScreens,
} from "./Navigation/navigationContainer";
import {  ApiManager} from "./api/axios";
import ItemList from "./pages/ItemList";
import ItemPage from "./pages/ItemPage";
import ItemCard from "./Components/ItemCard";


export default function App() {
  

useEffect(()=>{
  ApiManager()
  
},[])
  

  const [fontsLoaded] = useFonts({
    Cairo: require("./assets/fonts/Cairo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
      
        overlayColor="transparent"
        drawerType="slide"
        drawerStyle={{ flex: 1, width: 240, backgroundColor: "transparent" }}
        hideStatusBar={true}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        drawerContent={(props) => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        screenOptions={{
          drawerPosition: "right",
          headerShown: false,
   
        }}
      >
      <Drawer.Screen name="TabScreens" component={TabScreens} />
        <Drawer.Screen name="StackScreens" component={StackScreens} />
        <Drawer.Screen name="DrawerScreen" component={DrawerScreens} />
      
      </Drawer.Navigator> 
    </NavigationContainer> 

  );
}
