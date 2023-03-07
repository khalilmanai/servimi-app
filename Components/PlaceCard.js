import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
 import starImg from '../assets/images/Icons/star.png'
 import  location from '../assets/images/Icons/location.png'
const PlaceCard = ({place}) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Cairo: require("../assets/fonts/Cairo-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null
  };     
  
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      navigation.navigate('ItemList')
    }}>
    <View style={styles.container}>
      {/* image container*/}
      <View style={styles.imgBox}>
        <Image source={place.img} resizeMode="contain" style={styles.img} />
      </View>
      {/* Text container*/}
      <View style={styles.txtBox}>
        <Text style={styles.txt}>{place.name}</Text>
        <Text style={styles.txt1}>
          {place.type} | {place.rating} <Image source={starImg} resizeMode='contain' />
        </Text>
        <Text style={styles.txt1}><Image source={location} resizeMode='contain' style={{height:10, width:10,}} /> {place.adresse}</Text>
        <View style={styles.line} />
      </View>
    </View>
    </TouchableOpacity>
  );
};
export default PlaceCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 130,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontFamily: "Cairo",
    fontSize: 20,
  },
  imgBox: {
    width: 80,
    height: 80,
    alignItems:'center', 
    justifyContent:'center'
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  line: {
    width: "100%",
    height: 1.25,
    marginTop: 10,
    backgroundColor: "#FB8703",
  },
  txtBox : {
    width:250,
    marginLeft:15,
    
  },
  txt1:{
    marginBottom:5,
  }
});
