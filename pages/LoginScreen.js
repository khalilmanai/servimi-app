import React from 'react'
import {View , Text , Image , TouchableOpacity , StyleSheet } from 'react-native'
import logo from '../assets/images/logo.png'
import google from '../assets/images/google.png'
import Inputs from '../Components/Inputs'
import facebook from '../assets/images/facebook.png'
import { useFonts } from 'expo-font'
const LoginScreen = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    Cairo: require("../assets/fonts/Cairo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null
  }

const goto = ()=>{
  navigation.navigate("SignUpScreen")
}
const gotoReset =()=>{
  navigation.navigate('ResetPassword')
}
const gotoHome =()=>{
  navigation.navigate('TabScreens', { screen: 'Home' });
}
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={logo} />
      <Inputs  label = 'Email ou nom'/>
      <Inputs label = 'Mot de Passe'/>
       <TouchableOpacity onPress={gotoReset} style={styles.passText}><Text style={styles.text}> mot de passe oublié ?</Text></TouchableOpacity>
      <View style={styles.connectBtn}>
        <TouchableOpacity onPress={gotoHome} >
          <Text style={[styles.text , styles.connect]}>Se Connecter</Text>
        </TouchableOpacity>
      </View>
    
      <View style={styles.textContainer}>
      <Text style={styles.text}>Vous n'avez pas du compte ?</Text>
      <TouchableOpacity onPress={goto}><Text style={{color:'blue' ,marginLeft:-7}}>Créer compte</Text></TouchableOpacity>
      </View>
       <View style={styles.divider} />
 
   <View style={styles.gbuttonCon}><TouchableOpacity style={styles.gbutton}><Image style={styles.icon} source={google}/><Text style={styles.text} >Connecter avec Google</Text></TouchableOpacity></View>
       <View style={styles.gbuttonCon}><TouchableOpacity style={styles.gbutton}><Image style={styles.icon} source={facebook}/><Text style={styles.text} >Connecter avec Facebook</Text></TouchableOpacity></View>
   

   <View style={styles.bottomText}>
    <TouchableOpacity><Text style={styles.policeText}>Polices et termes d'utilisation</Text></TouchableOpacity>
<TouchableOpacity><Text  style={styles.aideText}>Aide</Text></TouchableOpacity>
   </View>
 </View>
  )
}
// all buttons require Onpress function to be added after 


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    img: {
        resizeMode: "contain",
        height: 200,
        width: 300,
      },
      divider: {
        width:'50%',
        height:2.5,
        margin:20,
        backgroundColor:'#D3D3D3'
      },
      text:{
        margin:10,
        fontFamily:'Cairo',
        color:'#28231D'
      },
      gbutton:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:300,
        height:50,
        backgroundColor:'#FFF9A6',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#D3D3D3'
      },
      textContainer:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center'
      },
      gbuttonCon:{
        width:300,
        height:50,
        margin:10,

      },
      icon:{
        marginRight:5,
        height:30,
        width:30,
      },
  
      bottomText : {
         margin:20,
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
      },
      connectBtn:{
        width:200,
        height:50,
        margin:20,
        backgroundColor:'#FB8703',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
       
      },
      passText: {
        marginTop:-20,
        marginLeft:30,
        alignSelf:'flex-start',
        justifyContent:'center'
      },
      connect : {
        color:'white',
      },
      

})




export default LoginScreen