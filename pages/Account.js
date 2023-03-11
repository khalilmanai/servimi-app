import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SecondPanel from '../Components/SecondPanel'

const Account = () => {
  return (
    <View style={styles.container}>
    <SecondPanel  />
    </View>
  )
}

export default Account

const styles = StyleSheet.create({

container : {
  flex:1,
  flexDirection:'column',
  justifyContent:'flex-start'

},


})