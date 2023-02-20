import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
import React from 'react'

const DrawerCard = (props) => {
  return (
  <TouchableOpacity  onPress={props.press}>
     <View style={styles.card}>
        <Text>{props.text}</Text>
     </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        width:'90%',
        padding:16,
        borderRadius:10,
        backgroundColor:'#D3D3D3',
        margin:'3%',
    },
})

export default DrawerCard