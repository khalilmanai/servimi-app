import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Categorie = ({item}) => {
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
  box:{ alignSelf: 'center',borderWidth:1,borderRadius:10, padding: 12},
});
