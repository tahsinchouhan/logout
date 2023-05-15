import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { LeftArrowSVG } from '../../assets/Icons';
const ProfessionalHangoutFourthScreen = () => {
  const [individualCount, setIndividualCount] = React.useState(10);
  const [coupleCount, setCoupleCount] = React.useState(10);
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full px-4 py-6 flex justify-between">
      <View>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row items-center space-x-4">
            <Pressable onPress={() => navigation.goBack()}>
              <LeftArrowSVG />
            </Pressable>
            <View className="px-4 py-2  rounded-[100px] border border-gray-500">
              <Text className="text-sm font-normal text-black">
                Professional Hangout 👩🏻‍🔧
              </Text>
            </View>
          </View>
          <View className="flex justify-center">
            <Text className="text-sm font-normal text-black ">4/4</Text>
          </View>
        </View>
        <View className="my-8">
          <Text className="text-[22px] font-bold text-black">
            Participant pricing
          </Text>
          <View className="my-4 border rounded-2xl border-gray-300 p-4">
            <Text className="text-[#777B7E] font-bold mb-4">
              Add ticket price
            </Text>
            <View className="flex flex-row justify-between mb-4">
              <View className="w-[32%]">
                <Text className="text-base text-black">Individual</Text>
              </View>
              <View className="flex flex-row space-x-2 w-[32%]">
                <Pressable
                  onPress={() => setIndividualCount(individualCount + 1)}
                  className="border border-black w-7 h-7 rounded-full flex items-center justify-center">
                  <Text className="text-base text-black">+</Text>
                </Pressable>
                <Text className="text-black text-base">{individualCount}</Text>
                <Pressable
                  onPress={() => setIndividualCount(individualCount - 1)}
                  className="border border-black w-7 h-7 rounded-full flex items-center justify-center">
                  <Text className="text-base text-black">-</Text>
                </Pressable>
              </View>
              <View className="w-[32%] flex items-end">
                <View className="px-5 bg-gray-300 rounded-2xl py-1 w-20">
                  <Text className="text-base text-black font-semibold">
                    $300
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row justify-between mb-4">
              <View className="w-[32%]">
                <Text className="text-base text-black">Couple</Text>
              </View>
              <View className="flex flex-row space-x-2 w-[32%]">
                <Pressable className="border border-black w-7 h-7 rounded-full flex items-center justify-center">
                  <Text className="text-base text-black">+</Text>
                </Pressable>
                <Text className="text-black text-base">10</Text>
                <Pressable className="border border-black w-7 h-7 rounded-full flex items-center justify-center">
                  <Text className="text-base text-black">-</Text>
                </Pressable>
              </View>
              <View className="w-[32%] flex items-end">
                <View className="px-5 bg-gray-300 rounded-2xl py-1 w-20">
                  <Text className="text-base text-black font-semibold">
                    $300
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfessionalHangoutFourthScreen;
