import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import SecondPanel from "../Components/SecondPanel";
import ProfileSettingsInput from "../Components/profileSettingsInput";
import User from "../utils/User";
import { TouchableOpacity } from "react-native";


const Account = () => {
  const [obscure , setObscure] = useState(true)
  const [userName , setUserName] = useState('')
  const [password , setPassword]= useState('')
  const [email , setEmail] = useState('')
  
  return (
    <View style={styles.container}>
      <View style={{ flex: 1  ,}}>
        <SecondPanel />
      </View>
      <View style={{ flex: 2,justifyContent:'center', }}>
        <ProfileSettingsInput
          label="Nom Complet"
          placeholder={User.name}
          type="default"
        />
        <ProfileSettingsInput
          label="Email"
          placeholder={User.email}
          type="email-address"
        />
         <View>
         <ProfileSettingsInput
          label="Mot Du Passe"
          placeholder='Ex: user123'
          type="default"
        />
         </View>
       
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
