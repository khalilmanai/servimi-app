import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Inputs = (props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} editable />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({

  label: {
    alignSelf:'flex-start',
    fontFamily:'Cairo',
    color:'#28231D',
    fontSize: 16,
    marginLeft:5,
  },
  input: {
    marginTop:-8,
    borderBottomWidth: 1,
    width: 350,
    borderBottomColor: "grey",
    marginBottom:20,
  },
});
