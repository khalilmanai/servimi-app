import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WaiterHome from '../waiterPages/WaiterHome'
import SecondScreen from '../pages/SecondScreen'
import CommandeScreen from '../waiterPages/CommandeScreen'

const WaiterStack = () => {
    const WaiterStack = createStackNavigator()
  return (
    <WaiterStack.Navigator initialRouteName="WaiterHome"
    screenOptions={{
        headerShown:false,
        drawerLockMode  :'locked-closed'
      
    }}
    >
        <WaiterStack.Screen name="WaiterHome"   component={WaiterHome}
          options={{
          
            drawerLockMode: 'locked-closed', // Disable drawer on this screen
          }} />
        <WaiterStack.Screen name='EntryScreen' component={SecondScreen} />
        <WaiterStack.Screen name='CommandeScreen' component={CommandeScreen} />
      </WaiterStack.Navigator>
  )
}

export default WaiterStack

