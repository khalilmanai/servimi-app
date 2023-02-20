import { View, Text , StyleSheet , FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from "@expo/vector-icons";
import DrawerCard from './DrawerCard';
const Drawer = ({navigation}) => {


  return (
    <View style={styles.container}>
        <View style={styles.cross}><EvilIcons onPress={()=>{navigation.goBack()}} name="close" size={32} color="black" /></View>
<View style={styles.cardView} >
<DrawerCard text="Profile" press={()=>{navigation.navigate("Profile")}}/>
<DrawerCard text="Compte" press={()=>{navigation.navigate("Account")}} />
<DrawerCard text="Langues" press={()=>{navigation.navigate("Language")}} />
<DrawerCard text="Notifications"press={()=>{navigation.navigate("Notifications")}} />
<DrawerCard text="Paramétres" press={()=>{navigation.navigate("Settings")}}/>
</View>
    </View>
  )
}


const styles= StyleSheet.create({
container:{
    flex:1, 
marginTop:100,
    justifyContent:'flex-start',
    alignItems:'center'
},

cross:{
    margin:40,

},
cardView:{
   flex:1,
   justifyContent:'center',
   width:"70%"
}
})

export default Drawer