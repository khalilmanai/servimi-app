import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import UserPanel from '../Components/UserPanel'

const HomePage = ({animationStyle , navigation }) => {
  return (
<Animated.View style={[styles.Anicontainer, animationStyle && [...animationStyle]]}>
        <UserPanel />
      <View style={styles.container}>
      <Text>Home Page</Text>
      </View>
    </Animated.View>
  )
}

export default HomePage

const styles = StyleSheet.create({

  Anicontainer:{
flex:1
  },
  container : {
    flex:7, 
    justifyContent:'center',
    alignItems:'center'

  }
})