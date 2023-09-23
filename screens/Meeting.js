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
        appID={##########}
        appSign={
          'Your id'
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
