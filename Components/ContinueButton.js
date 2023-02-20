import React from 'react'
import { Text , StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
const ContinueButton = (props) => {
  return (
    <TouchableOpacity style = {styles.btn} onPress={props.onPress}>
        <Text style={styles.txtbtn}>Continuer      <FontAwesome name='chevron-right' size={16}/></Text>
     
     </TouchableOpacity>
  )
}





const styles  = StyleSheet.create({
    btn : {
        alignItems: "center",
        justifyContent: "center",
       borderRadius:5,
        width:170,
       elevation : 3,
        height:50,
        backgroundColor:"#FFB703"
    },
    txtbtn: {
        color: 'white', 
        fontSize:16,    
        
    }
})

export default ContinueButton
