
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ApiManager } from './axios';

export const disconnectUser = async (navigation) => {
 

  try {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('token');
    delete ApiManager.defaults.headers.common['Authorization'];
    console.log('User disconnected successfully');
    navigation.closeDrawer()
    navigation.replace('StackScreens', { screen: 'LoginPage' });

    return true;
  } catch (error) {
    console.error('Error disconnecting user: ', error.message);
    return false;
  }
};
