import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Img from '../assets/images/Bonuses.png'

const Rewards = () => {
  return (
    <View style={styles.container}>
      <Image source={Img} resizeMode='contain' style={{width:'50%',height:'50%'}} />
      <Text style={{marginTop:'-20%' , textAlign:'center' , fontFamily:'Cairo', fontSize:16, margin:10}}>Cumulez des points en utilisant l'application, et profitez de vos récompenses tout de suite !</Text>
    </View>
  )
}

export default Rewards

const styles = StyleSheet.create({ 
  container : {
    flex:1,
  justifyContent:'center',
  alignItems:'center',
  }
})