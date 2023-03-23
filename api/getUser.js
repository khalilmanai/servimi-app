import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';


export const getuser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };
    getUser();
  }, []);

  return user;
};
