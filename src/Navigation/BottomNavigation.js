import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DonationRequestScreen from '../Screens/DonationRequestScreen';
import {Icon, Badge} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import colorValue from '../Shared/commoStyle/ColorValue';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorValue.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View style={{marginHorizontal:5}}>
              <Image
                resizeMode="contain"
                style={{width:25}}
                source={require('../../assets/image/menu.png')}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal:5}}>
             <View  >
             <Badge status="error" value={10} />
             </View>
              <Fontisto name="bell" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="DonationRequestScreen"
        component={DonationRequestScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="rightcircleo" size={24} color={color} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
