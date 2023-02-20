import React from "react";
import { TextInput } from "react-native";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import BottomButtons from "../Components/BottomButtons";
import InfoTemplate from "./InfoTemplate";

const ConfirmScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <InfoTemplate text="Confirmer Numéro" />
        <View style={styles.divider}></View>
        <View style={styles.textContainer} >
          <Text style={styles.text}> vous allez recevoir un code sur votre numéro</Text>
              <Text style={styles.text2}> Renvoyer</Text>
        </View>
      
      <View style={styles.inputcontainer} >
      <TextInput style={styles.input} editable keyboardType="number-pad" />
      <TextInput style={styles.input} editable keyboardType="number-pad"/>
      <TextInput style={styles.input} editable keyboardType="number-pad" />
      <TextInput style={styles.input} editable keyboardType="number-pad" />
      </View>
      <BottomButtons />
      <View style={styles.bottomText}>
    <Text style={styles.policeText} >Polices et termes d'utilisation</Text>
    <Text  style={styles.aideText} >Aide</Text>
   </View>
      </View>
      
      </ScrollView>
 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  inputcontainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  divider: {
    margin: 40,
    width: "80%",
    height: 2,
    backgroundColor: "#FB8703",
  },
  text : {
    fontFamily:'Cairo',
  fontSize:16,
  },
  text2 : {
    fontFamily:'Cairo',
  fontSize:16,
  textDecorationLine:'underline',
  color:'#FB8703',
  marginTop:10,
  },
  textContainer : {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    

  },
  input:{
    borderBottomColor:'#D3D3D3',
    borderBottomWidth:3,
    fontSize:40,
    borderBottomEndRadius:10,
    width:60,
    marginRight:10,
    marginLeft:10,
  },
  inputcontainer : {
    flex:2,
    flexDirection:'row',
   marginTop:100,
   marginBottom:40,
    alignItems:'center',
    justifyContent:'center'
  },
  bottomText : {
    marginBottom:20,
    textAlign:'center',
    alignItems:'center'  
 },
 policeText :{
  fontFamily:'Cairo',
  textDecorationLine:'underline',
  color:'#FB8703',
},
aideText :{
  marginTop:5,
  fontFamily:'Cairo',
  textDecorationLine:'underline',
}
});

export default ConfirmScreen;
