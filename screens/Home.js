/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [conId, setConId] = useState('');

  const handleNavigation = () => {
    if (userId.length && userName.length && conId.length > 0) {
      navigation.navigate('Meeting', {userId, userName, conId});
    } else {
      Alert.alert('Error', 'Please enter some valid data');
    }
  };
  return (
    <View className="flex-1 bg-white">
      <Animatable.View delay={300} animation={'slideInDown'}>
        <View className="items-center">
          <Image
            source={require('../assets/image/mainLogo.jpg')}
            style={{height: hp(12), width: hp(12)}}
            className="mt-1 mb-2"
          />
        </View>
      </Animatable.View>
      <Animatable.View delay={300} animation={'slideInRight'}>
        <Text
          style={{fontSize: wp(6.8)}}
          className="font-bold text-gray-900 text-center">
          Let's get joined
        </Text>
      </Animatable.View>

      {/* input section */}

      <View className="space-y-3 mt-5">
        <Text className="font-bold text-gray-900 text-lg px-8">User Id</Text>
        <TextInput
          placeholder="User Id"
          className="border mt-5 p-4 mx-5 rounded-2xl text-lg font-semibold text-black"
          value={userId}
          onChangeText={v => setUserId(v)}
        />
        <Text className="font-bold text-gray-900 text-lg px-8">User Name</Text>
        <TextInput
          placeholder="User Name"
          className="border mt-5 p-4 mx-5 rounded-2xl text-lg font-semibold text-black"
          value={userName}
          onChangeText={v => setUserName(v)}
        />
        <Text className="font-bold text-gray-900 text-lg px-8">
          Conference Id
        </Text>
        <TextInput
          placeholder="Conference Id"
          className="border mt-5 p-4 mx-5 rounded-2xl text-lg font-semibold text-black"
          value={conId}
          onChangeText={v => setConId(v)}
        />
      </View>
      <Animatable.View delay={300} animation={'slideInLeft'}>
        <View className="mt-10">
          <TouchableOpacity
            className="p-3 rounded-2xl mx-20 bg-blue-400"
            onPress={handleNavigation}>
            <Text className="text-xl text-center font-bold text-white">
              Join the meeting
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      <Text
        style={{fontSize: wp(3.5)}}
        className="text-center font-bold mt-10 mx-5 text-gray-900">
        Work together is ways that go beyond with easy video from anywhere
      </Text>
    </View>
  );
};

export default Home;
