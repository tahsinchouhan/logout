import React from 'react';
import { View } from 'react-native';
import {
  ChatSVG,
  HomeSVG,
  LikedSVG
} from '../assets/Icons';
const NavigationIcon = ({route, isFocused}) => {
  return (
    <View>
      {/* show icons for all routee */}
      {route == 'Home' && <HomeSVG fill={isFocused ? '#fff' : '#A6A6A6'} />}
      {/* {route == 'dashboard' && (
        <ProfileSVG fill={isFocused ? '#fff' : '#A6A6A6'} />
      )} */}
      {route == 'MyHangoutsScreen' && (
        <LikedSVG fill={isFocused ? '#fff' : '#A6A6A6'} />
      )}
      {route == 'Chats' && <ChatSVG fill={isFocused ? '#fff' : '#A6A6A6'} />}
      {/* {route == 'CreateHangoutScreen' && (
        <CreateHangoutSVG fill={isFocused ? '#fff' : '#A6A6A6'} />
      )} */}
    </View>
  );
};

export default NavigationIcon;
