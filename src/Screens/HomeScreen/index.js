import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Slider from '../../Shared/components/Slider';
import Body from './Body';
import { donationRequest } from './Data';
import DonationComponent from './DonationComponent';

const HomeScreen = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <FlatList
        data={donationRequest}
        ListHeaderComponent={() => (
          <View>
            <Slider />
            <Body />
          </View>
        )}
        renderItem={({item}) => <DonationComponent item={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
