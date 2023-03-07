import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import ItemCard from "../Components/ItemCard";
import Items from "../utils/item";
import UserPanel from "../Components/UserPanel";

const ItemList = () => {
  return (
      <View style={styles.container}>
        <UserPanel />
      <FlatList
          data={Items}
          keyExtractor={(index) => String(index)}
          renderItem={({ item }) => <ItemCard item={item} />}
        />
      </View>

  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
 flex:2,
    
  },
});
