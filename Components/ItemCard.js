import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ApiManager } from "../api/axios";

const ItemCard = ({ item }) => {
  const [image, setImageUri] = useState("");
  const navigation = useNavigation();
  /* 
  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await ApiManager.get('solutionprisecommandeatable/v1/MANAGER/image/display/1');
         setImageUri(response.data.url);
        setImageUri(uri);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImage();
  }, []); */

  console.log(image);

  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={styles.box}>
        <View style={styles.textBox}>
          <Text style={styles.txt}>Pizza Neptune</Text>
          <Text style={styles.desc}>Description</Text>
        </View>
        <View>
          <Image
            style={{ height: 110, width: 110 , marginRight:-50}}
            source={require("../assets/images/food/pizza.png")}
            resizeMode="contain"
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
  },
  box: {
  
    width: "95%",
    height: "15%",
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center'
    ,overflow:'hidden'
  },
  textBox: {
    margin: "5%",

  },
  txt : {
    fontFamily:'Cairo', 
    fontSize:16
  },
  desc : {
    fontFamily:'Cairo', 
    fontSize:16,
    color:'gray'
  }
});
