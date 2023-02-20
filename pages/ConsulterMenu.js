import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ConsulterMenu = () => {
  return (
    <View style={styles.container}>
      <Text>Consulter Menu</Text>
    </View>
  )
}

export default ConsulterMenu

const styles = StyleSheet.create({
  container : {
    flex:1, 
    justifyContent:'center',
    alignItems:'center'

  }
})