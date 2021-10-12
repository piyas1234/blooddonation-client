//import liraries
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import StackNavigation from './src/Navigation/StackNavigation';
 

// create a component
const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="white" />
      <View style={styles.main}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </View>
    </View>
  );
};

//make this component available to the app
export default App;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
});
