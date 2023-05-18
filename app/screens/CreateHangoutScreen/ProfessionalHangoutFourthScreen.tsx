import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {LeftArrowSVG} from '../../assets/Icons';
import {NavigationButton} from '../../components/Button';
const ProfessionalHangoutFourthScreen = () => {
  const [individualCount, setIndividualCount] = React.useState(10);
  const [coupleCount, setCoupleCount] = React.useState(10);
  const [individualPrice, setIndividualPrice] = React.useState(100);
  const [couplePrice, setCouplePrice] = React.useState(100);
  const navigation = useNavigation();
  return (
    <ScrollView className="bg-white h-full">
      <View className="px-4 py-6 flex justify-between">
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
                  <Text className="text-black text-base">
                    {individualCount}
                  </Text>
                  <Pressable
                    onPress={() => setIndividualCount(individualCount - 1)}
                    className="border border-black w-7 h-7 rounded-full flex items-center justify-center">
                    <Text className="text-base text-black">-</Text>
                  </Pressable>
                </View>
                <View className="w-[32%] flex items-end">
                  <View className="px-5 bg-gray-300 rounded-2xl h-10 w-20">
                    {/* <Text className="text-base text-black font-semibold">
                    $300
                  </Text> */}
                    <TextInput
                      placeholder="$300"
                      onChangeText={text => setIndividualPrice(Number(text))}
                    />
                  </View>
                </View>
              </View>
              <View className="flex flex-row justify-between mb-4">
                <View className="w-[32%]">
                  <Text className="text-base text-black">Couple</Text>
                </View>
                <View className="flex flex-row space-x-2 w-[32%]">
                  <Pressable
                    onPress={() => setCoupleCount(coupleCount + 1)}
                    className="border border-black w-7 h-7 rounded-full flex items-center justify-center">
                    <Text className="text-base text-black">+</Text>
                  </Pressable>
                  <Text className="text-black text-base">{coupleCount}</Text>
                  <Pressable
                    onPress={() => setCoupleCount(coupleCount - 1)}
                    className="border border-black w-7 h-7 rounded-full flex items-center justify-center">
                    <Text className="text-base text-black">-</Text>
                  </Pressable>
                </View>
                <View className="w-[32%] flex items-end">
                  <View className="px-5 bg-gray-300 rounded-2xl h-10  w-20">
                    <TextInput
                      placeholder="$300"
                      onChangeText={text => setCouplePrice(Number(text))}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View className="my-4 border rounded-2xl border-gray-300 p-4 bg-[#F6F6EE]">
              <Text className="text-[#777B7E] font-bold mb-4">
                Estimated revenue
              </Text>
              <View className="flex flex-row justify-between mb-4">
                <View className="w-[32%]">
                  <Text className="text-base text-black">Individual</Text>
                </View>
                <View className="flex flex-row space-x-2 w-[32%] justify-center">
                  <Text className="text-black text-base">
                    {individualCount}
                  </Text>
                </View>
                <View className="w-[32%] flex items-end">
                  <View className="px-5 bg-white rounded-2xl py-1">
                    <Text className="text-base text-black font-semibold">
                      ₹{individualPrice * individualCount}
                    </Text>
                    {/* <TextInput
                    placeholder="$300"
                    onChangeText={text => setIndividualPrice(Number(text))}
                  /> */}
                  </View>
                </View>
              </View>
              <View className="flex flex-row justify-between mb-4">
                <View className="w-[32%]">
                  <Text className="text-base text-black">Couple</Text>
                </View>
                <View className="flex flex-row space-x-2 w-[32%] justify-center">
                  <Text className="text-black text-base">{coupleCount}</Text>
                </View>
                <View className="w-[32%] flex items-end">
                  <View className="px-5 bg-white rounded-2xl py-1">
                    <Text className="text-base text-black font-semibold">
                      ₹{couplePrice * coupleCount}
                    </Text>
                    {/* <TextInput
                    placeholder="$300"
                    onChangeText={text => setCouplePrice(Number(text))}
                  /> */}
                  </View>
                </View>
              </View>
              <View className="border-t pt-2 mt-2 border-gray-300 flex flex-row justify-between">
                <View>
                  <Text className="text-base font-bold text-black">
                    Estimated revenue
                  </Text>
                  <Text className="text-xs text-[#777B7E]">
                    Excluding commission and charges
                  </Text>
                </View>
                <View>
                  <View className="px-5 bg-white rounded-2xl py-1">
                    <Text className="text-base text-black font-semibold">
                      ₹
                      {couplePrice * coupleCount +
                        individualPrice * individualCount}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-8 -mx-4">
          <View className=" m-4 mb-6 p-4 border-gray-300 flex flex-row justify-between items-center rounded-3xl bg-[#F5F5F5]">
            <View>
              <Text className="text-base font-bold text-black">
                Grand total
              </Text>
              <Text className="text-xs text-[#777B7E]">
                Esti. commission charge of INR 1200
              </Text>
            </View>
            <View>
              <View className="px-5 rounded-2xl py-1">
                <Text className="text-base text-black font-semibold">
                  ₹
                  {couplePrice * coupleCount +
                    individualPrice * individualCount}
                </Text>
              </View>
            </View>
          </View>
          <NavigationButton
            text="Next"
            screen="ProfessionalHangoutFifthScreen"
            root="CreateHangoutScreens"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfessionalHangoutFourthScreen;
