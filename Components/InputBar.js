import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'


const InputBar = (props) => {
  return (
  <View style={{flex:1}}>
    <TextInput 
    style={styles.input}
     editable 
     value={props.value}
     onChangeText={props.onChange}
    placeholder={props.placeholder}
    
      keyboardType={props.type}/>
   </View>

  )
}

export default InputBar

const styles = StyleSheet.create({
  input:{
    padding:'7%',
 
    alignSelf:'center',
borderRadius:10,
    backgroundColor:'#DBD7D2',
    width:'90%'
  }
})
