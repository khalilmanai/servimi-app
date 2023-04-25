import { useState } from "react";
import ItemCard from "../Components/ItemCard";
import SecondPanel from "../Components/SecondPanel";
import UserPanel from "../Components/UserPanel";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import HomePage from "../pages/HomePage";
import ItemList from "../pages/ItemList";
import ItemScreen from "../pages/ItemScreen";
import PlaceScreen from "../pages/PlaceScreen";
import QRScanner from "../pages/QrScanner";
import ResetPassword from "../pages/ResetPassword";
import Settings from "../pages/Settings";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const StackScreens = () => {
 
    return (
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="UserPanel" component={UserPanel} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="QrScanner" component={QRScanner} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SecondPanel" component={SecondPanel} />
        <Stack.Screen name="ItemCard" component={ItemCard} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ItemList" component={ItemList} />
      </Stack.Navigator>
    );
  };

export default StackScreens;
