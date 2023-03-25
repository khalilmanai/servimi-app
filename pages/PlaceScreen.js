import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import QRScanner from "../utils/qrcode";

const PlaceScreen = ({ navigation, route }) => {
 

  const place = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <ImageBackground
          source={require("../assets/images/food/food2.jpg")}
          resizeMode="cover"
          style={styles.img}
        >
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={32} color="white" />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.bottomSide}>
          <View style={styles.textBox}>
            <Text style={styles.nom}>{place.nom}</Text>
            <Text style={styles.description}>{place.description}</Text>
          </View>
          <View style={styles.panel}>
            <TouchableOpacity
              onPress={() => {
                handleCopy(place.siteweb);
              }}
            >
              <View style={styles.location}>
                <Ionicons name="location-outline" size={16} color="white" />
                <Text
                  style={{
                    fontFamily: "Cairo",
                    marginLeft: 10,
                    color: "white",
                  }}
                >
                  {place.addresse}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.phone}>
                <Ionicons name="call-outline" size={16} color="white" />
                <Text
                  style={{
                    fontFamily: "Cairo",
                    marginLeft: 10,
                    color: "white",
                  }}
                >
                  {place.tel}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.site}>
                <Ionicons name="earth" size={16} color="white" />
                <Text
                  style={{
                    fontFamily: "Cairo",
                    marginLeft: 10,
                    color: "white",
                  }}
                >
                  {place.siteweb}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width:'100%' , height:'100%' , alignItems:'center',}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("qrCode")}
          >
            <Ionicons name="qr-code-outline" size={24} color="white" />
            <Text
              style={{
                fontFamily: "Cairo",
                marginLeft: 10,
                color: "white",
              }}
            >
              
              Scanner QR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("StackScreens", {
                screen: "ItemList",
                params: place,
              });
            }}
          >
            <Ionicons name="fast-food-outline" size={24} color="white" />
            <Text
              style={{
                fontFamily: "Cairo",
                marginLeft: 10,
                color: "white",
              }}
            >
              
              Consulter Menu
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBox: {
    height: "100%",
    width: "100%",
  },
  img: {
    height: "70%",
    width: "100%",
  },
  icon: {
    zIndex: 1,
    position: "absolute",
    top: "10%",
    left: "5%",
  },
  bottomSide: {
    height: "55%",
    position: "absolute",
    alignItems: "center",
    right: 0,
    left: 0,
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  nom: {
    fontFamily: "Cairo",
    fontSize: 34,
  },
  description: {
    color: "gray",
    fontSize: 18,
  },
  textBox: {
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  panel: {
    flexDirection: "row",
    margin: 10,
    flexWrap: "wrap",
  },
  phone: {
    flexDirection: "row",
    backgroundColor: "#03C03C",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  site: {
    flexDirection: "row",
    backgroundColor: "#007FFF",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  location: {
    flexDirection: "row",
    backgroundColor: "#A52A2A",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    margin:'1%',
    flexDirection: "row",
    width: "80%",
    height: "10%",
    backgroundColor: "#FB8703",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
