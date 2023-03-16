import { StyleSheet, Text, View } from "react-native";
import UserPanel from "../Components/UserPanel";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import place from "../utils/Place";
import { TouchableOpacity } from "react-native";
const PlaceScreen = (props) => {
  return (
    <View style={styles.container}>
      <UserPanel />
      <View style={styles.box}>
        <Image source={place.img}/>
        <View style={styles.contentbox}>
          <View style={{alignItems:'flex-end',margin:10}}>
            <TouchableOpacity>
            <Ionicons name="heart-outline" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <Text>place name</Text>
            <Text> place address</Text>
          </View>
          <View style={{alignItems:'flex-end', margin:10}}>
            <Ionicons name="star" size={16} color="yellow" />
          </View>
        </View>
      </View>
      <View style={{position:'absolute', top:'50%', alignSelf:"center"}}>
        <Text> menu | review </Text>
      </View>
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: "absolute",
    alignSelf: "center",
    top: "20%",
    width: "80%",
    height: "25%",
    borderRadius: 10,
    backgroundColor: "red",
    
  },
  contentbox  : {
    justifyContent:'space-evenly'
  }
});
