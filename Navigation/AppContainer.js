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
import UserPanel from "../Components/UserPanel";
import QRScanner from "../utils/qrcode";
import SecondPanel from "../Components/SecondPanel";
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
      <Stack.Screen name="UserPanel" component={UserPanel} />
      <Stack.Screen name="TabScreens" component={TabScreens} />
      <Stack.Screen name="Acceuil" component={HomePage} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name='qrCode' component={QRScanner} />
      <Stack.Screen name="ListeCommandes" component={ListeCommandes} />
      <Stack.Screen name="ConsulterMenu" component={ConsulterMenu} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name='SecondPanel' component={SecondPanel} />
    </Stack.Navigator>
  );
}

// define the screens for the Bottom Tab Navigator
function TabScreens() {
  return <TabBar />;
}

export { StackScreens,  TabScreens };
