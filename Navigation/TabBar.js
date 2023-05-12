import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Favorites from '../pages/Favorites';
import HomePage from '../pages/HomePage';
import { useNavigation } from '@react-navigation/native';
import Cart from '../pages/Cart';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Settings from '../pages/Settings';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
export const TabBar = () => {
  const navigation = useNavigation();

  const scanned = useSelector(state => state.scan.scanned)

  const tabBarRef = useRef(null); // Create a reference to the tab bar navigator




  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'ios-home-outline';
        break;
      case 'Favorites':
        icon = 'heart-outline';
        break;
        case 'Cart': 
        icon =  'fast-food-outline'
        break;
        case 'Settings':
        icon= 'settings-outline';
        break;
    }
    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? '#FB8703' : 'gray'}
      />
    );
  };
  const renderTabBar = ({routeName }) => {

    if (routeName === 'Cart') {
      tabBarRef.current.setVisible(false);
    } else {
      tabBarRef.current.setVisible(true);
    }
    return (
      <TouchableOpacity
        onPress={() => {
          if (routeName === 'Cart' && scanned === false) {
            Alert.alert(
              'servimi',
              'scanner le qr du table pour pouvoir commander',
              [{ text: 'ok' }]
            );
            return;
          } else if (routeName === 'Cart' && scanned === true) {
            navigation.navigate(routeName);
            hideTabBar();
          }else {
          navigation.navigate(routeName);
         } }}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName)}
      </TouchableOpacity>
    );
  };
  

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    enabled={false}
    style={{flex:1}}
  >
     
        <CurvedBottomBarExpo.Navigator
          style={styles.bottomBar}
          ref={tabBarRef} 
          height={60}
          circleWidth={50}
          bgColor="white"
          initialRouteName="Home"
          borderTopLeftRight
          screenOptions={{
            headerShown:false,
            tabBarHideOnKeyboard:true,
          }}
        
          renderCircle={({ selectedTab }) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
              onPress={()=> navigation.navigate("StackScreens" , {screen : 'QrScanner'})}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                >
                <Ionicons name={'qr-code-outline'} color="white" size={32} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBarExpo.Screen
            name="Home"
            position="LEFT"
            component={HomePage}
          />
           <CurvedBottomBarExpo.Screen
            name="Favorites"
            position="LEFT"
            component={Favorites}
          />
           <CurvedBottomBarExpo.Screen
    
            name="Cart"
            component={Cart}
            position="RIGHT"
          />
          <CurvedBottomBarExpo.Screen
            name="Settings"
            component={Settings}
            position="RIGHT"
          />
            
        </CurvedBottomBarExpo.Navigator>

    </KeyboardAvoidingView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FB8703',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});