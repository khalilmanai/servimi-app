import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import Animated from "react-native-reanimated";

import React, { useState } from "react";
import Profile from "./Profile";
import ConsulterMenu from "./ConsulterMenu";
import Settings from "./Settings";
import ListeCommandes from "./ListeCommandes";
import Notifications from "./Notifications";
import HomePage from "./HomePage";
const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  // animations

  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: ["0deg", "-10deg"],
  });

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 30],
  });
  const animatedStyle = {
    borderRadius,
    transform: [{ scale, rotateZ: rotate }],
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        overlayColor="transparent"
        drawerType="slide"
      
        drawerStyle={{ flex: 1, width: 240, backgroundColor: "transparent" }}
        hideStatusBar={true}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="Acceuil"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        screenOptions={{drawerPosition:'right',headerShown:false,}}
      >
        <Drawer.Screen name="Acceuil">
          {(props) => <HomePage {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Profile">
          {(props) => <Profile {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Liste Commandes">
          {(props) => (
            <ListeCommandes {...props} animatedStyle={animatedStyle} />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Consulter Menu">
          {(props) => (
            <ConsulterMenu {...props} animatedStyle={animatedStyle} />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Notifications">
          {(props) => (
            <Notifications {...props} animatedStyle={animatedStyle} />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Paramétres">
          {(props) => <Settings {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
