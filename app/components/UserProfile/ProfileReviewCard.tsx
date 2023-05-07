import React from 'react';
import { Text, View } from 'react-native';
import { StarSvg } from '../../assets/Icons';
const ProfileReviewCard = ({category, name, participant, rating}) => {
  return (
    <View className="bg-white rounded-xl p-4 mb-4">
      <View className="flex flex-row justify-between mb-2">
        <Text className="text-xs text-black">{participant}</Text>
        <View className="flex flex-row items-center space-x-1">
          <View>
            <StarSvg />
          </View>
          <Text className="text-black">{rating}</Text>
        </View>
      </View>
      <Text className="text-black font-medium text-base pb-1">{category}</Text>
      <Text className="text-primarygray">{name}</Text>
    </View>
  );
};

export default ProfileReviewCard;
