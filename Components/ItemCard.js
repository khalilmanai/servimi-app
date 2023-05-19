import { StyleSheet, Text, View, Image, TouchableOpacity , Alert} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setScanned } from "../redux/qrReducer";
const ItemCard = ({ item}) => {
  const navigation = useNavigation();

  const base64Image = `data:image/png;base64,${item.image}`;

  return (
    <TouchableOpacity
      style={styles.container} 
      onPress={() => {
        navigation.navigate('ItemScreen', { item: item})
      }}
    >
      <View style={styles.box}>
      <View>
          <Image
            style={{ height: 110, width: 110,  borderRadius:50}}
            source={{ uri: base64Image }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.txt}>{item.nom}</Text>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.desc}>{item.description}</Text>
          <Text style={styles.prix}>{item.prix} DT </Text>
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
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  textBox: {
    marginRight:"25%"
  },
  txt: {
    fontFamily: "Cairo",
    fontSize: 16,
  },
  desc: {
    fontFamily: "Cairo",
    fontSize: 10,

    color: "gray",
    margin:10,
    
  },
  prix: {
    fontFamily: "Cairo",
    fontSize: 16,
    color: "#FB8703",
  },
});
