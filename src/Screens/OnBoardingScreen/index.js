import React from 'react';
import {StyleSheet, Image, View, Text, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {commonStyle} from '../../Shared/commoStyle/CommonStyle';
import fontValue from '../../Shared/commoStyle/FontValue';

const OnBoardingScreen = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Onboarding
        pages={Array}
        onSkip={() => console.warn('Skip buuton working well')}
        onDone={() => console.warn('Done Button Woring well')}
        titleStyles={
          commonStyle({fontSize: 25, fontFamily: fontValue.PoppinsMediumItalic}).text
        }
        subTitleStyles ={
          commonStyle({fontSize: 16, fontFamily: fontValue.PoppinsRegular}).text
        }
      />
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
