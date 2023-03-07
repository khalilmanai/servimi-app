import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { AppNavigation } from "./Navigation/AppContainer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Cairo: require("./assets/fonts/Cairo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (

      <NavigationContainer >
        <AppNavigation />
      </NavigationContainer>

  );
}
