import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import SecondPanel from "../Components/SecondPanel";
import ProfileSettingsInput from "../Components/profileSettingsInput";
import { TouchableOpacity } from "react-native";
import { getuser } from "../api/getUser";


const Account = () => {
  const [obscure , setObscure] = useState(true)
  const [userName , setUserName] = useState('')
  const [password , setPassword]= useState('')
  const [email , setEmail] = useState('')
  const User = getuser()
  
  return (
    <View style={styles.container}>
      <View style={{ flex: 1  ,}}>
        <SecondPanel />
  
   
       
      </View>
<View style={styles.boxbox}>
      
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontFamily:'Cairo' , fontSize:16, color:'white'}}>Sauvgarder</Text>
        </TouchableOpacity>
      </View></View>
  
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'center',
    marginTop:'5%',
  },
  btn: {
    width: "70%",
    padding: 14,
    borderRadius: 10,
    margin: 25,
    backgroundColor: "#FB8703",
    justifyContent: "center",
    alignItems: "center",
  },
  boxbox:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'10%',
  }
});
