import React from "react";
import LoginScreen from "../pages/LoginScreen";
import ResetPassword from "../pages/ResetPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "../pages/SecondScreen";
import InputsScreen from "../pages/InputsScreen";
import Drawer from "../Components/Drawer";
import UserPanel from "../Components/UserPanel";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import ListeCommandes from "../pages/ListeCommandes";
import Notifications from "../pages/Notifications"
import CustomDrawer from "../pages/CustomDrawer";
import Settings from "../pages/Settings"
import ConsulterMenu from '../pages/ConsulterMenu'



const NavStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={SecondScreen} />
      <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={InputsScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen   name='Drawer'  component={Drawer} />
      <Stack.Screen name='Panel' component={UserPanel} />
       <Stack.Screen name='Account' component={Account} />
       <Stack.Screen name='ListeCommandes' component={ListeCommandes} />
       <Stack.Screen name='Notifications' component={Notifications} />
       <Stack.Screen name='Settings' component={Settings} />
       <Stack.Screen name='ConsulterMenu' component={ConsulterMenu} />
    </Stack.Navigator>
  );
};

export default NavStack;
