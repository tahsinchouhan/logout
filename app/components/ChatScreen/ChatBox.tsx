import React from 'react';
import { Image, Text, View } from 'react-native';
const ChatBox = ({image, name, text, time}) => {
  return (
    <View className="bg-white h-[72px] mx-4 mb-4 rounded-2xl px-4 flex flex-row items-center w-full border border-gray-200">
      <View className="w-[10%]">
        <Image className="w-10 h-10 rounded-full" source={image} />
      </View>
      <View className="w-[70%] px-4">
        <Text className="text-base font-bold text-black">{name}</Text>
        <Text className="text-xs font-normal text-primarygray">{text}</Text>
      </View>
      <View className="flex flex-row items-center w-[15%]">
        <Text className="text-xs font-normal text-[#747688]">{time}</Text>
      </View>
    </View>
  );
};

export default ChatBox;
// '../../assets/images/user1.png'
