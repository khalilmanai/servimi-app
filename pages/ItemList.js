import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";

import UserPanel from "../Components/UserPanel";
import { getCategorie } from "../api/axios";

const ItemList = ({route}) => {
const  place = route.params
const [items, setItem] = useState([]);

  
   useEffect(() => {
    getCategorie(place.etabId).then((data) => {
      setItem(data);
    }).catch((error)=>{
      console.log(error)
    })
  }, [place.etabId]); 
  
  console.log(items)
  return (
      <View style={styles.container}>
        <UserPanel />
      <FlatList
          data={items}
          keyExtractor={(index) => String(index)}
          renderItem={({ item }) => <ItemCard item={item} />}
        />
      </View>

  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
 flex:1,
 
 },


});
