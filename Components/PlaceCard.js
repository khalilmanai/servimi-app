import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {React,  useState } from "react";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import starImg from "../assets/images/Icons/star.png";
import location from "../assets/images/Icons/location.png";

const PlaceCard = ({ place }) => {
  
  const [toggle, setToggle] = useState(false);

function liked(place){
 return   toggle ? place.liked='true' : place.liked='false'
}



  function setIcon() {
    return toggle ? "md-heart-sharp" : "md-heart-outline";
  }
  const navigation = useNavigation();

  return (

    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ItemList");
      }}
    >
      <View style={styles.container}>
        {/* image container*/}
        <View style={styles.imgBox}>
          <Image source={place.img} resizeMode="contain" style={styles.img} />
        </View>
        {/* Text container*/}
        <View style={styles.txtBox}>
          <Text style={styles.txt}>{place.name}</Text>
          <Text style={styles.txt1}>
            {place.type} | {place.rating}{" "}
            <Image source={starImg} resizeMode="contain" />
          </Text>
          <Text style={styles.txt1}>
            <Image
              source={location}
              resizeMode="contain"
              style={{ height: 10, width: 10 }}
            />{" "}
            {place.adresse}
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={
            () =>{ setToggle
            (!toggle)
          liked
          }
            
            
            }>
            <Ionicons name={setIcon()} size={28} color='red' />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>

  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  container: {
  flex:1,
  flexDirection:'row',  
  marginBottom:10,

  alignItems:'center',
  justifyContent:'flex-start',
  width:'100%'
  

  

  },
  txt: {
    fontFamily: "Cairo",
    fontSize: 20,
  },
  txt1: {

    fontFamily: "Cairo",
    fontSize: 16,
  },
  imgBox: {
    width: 90,
    height: 90,
    marginRight:10,
    alignItems: "center",
    justifyContent: "center",
  
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  line: {
    width:'190%',
    height: 1.25,
    marginTop: 10,
    backgroundColor: "#FB8703"
  },
  txtBox:{
marginRight:'20%'
  },
  icon:{
 
    justifyContent:'center'
  }
,
});
