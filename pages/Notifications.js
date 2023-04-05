import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PushNotification from 'react-native-push-notification';
const Notifications = () => {



PushNotification.localNotification({
  title: 'New message',
  message: ' bonjour , veux tu des bonnes recommandation aux restaurant a visiter !',
});

PushNotification.onNotification((notification) => {
  console.log('User interacted with notification:', notification);
});

  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    }
})