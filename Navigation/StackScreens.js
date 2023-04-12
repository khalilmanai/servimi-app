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
import { TabScreens } from "./navigationContainer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SecondScreen from "../pages/SecondScreen";
import LoginScreen from "../pages/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiManager } from "../api/axios";
import Inputs from "../Components/Inputs";
import InputsScreen from "../pages/InputsScreen";

const StackScreens = () => {
  const Stack = createStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const role = useSelector((state) => state.role.role);

  const isUserLoggedIn = async () => {
 try {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      ApiManager.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return true;
    } 
 }catch(error){
    console.error("error logging", error)
 }
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isUserLoggedIn();
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
  }, []);

  if (!isLoggedIn) {
    return <Stack.Navigator 
    screenOptions={
        {headerShown:false}
    }
    initialRouteName="SecondScreen" >
        <Stack.Screen  name='SecondScreen' component={SecondScreen} />
        <Stack.Screen name= 'LoginScreen' component={LoginScreen} />
        <Stack.Screen name='InputsScreen' component={InputsScreen} />
    </Stack.Navigator>;
  }

  if (role === "ROLE_WAITER") {
    return (
      <WaiterStack.Navigator initialRouteName="WaiterHome">
        <WaiterStack.Screen name="WaiterHome" component={WaiterHome} />
      </WaiterStack.Navigator>
    );
  } else if (role === "ROLE_CLIENT") {
    return (
      <Stack.Navigator
        initialRouteName="HomePage"
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
        <Stack.Screen name="TabScreens" component={TabScreens} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ItemList" component={ItemList} />
      </Stack.Navigator>
    );
  }
};
export default StackScreens;
