import React from 'react';
import { Text, View } from 'react-native';
const ProfileAboutCard = ({category, name, time}) => {
  return (
    <View className="bg-white rounded-xl p-4 mb-4">
      <Text className="text-black font-medium text-base pb-1">{category}</Text>
      <Text className="text-primarygray">{name}</Text>
      <Text className="text-primarygray">{time}</Text>
    </View>
  );
};

export default ProfileAboutCard;
