import React from 'react'
import {View , StyleSheet, ScrollView} from 'react-native'
import BottomButtons from '../Components/BottomButtons'
import Inputs from '../Components/Inputs'
import InfoTemplate from './InfoTemplate'

const InputsScreen = ({navigation}) => {


const goto = ()=>{
  navigation.navigate('LoginScreen')
}

  return (
    <ScrollView  style={styles.Scrollcontainer}>
   <View style={styles.container}>
    <InfoTemplate text='Vos Informations' />
    </View>
    <View style={styles.inputcontainer}>
      <Inputs label ='Nom'/>
         <Inputs label ='Prénom'/>
         <Inputs label ='Email'/>
         <Inputs label ='Password'/>
         <Inputs label ='Téléphone'/>
         <Inputs label ='Addresse'/>
         </View>
         <BottomButtons onPressContinue={goto}/>
    
   
   </ScrollView>
  )
}
const styles = StyleSheet.create({
  Scrollcontainer : {
    flex:1,
   
  },
  
  
  container : {
    flex:2, 
    marginTop:150,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    
  },
  inputcontainer : {
    flex:3,
  justifyContent:'center',
  alignItems:'center',
   margin:30,
  },
})

export default InputsScreen