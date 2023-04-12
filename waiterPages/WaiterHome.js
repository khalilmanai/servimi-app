import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WaiterHome = () => {
  return (
    <View style={styles.container}>
      <Text>WaiterHome</Text>
    </View>
  )
}

export default WaiterHome

const styles = StyleSheet.create({
  container : {
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  }
  
})