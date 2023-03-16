import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'


const ProfileSettingsInput = (props) => {
  return (
    <View style={styles.textBox} >
    <Text style={styles.label}>{props.label}</Text>
    <TextInput style={styles.input} editable  placeholder={props.placeholder} keyboardType={props.type}/>
  </View>
  )
}

export default ProfileSettingsInput

const styles = StyleSheet.create({
label: {
    fontFamily:'Cairo',
    fontSize:16,
    marginBottom:10,
    color:'#8A8A8A'
  
  },
  textBox:{
    margin:15,
    width:'90%',
    justifyContent:'center'
  },
  input:{
  
  padding:14,
  borderRadius:10,
  backgroundColor:'#E5E4E2'
  },
  
})