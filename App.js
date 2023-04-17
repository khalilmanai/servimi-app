import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import CustomDrawerContent from "./pages/CustomDrawerContent";
import { DrawerScreens, TabScreens } from "./Navigation/navigationContainer";
import { ApiManager } from "./api/axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import StackScreens from "./Navigation/StackScreens";
import WaiterStack from "./Navigation/WaiterStack";
import SecondScreen from "./pages/SecondScreen";
import LoginScreen from "./pages/LoginScreen";
import InputsScreen from "./pages/InputsScreen";

export default function App() {
 
  const [fontsLoaded] = useFonts({
    Cairo: require("./assets/fonts/Cairo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="FirstScreen"
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
          <Drawer.Screen name='FirstScreen' component={SecondScreen} />
          <Drawer.Screen name='LoginScreen' component={LoginScreen} />
          <Drawer.Screen name='InputsScreen' component={InputsScreen} />
          <Drawer.Screen name="StackScreens" component={StackScreens} />
          <Drawer.Screen name="DrawerScreen" component={DrawerScreens} />
          <Drawer.Screen name="WaiterStack" component={WaiterStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
