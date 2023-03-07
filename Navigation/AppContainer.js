import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ListeCommandes from "../pages/ListeCommandes";
import Notifications from "../pages/Notifications";
import ConsulterMenu from "../pages/ConsulterMenu";
import Settings from "../pages/Settings";
import HomePage from "../pages/HomePage";
import SecondScreen from "../pages/SecondScreen";
import LoginScreen from "../pages/LoginScreen";
import InputsScreen from "../pages/InputsScreen";
import Account from "../pages/Account";
import { TabBar } from "./bottomnav";
import CustomDrawerContent from "../pages/CustomDrawerContent";
import Favorites from "../pages/Favorites";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// define the screens for the Stack Navigator
function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={InputsScreen} />
    </Stack.Navigator>
  );
}



// define the screens for the Bottom Tab Navigator
export function TabScreens() {
  return <TabBar />;
}

// nest the Drawer and Bottom Tab Navigators inside the Stack Navigator
export function AppNavigation() {
  return (
    <Drawer.Navigator
    initialRouteName="account"
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
      <Drawer.Screen name="TabScreens" component={TabScreens} />
      <Drawer.Screen name="StackScreens" component={StackScreens} />
      <Drawer.Screen name="Acceuil" component={HomePage} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name ='Favorites' component={Favorites} />
            <Drawer.Screen name="ListeCommandes" component={ListeCommandes} />
      <Drawer.Screen name="ConsulterMenu" component={ConsulterMenu} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Settings" component={Settings} />

    </Drawer.Navigator>
  );
}
