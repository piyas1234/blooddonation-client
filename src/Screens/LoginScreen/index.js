import React from 'react';
import {StatusBar, StyleSheet, Text, Touchable, View} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import {commonJustify, commonStyle} from '../../Shared/commoStyle/CommonStyle';
import {Button, Input} from 'react-native-elements';
import colorValue from '../../Shared/commoStyle/ColorValue';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fontValue from '../../Shared/commoStyle/FontValue';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor="white" />
      <View style={styles.main}>
        <View style={[commonJustify.rowCenter, {height: '40%'}]}>
          <Image
            style={[styles.image]}
            source={require('../../../assets/image/login-logo.png')}
          />
        </View>

        <View>
          <Input
            placeholder="Enter your email"
            leftIcon={{type: 'ant-design', name: 'mail'}}
          />

          <Input
            placeholder="Enter your password"
            leftIcon={{type: 'ant-design', name: 'lock'}}
          />

          <Button
          onPress={()=>navigation.navigate("BottomNavigation")}
            buttonStyle={{backgroundColor: colorValue.primary}}
            title="LOG IN"
          />
           <View style={commonJustify.rowCenter}>
           <TouchableOpacity>
            <Text
              style={
                commonStyle({
                  fontSize: 14,
                  fontFamily: fontValue.PoppinsMedium,
                  color: colorValue.primary,
                }).text
              }>
              Forget password
            </Text>
          </TouchableOpacity>
           </View>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 40, width:'100%'}}>
        <View style={commonJustify.rowCenter}>
          <TouchableOpacity>
            <Text>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate("SignUpScreen")}
          >
            <Text
              style={
                commonStyle({
                  fontSize: 14,
                  fontFamily: fontValue.PoppinsMedium,
                  color: colorValue.primary,
                }).text
              }>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
