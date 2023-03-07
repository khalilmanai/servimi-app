import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserPanel from '../Components/UserPanel'


const HomePage = ({navigation }) => {
  return (
    <View style={styles.container}>
        <UserPanel />
    <View style={styles.box}>
      <Text style={{fontFamily:'Cairo' , fontSize:20 , marginLeft:5,}}>Offres Du Jour</Text>
   
    </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    box:{
      flex:6,
      margin:10

    }
})