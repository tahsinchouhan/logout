import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
const InvitationCard = () => {
  return (
    <View className="px-4 py-5 bg-[#E2F1FF] h-36 my-8 rounded-xl">
      <Text className="text-lg font-bold text-black mb-1">
        Invite your friends
      </Text>
      <Text className="text-sm text-[#484D70]">Earn upto $100</Text>
      <Pressable onPress={() => {}}>
        <View className="bg-black rounded-3xl py-1 w-[70px] mt-5 ">
          <Text className="text-white font-bold text-base text-center">
            Invite
          </Text>
        </View>
      </Pressable>
      <ImageBackground
        source={require('../../assets/InviteGift.png')}
        className="w-[200px] h-[112px] absolute right-0 bottom-0 -z-10"
      />
    </View>
  );
};

export default InvitationCard;
