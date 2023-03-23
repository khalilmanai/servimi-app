import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import PizzaImg from "../assets/images/food/pizza.png";
import { Ionicons } from "@expo/vector-icons";
const ItemCard = ({item}) => {
  return (
    
      <TouchableOpacity style={styles.container}>
      <View style={styles.txtBox}>
        <View style={styles.rowBox}>
          <Text style={styles.name}>{item.name}</Text>
        
        </View>
        <Text style={styles.discription}>{item.ingredients.join(',')}</Text>
      <Text style={styles.price}>{item.price} DT </Text>
      </View>
    
        <Image style={styles.img} source={PizzaImg} resizeMode="contain" />
        </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    backgroundColor: "#E8E6E3",
  
   alignItems:"center",
   justifyContent:"space-around",
    margin: 10,
    borderRadius: 10,
    overflow:'hidden',
  },
  txtBox: {
    flexDirection: "column",
    padding:15,
  flexWrap:'wrap'
  },
  rowBox: {
    flexDirection: "row",
  alignItems:'center'
  },
  name : {
    fontFamily:'Cairo',
    fontSize: 20,
    marginRight: 10,
    marginBottom:5,
  },
  price : {
    fontFamily:'Cairo',
    fontSize: 20,
    marginRight: 10,
    marginBottom:5,
  },
  img: {
    height: 120,
    width: 120,
    marginRight:-80,
    

  },
  discription:{
    fontFamily:'Cairo',
    fontSize: 16,
    color:'#676161',
    marginBottom:5,
    alignItems:'center',
    justifyContent:'center'
  }
});
