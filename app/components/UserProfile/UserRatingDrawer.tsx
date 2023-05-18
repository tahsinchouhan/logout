import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const UserRatingDrawer = ({setIsBottomSheetOpen}) => {
  const navigation = useNavigation();

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };
  return (
    <View className="h-full bg-gray-900/30 backdrop-brightness-75">
      <View className="bg-white rounded-t-3xl border border-[#E5E5E5] p-5 h-fit absolute bottom-0 w-full">
        <View className="flex flex-row justify-between">
          <Text className="font-bold text-lg text-black">
            Category Wise Host Rating
          </Text>
          <TouchableOpacity onPress={handleCloseBottomSheet} className="">
            <Text className="text-end">Close</Text>
          </TouchableOpacity>
        </View>
        <View className=" pt-4 pb-10">
          <View className="flex flex-row justify-between py-5 border-b border-gray-300">
            <Text className="text-[#747688] text-base font-medium">Social</Text>
            <View className="flex flex-row  items-center space-x-2">
              <Image
                source={require('../../assets/images/star.png')}
                className="w-4 h-4"
              />
              <Text className="text-black text-sm font-semibold">4.0</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between py-5 border-b border-gray-300">
            <Text className="text-[#747688] text-base font-medium">
              Party Category
            </Text>
            <View className="flex flex-row  items-center space-x-2">
              <Image
                source={require('../../assets/images/star.png')}
                className="w-4 h-4"
              />
              <Text className="text-black text-sm font-semibold">3.0</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between py-5 border-b border-gray-300">
            <Text className="text-[#747688] text-base font-medium">
              Architecture
            </Text>
            <View className="flex flex-row  items-center space-x-2">
              <Image
                source={require('../../assets/images/star.png')}
                className="w-4 h-4"
              />
              <Text className="text-black text-sm font-semibold">7.3</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between py-5 border-b border-gray-300">
            <Text className="text-[#747688] text-base font-medium">
              Support Group{' '}
            </Text>
            <View className="flex flex-row  items-center space-x-2">
              <Image
                source={require('../../assets/images/star.png')}
                className="w-4 h-4"
              />
              <Text className="text-black text-sm font-semibold">8.7</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between py-5  border-gray-300">
            <Text className="text-[#747688] text-base font-medium">
              Religious Group
            </Text>
            <View className="flex flex-row  items-center space-x-2">
              <Image
                source={require('../../assets/images/star.png')}
                className="w-4 h-4"
              />
              <Text className="text-black text-sm font-semibold">3.4</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserRatingDrawer;
