/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import ZegoUIKIT from '@zegocloud/zego-uikit-prebuilt-video-conference-rn';
import {useNavigation} from '@react-navigation/native';

const Meeting = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {userId, userName, conId} = route.params;

  return (
    <View className="flex-1">
      <ZegoUIKIT
        appID={713535055}
        appSign={
          'f2f864589ca273828963d3f7df1f64d30a5fedc97168813a42e6f7cf5d3edcc2'
        }
        userID={userId}
        userName={userName}
        conferenceID={conId}
        config={{
          onLeave: () => {
            navigation.navigate('Home');
          },
        }}
      />
    </View>
  );
};

export default Meeting;
