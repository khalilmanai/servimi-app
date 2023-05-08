import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import StackScreens from "./Navigation/StackScreens";
import WaiterStack from "./Navigation/WaiterStack";
import SecondScreen from "./pages/SecondScreen";
import LoginScreen from "./pages/LoginScreen";
import InputsScreen from "./pages/InputsScreen";
import { TabBar, styles } from "./Navigation/TabBar";

import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Cairo: require("./assets/fonts/Cairo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="FirstScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="TabScreens" component={TabBar} />
            <Stack.Screen name="FirstScreen" component={SecondScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="InputsScreen" component={InputsScreen} />
            <Stack.Screen name="StackScreens" component={StackScreens} />
            <Stack.Screen name="WaiterStack" component={WaiterStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
