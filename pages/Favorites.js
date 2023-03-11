import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import Place from '../utils/Place'

import PlaceCard from '../Components/PlaceCard'


const Favorites = () => {
 
  const likedArr=[]

 
 Place.forEach(element => {
 if( element.liked==='true'){
  likedArr.push(element);
 }
  
 });

  
  return (
    <View style = {styles.container}>
       <View style={{margin:20}}>
        <Text style={styles.txt}>Vos Espaces Favorisé</Text>
       </View>
       <FlatList 
      data={likedArr}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item, index }) => <PlaceCard key={index} place={item} />}
       />
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container : {
    flex:1,
    margin:10

  },
  txt:{
    fontFamily:'Cairo',
    fontSize:32,
    borderBottomWidth: 1,
    borderBottomColor: '#FB8703',
   marginBottom:20,
  }
})