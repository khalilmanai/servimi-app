import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Favorites from '../pages/Favorites';
import HomePage from '../pages/HomePage';
import ListeCommandes from '../pages/ListeCommandes';
import Rewards from '../pages/Rewards';

export const TabBar = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'ios-home-outline';
        break;
      case 'Favorites':
        icon = 'heart-outline';
        break;
        case 'Rewards': 
        icon =  'trophy-outline'
        break;
        case 'ListeCommandes':
        icon= 'reorder-four';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
     
        <CurvedBottomBar.Navigator
          style={styles.bottomBar}
       
          height={60}
          circleWidth={50}
          bgColor="white"
          initialRouteName="Home"
          borderTopLeftRight
          screenOptions={{
            headerShown:false,
          }}
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={()=> {navigate(selectedTab)}}>
                <Ionicons name={'search-outline'} color="white" size={32} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="Home"
            position="LEFT"
            component={HomePage}
          />
           <CurvedBottomBar.Screen
            name="Favorites"
            position="LEFT"
            component={Favorites}
          />
          <CurvedBottomBar.Screen
            name="Rewards"
            component={Rewards}
            position="RIGHT"
          />
             <CurvedBottomBar.Screen
            name="ListeCommandes"
            component={ListeCommandes}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>

    </View>
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