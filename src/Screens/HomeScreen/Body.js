import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import colorValue from '../../Shared/commoStyle/ColorValue';
import {commonStyle} from '../../Shared/commoStyle/CommonStyle';
import fontValue from '../../Shared/commoStyle/FontValue';
import {ItemArray} from './Data';

const Body = () => {
  return (
    <FlatList
      data={ItemArray}
      numColumns={3}
      renderItem={({item}) => <Card item={item} />}
    />
  );
};

export default Body;

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.subCard}>
        <View style={styles.body}>
          <Image
            style={{width: '60%', height: '60%', resizeMode: 'contain'}}
            source={item.image}
          />
          <Text
            style={
              commonStyle({fontSize: 13, fontFamily: fontValue.PoninsBold}).text
            }>
            {item.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width * 0.333,
    height: 100,
    marginBottom: 10,
  },
  subCard: {
    margin: 10,
    backgroundColor: colorValue.white,
    height: '100%',
  },
  body: {
    alignItems: 'center',
    marginTop: '20%',
  },
});
