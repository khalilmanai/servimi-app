import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from '../pages/CustomDrawerContent'

const DrawerScreen = () => {

 const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator
    id='Drawer'
   
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
    screenOptions={{
      drawerPosition: "right",
      headerShown: false,
    }}
  >
     <Drawer.Screen name="Account" component={Account} />
     <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
  )
}

export default DrawerScreen

