import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ListeCommandes from "../pages/ListeCommandes";
import Notifications from "../pages/Notifications";

import Settings from "../pages/Settings";
import HomePage from "../pages/HomePage";
import SecondScreen from "../pages/SecondScreen";
import LoginScreen from "../pages/LoginScreen";
import InputsScreen from "../pages/InputsScreen";
import Account from "../pages/Account";
import { TabBar } from "./bottomnav";
import CustomDrawerContent from "../pages/CustomDrawerContent";
import Favorites from "../pages/Favorites";
import UserPanel from "../Components/UserPanel";
import QRScanner from "../utils/qrcode";
import ItemList from '../pages/ItemList'
import SecondPanel from "../Components/SecondPanel";
import PlaceScreen from "../pages/PlaceScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ItemPage from "../pages/ItemPage";
import ItemCard from "../Components/ItemCard";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// define the screens for the Stack Navigator
function StackScreens() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const user = await AsyncStorage.getItem('user');
    setIsLoggedIn(!!user);
  }

  return (
    <Stack.Navigator
      initialRouteName="SecondScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    { isLoggedIn ? <Stack.Screen name="Acceuil" component={HomePage} /> :
      <Stack.Screen name="LoginScreen" component={LoginScreen} />}
      <Stack.Screen name="SignUpScreen" component={InputsScreen} />
      <Stack.Screen name="UserPanel" component={UserPanel} />
      <Stack.Screen name = 'Account' component={Account} />
      <Stack.Screen name="LoginPage" component={LoginScreen} />
      <Stack.Screen name="HomePage" component={HomePage}  />
      <Stack.Screen name="TabScreens" component={TabScreens} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="qrCode" component={QRScanner} />
      <Stack.Screen name="ListeCommandes" component={ListeCommandes} />
      <Stack.Screen name='PlaceScreen' component={PlaceScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SecondPanel" component={SecondPanel} />
      <Stack.Screen name='ItemList' component={ItemList} />
      <Stack.Screen name='ItemPage' component={ItemPage} />
      <Stack.Screen name = 'ItemCard'component={ItemCard}/>
      <Stack.Screen name="Notifications" component={Notifications} />

    </Stack.Navigator>
  );
}

// define the screens for the Bottom Tab Navigator
function TabScreens() {
  return <TabBar />;
}

function DrawerScreens() {
  return (
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
    <Stack.Screen name='Account' component={Account} />
       </Drawer.Navigator>
  );
}

export { StackScreens, DrawerScreens, TabScreens };
