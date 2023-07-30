/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-around items-center bg-white">
      <Animatable.View delay={300} animation={'slideInDown'}>
        <View>
          <Text
            style={{fontSize: wp(5.5)}}
            className="font-bold text-gray-900 shadow text-center">
            Remote connection with your team
          </Text>
          <Text
            style={{fontSize: wp(3.5)}}
            className="text-center font-bold text-gray-900 mt-3 mx-5">
            Work together is ways that go beyond with easy video from anywhere
          </Text>
        </View>
      </Animatable.View>
      <Animatable.View delay={350} animation={'slideInUp'}>
        <View>
          <Image
            source={require('../assets/image/logo.jpg')}
            style={{height: hp(48), width: hp(48)}}
          />
        </View>
      </Animatable.View>
      <Animatable.View delay={300} animation={'slideInLeft'}>
        <View>
          <TouchableOpacity
            className="p-4 rounded-2xl bg-violet-300"
            onPress={() => navigation.navigate('Home')}>
            <Text
              style={{fontSize: wp(5.5)}}
              className="font-bold text-gray-900">
              Let's get started
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Welcome;
