import React from 'react';
import { Image, Text, View } from 'react-native';
import { FriendChatSVG, StarSvg } from '../../assets/Icons';
const FriendSpaceCard = ({image, name, text, rating}) => {
  return (
    <View className="bg-white h-[72px] mx-4 mb-4 rounded-2xl px-4 flex flex-row items-center w-full border border-gray-200">
      <View className="w-[10%]">
        <Image className="w-10 h-10 rounded-full" source={image} />
      </View>
      <View className="w-[80%] px-4">
        <View className="flex flex-row items-center space-x-2">
          <Text className="text-base font-bold text-black mr-2">{name}</Text>
          <StarSvg />
          <Text className="text-black font-medium text-xs">{rating}</Text>
        </View>
        <Text className="text-xs font-normal text-primarygray">{text}</Text>
      </View>
      <View className="flex flex-row items-center w-[5%]">
        {/* <Text className="text-xs font-normal text-[#747688]"></Text> */}
        <FriendChatSVG />
      </View>
    </View>
  );
};

export default FriendSpaceCard;
