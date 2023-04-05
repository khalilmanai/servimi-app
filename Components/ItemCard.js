import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ApiManager } from "../api/axios";

const ItemCard = ({ item }) => {
  const navigation = useNavigation();

  const base64Image = `data:image/png;base64,${item.image}`;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("StackScreens", { screen: "ItemScreen", params: item });
      }}
    >
      <View style={styles.box}>
        <View style={styles.textBox}>
          <Text style={styles.txt}>{item.nom}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.prix}>{item.prix} DT </Text>
        </View>
        <View>
          <Image
            style={{ height: 110, width: 110, marginRight: -50 , borderRadius:50}}
            source={{ uri: base64Image }}
            resizeMode="cover"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  box: {
    marginBottom: 10,
    width: "95%",
    height: "100%",
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  textBox: {
    margin: "5%",
  },
  txt: {
    fontFamily: "Cairo",
    fontSize: 16,
  },
  desc: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "gray",
  },
  prix: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "#FB8703",
  },
});
