import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { LeftArrowSVG } from '../../assets/Icons';
import { NavigationButton } from '../../components/Button';
import InclusionItem from '../../components/InclusionItem';
const ProfessionalHangoutThirdScreen = () => {
  const navigation = useNavigation();
  const inclusionData = [
    '🍔 Food',
    '🍻 Drinks',
    '🚬 Smoking',
    '🅿️ Parking',
    '🎸 Music',
    '🐶 Pets',
    '👔 Dress code',
    '⚙️ Equipments',
  ];

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
            <Text className="text-sm font-normal text-black ">3/4</Text>
          </View>
        </View>
        <View className="my-8">
          <Text className="text-[22px] font-bold text-black">
            Participant Information
          </Text>
          <View className=" mt-6 pt-4">
            <View className="border border-[#E5E5E5] px-4  w-full h-12 rounded-[100px] mb-4 flex flex-row  items-center">
              <TextInput
                placeholder="Add additional information or requriement"
                placeholderTextColor="#777B7E"
                className="text-black  text-base"
              />
            </View>
            <View className="border border-[#E5E5E5] px-4  w-full h-12 rounded-[100px] mb-4 flex flex-row  items-center">
              <TextInput
                placeholder="Specify participants need to bring anything"
                placeholderTextColor="#777B7E"
                className="text-black  text-base"
              />
            </View>
            <View>
              <Text className="text-sm font-bold text-primarygray my-3">
                Specify Inclusion
              </Text>
              {/* <View className="flex flex-wrap flex-row w-full ">
                <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-black ">🍔 Food</Text>
                </View>
                <View className="px-4 py-2 flex justify-center items-center border border-black bg-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-white ">🍻 Drinks</Text>
                </View>
                <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-black ">🚬 Smoking</Text>
                </View>
                <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-black ">🅿️ Parking</Text>
                </View>
                <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-black ">🎸 Music</Text>
                </View>
                <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-black ">🐶 Pets</Text>
                </View>
                <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-black ">👔 Dress code</Text>
                </View>
                <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
                  <Text className="text-sm text-black ">⚙️ Equipments</Text>
                </View>
              </View> */}
              <View className="flex flex-wrap flex-row w-full">
                {inclusionData.map((item, index) => (
                  <InclusionItem key={index} Data={item} borderAllow={true} />
                ))}
              </View>
            </View>
            <View className="border border-[#E5E5E5] rounded-3xl px-3  w-full text-black h-12 mb-4 flex justify-center">
              <Picker
                placeholderTextColor="#777B7E"
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2">
                <Picker.Item label="Drinks" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <View className="border border-[#E5E5E5] rounded-3xl px-3  w-full text-black h-12 mb-4 flex justify-center">
              <Picker
                placeholderTextColor="#777B7E"
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2">
                <Picker.Item label="Specify dress code" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
        </View>
      </View>
      <View className="-mx-4">
        <NavigationButton
          screen="ProfessionalHangoutFourthScreen"
          text="Next"
          root="CreateHangoutScreens"
        />
      </View>
    </View>
  );
};

export default ProfessionalHangoutThirdScreen;
