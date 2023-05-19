import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,

} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartReducers";
const ItemCartCard = ({ item }) => {
  const dispatch = useDispatch()
  const handleRemoveFromCart = (product) => {
    dispatch(removeItemFromCart(product));
  };
  const navigation = useNavigation();

  const base64Image = `data:image/png;base64,${item.img}`;

  return (
    <View
      style={styles.container}
      onPress={() => {
        navigation.navigate("ItemScreen", { item: item });
      }}
    >
      <View style={styles.box}>
        <View>
          <Image
            style={{ height: 110, width: 110, borderRadius: 50 }}
            source={{ uri: base64Image }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.txt}>{item.nom}</Text>
          <Text  numberOfLines={2} ellipsizeMode="tail" style={styles.desc}>{item.description}</Text>
          <Text style={styles.desc}>quantité : {item.quantity}</Text>
          <Text style={styles.prix}> prix unitaire : {item.prix} DT </Text>
        </View>
        <View>
            <TouchableOpacity
            onPress={()=>{
        handleRemoveFromCart(item)
            }}
            >
                <Ionicons name='trash-outline' color='#FB8703' size={24} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemCartCard;

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
    marginRight: "20%",
  },
  txt: {
    fontFamily: "Cairo",
    fontSize: 16,
  },
  desc: {
    width:150,
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
