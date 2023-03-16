import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Inputs = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.changeValue}
        secureTextEntry={props.secureText}
        keyboardType={props.type}
        placeholder={props.placeholder}
      
      />
    </View>
  );
};

export default Inputs;
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  input: {
    width: width / 1.2,
    height: height / 15,
    backgroundColor: "#E5E4E2",
    margin: 10,
    borderRadius:10,
    paddingLeft:20,
  
  },
});
