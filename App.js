import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import CustomDrawerContent from "./pages/CustomDrawerContent";
import {StackScreens , TabScreens } from './Navigation/navigationContainer'

export default function App() {
  const [fontsLoaded] = useFonts({
    Cairo: require("./assets/fonts/Cairo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const Drawer = createDrawerNavigator()
  return (

      <NavigationContainer >
        <Drawer.Navigator
          initialRouteName="SecondScreen"
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
      screenOptions={{ drawerPosition: "right", headerShown: false }}
    >
          <Drawer.Screen name ='StackScreens' component={StackScreens} />
          <Drawer.Screen name='TabScreens' component={TabScreens} />
         
        </Drawer.Navigator>
   
      </NavigationContainer>

  );
}