import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import colorValue from '../../commoStyle/ColorValue'

const Slider = () => (
  <View style={styles.main}>
       <View style={styles.container}>
    <SwiperFlatList
    paginationStyleItem={{width:10, height:10}}
    paginationActiveColor={colorValue.primary}
    paginationDefaultColor="gray"
     autoplay autoplayDelay={2} 
     autoplayLoop index={2} showPagination
     >
      <View style={[styles.child, { backgroundColor: 'tomato' }]}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.child, { backgroundColor: 'thistle' }]}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.child, { backgroundColor: 'teal' }]}>
        <Text style={styles.text}>4</Text>
      </View>
    </SwiperFlatList>
  </View>
  </View>
);

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  main:{height:height*0.2, width:width,  borderRadius:20},
  container: { flex: 1, backgroundColor: 'white'  },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.1, textAlign: 'center' },

});

export default Slider;