import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WaiterHome from '../waiterPages/WaiterHome'

const WaiterStack = () => {
    const WaiterStack = createStackNavigator()
  return (
    <WaiterStack.Navigator initialRouteName="WaiterHome"
    screenOptions={{
        headerShown:false
    }}
    >
        <WaiterStack.Screen name="WaiterHome" component={WaiterHome} />
      </WaiterStack.Navigator>
  )
}

export default WaiterStack

