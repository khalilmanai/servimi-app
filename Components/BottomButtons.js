import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const BottomButtons = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.skipbtn} onPress={props.onSkipPress}>
        <Text>Passer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={props.onPressContinue}>
        <Text style={styles.txtbtn}>
          Continuer <FontAwesome name="chevron-right" size={16} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
width:'40%',
    elevation: 3,
    height: 50,
    backgroundColor: "#FFB703",
  },
  txtbtn: {
    color: "white",
    fontSize: 16,
  },
  skipbtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width:'40%',
    borderWidth: 2,
    marginRight:10,
   
    height: 50,
    borderColor: "#FFB703",
  },
  buttonContainer: {
    
    flex: 1,
    marginTop:25,
    justifyContent:'center',
    flexDirection: "row",

    
  },
});
export default BottomButtons;
