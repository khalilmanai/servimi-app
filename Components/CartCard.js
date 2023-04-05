import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'

const CartCard = (props) => {
  const item = props.item
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
    <View style={{margin:'10%'}}>
    <Text>{item.nom}</Text>
     <Text>{Item.prix} </Text>
    </View>
    <View>
      <Text> Quantity</Text>
    </View>
     <Image source={{uri : item.base64Image}}  style={{height:'30%' , width:'30%' }}
     resizeMode='contain'
     />
     </View>
    
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
    container : {
        flex:1,
    }
})