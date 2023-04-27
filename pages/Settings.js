import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { disconnect } from "../api/axios";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Settings = () => {
  const navigation = useNavigation()
  const  role = useSelector(state=> state.role.role)
  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Ionicons name='arrow-back' size={36} color='black' />
      <Text style={styles.headerText}>Paramétres</Text>
    </View>

  </View>
)};

export default Settings;

const styles = StyleSheet.create({
  container : {
    flex:1
  },
  header: {
    margin:60,
    flexDirection:'row',
    width:'100%'
  },
  headerText : {
    
  }
})
