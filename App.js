import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import NavStack from "./Navigation/NavStack";


export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <NavStack />
      </NavigationContainer>
  </SafeAreaProvider>
  
  );
}