import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListeCommandes = () => {
  return (
    <View style={styles.container}>
      <Text>Liste Commandes</Text>
    </View>
  )
}

export default ListeCommandes

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    }
})