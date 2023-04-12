import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CategorieData from "../utils/CategorieData";

export const CategorieList = () => {
  return (
    <View style={styles.container }>
      <FlatList
      horizontal:true
        data={CategorieData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Categorie item={item} />}
      />
    </View>
  );
};

const Categorie = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default Categorie;

const styles = StyleSheet.create({
  container: {
    flex: 7,
    height: 70,
    width: "100%",
  },
  box: { alignSelf: "center", borderWidth: 1, borderRadius: 10, padding: 12 },
});
