import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import item  from '../utils/item'
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Items from "../utils/item";

const ItemPage = () => {
const [quantity , setQuantity ] = useState(1);
const [total , setTotal ]= useState(22)
function itemtotal (){
  setTotal((value)=>value + 22 * quantity)
}
function reduceTotal (){
  if(total >= 22){
    setTotal((value)=>value - 22 * quantity)
  }
}
function increment (){
    setQuantity((value)=>value+1)

}
function decrement (){
  if(quantity > 1){
  setQuantity((value)=>value-1)

  }
}
console.log(total)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgBox}>
        <Image
          style={styles.img}
          source={require("../assets/images/food/pizza.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomSide}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={styles.name}>Pizza Neptune</Text>
          <Text style={styles.name}> 22 DT</Text>
        </View>
        <View style={styles.description}>
          <Text style={{ fontFamily: "Cairo", fontSize: 14 }}>Description</Text>
        </View>
        <View style={styles.counterBox}>
          <View style={{flexDirection:'row' , alignItems:'center'}}>
            <TouchableOpacity style={styles.box}
            onPress={()=>{
                decrement()
                reduceTotal()
                
            }}
            >
              <Ionicons
                name="remove-circle-outline"
                size={24}
                color="#FB8703"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
            onPress={()=>{
                increment()
                itemtotal()
            }}
            >
              <Ionicons name="add-circle" size={24} color="#FB8703" />
            </TouchableOpacity>
            <Text style={{fontFamily:'Cairo'}}>x{quantity}  =  {total}</Text>
          </View>
          
        </View>
      
      </View>
    </SafeAreaView>
  );
};

export default ItemPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBox: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  },
  img: {
    marginTop: "5%",
    width: "70%",
    height: "70%",
  },
  bottomSide: {
    margin: 10,
   
  },
  name: {
    fontFamily: "Cairo",
    fontSize: 32,
  },
  description: {
     marginBottom:'5%',
    height: "50%",
    width: "90%",
    backgroundColor: "gray",
  },
  counterBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    width: "70%",
    borderWidth: 1,
    borderRadius: 10,
  },
  box: {
    margin: 10,
  },
});
