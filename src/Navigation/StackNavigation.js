import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OnBoardingScreen from '../Screens/OnBoardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignupScreen';
import BottomNavigation from './BottomNavigation';
import DrawerNavigation from './DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
         <Stack.Screen
          name="OnBoardingScreen"
         component={OnBoardingScreen} 
         options={{headerMode:false}}
         />
         <Stack.Screen 
          options={{headerMode:false}}
         name="LoginScreen" 
         component={LoginScreen} />
         <Stack.Screen 
         options={{headerMode:false}}
         name="SignUpScreen" 
         component={SignUpScreen} />
         <Stack.Screen 
         options={{headerMode:false}}
         name="BottomNavigation" 
         component={BottomNavigation} />
         
         <Stack.Screen 
         name="DrawerNavigation" 
         component={DrawerNavigation} />
      </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})
