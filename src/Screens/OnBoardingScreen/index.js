import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {getMyStringValue, setStringValue} from '../../Global/AsyncStorage';
import {commonStyle} from '../../Shared/commoStyle/CommonStyle';
import fontValue from '../../Shared/commoStyle/FontValue';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const onBoardingDone = async () => {
    try {
      await setStringValue('onboarding', 'true');
      await navigation.navigate('LoginScreen');
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const stringValue = await getMyStringValue('onboarding');
      if (stringValue === 'true') {
        navigation.navigate('LoginScreen');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.main}>
        <Onboarding
          pages={Array}
          onSkip={() => onBoardingDone()}
          onDone={() => onBoardingDone()}
          titleStyles={
            commonStyle({
              fontSize: 25,
              fontFamily: fontValue.PoppinsMediumItalic,
            }).text
          }
          subTitleStyles={
            commonStyle({fontSize: 16, fontFamily: fontValue.PoppinsRegular})
              .text
          }
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
});

const Array = [
  {
    backgroundColor: '#fff',
    image: <Image source={require('../../../assets/image/bro.png')} />,
    title: 'Find Blood Donners',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
  {
    backgroundColor: '#fff',
    image: <Image source={require('../../../assets/image/rafiki.png')} />,
    title: 'Post a Bllod Request',
    subtitle: 'This is the subtitle that sumplements the title.',
  },
];
