import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import starImg from "../assets/images/Icons/star.png";
import location from "../assets/images/Icons/location.png";

const PlaceCard = ({ place }) => {
  const [toggle, setToggle] = useState(false);

  function liked() {
    return toggle ? "true" : "false";
  }

  const navigation = useNavigation();
  const base64Image = `data:image/png;base64,${place.image}`;
  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("StackScreens", {
        screen: "PlaceScreen",
        params: place,
      });
    }}
  >
  
      <View style={styles.container}>
        {/* image container*/}
        <View style={styles.contentBox}>
          <View style={styles.imgBox}>
            <Image
              source={{uri : base64Image}}
              resizeMode="contain"
              style={styles.img}
            />
          </View>
          {/* Text container*/}
          <View style={styles.txtBox}>
            <View>
              <Text style={styles.txt}numberOfLines={1} ellipsizeMode='tail'>{place.nom}</Text>
            </View>
            <View style={styles.box}>
              <Ionicons name="ellipse" size={12} color="green" />
              <Text style={styles.txt1}>{place.nbTable}</Text>
            </View>
            <View style={styles.box}>
              <Ionicons name="location" size={12} color="#FB8703" />
              <Text style={styles.txt1} numberOfLines={1} ellipsizeMode='tail'>{place.addresse}</Text>
            </View>
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity
            onPress={() => {
              setToggle(!toggle);
              liked();
            }}
          >
            <Ionicons
              name={toggle ? "md-heart-sharp" : "md-heart-outline"}
              size={28}
              color="red"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-between",
    marginRight: 5,
    marginBottom: 5,
  },
  box: {
    flexDirection: "row",
    alignItems:'center'
  },
  contentBox: {
    flexDirection: "row",
  },
  txt: {
    fontFamily: "Cairo",
    fontSize: 20,
  },
  txt1: {
    fontFamily: "Cairo",
    fontSize: 16,
    marginLeft: 10,
    
  },
  imgBox: {
    width: 90,
    height: 90,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  line: {
    height: 1.25,
    marginTop: 10,
    backgroundColor: "#FB8703",
  },
  txtBox: {
    width: "60%",
  },
  icon: {
    justifyContent: "center",
  },
});
