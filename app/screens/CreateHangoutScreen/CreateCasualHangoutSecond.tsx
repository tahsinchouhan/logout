import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { LeftArrowSVG, ParticipantsSVG } from '../../assets/Icons';

const CreateCasualHangoutSecond = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full px-4 pt-6 ">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center space-x-4">
          <Pressable onPress={() => navigation.goBack()}>
            <LeftArrowSVG />
          </Pressable>
          <View className="px-4 py-2  rounded-[100px] border border-gray-500">
            <Text className="text-sm font-normal text-black">
              Casual Hangout 😀
            </Text>
          </View>
        </View>
        <View className="flex justify-center">
          <Text className="text-sm font-normal text-black ">2/2</Text>
        </View>
      </View>
      <View className="my-8">
        <Text className="text-[22px] font-bold text-black">
          Set participartion eligibility
        </Text>
        <View className=" mt-6 pt-4">
          <View className="flex flex-row justify-between">
            <TextInput
              placeholder="Age"
              placeholderTextColor="#777B7E"
              className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
            />
            <TextInput
              placeholder="Gender"
              placeholderTextColor="#777B7E"
              className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
            />
          </View>
          <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              dataDetectorTypes="phoneNumber"
              placeholder="Select attendence score"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
            />
          </View>
          <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4 flex flex-row items-center">
            <View>
                <ParticipantsSVG />
            </View>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              dataDetectorTypes="phoneNumber"
              placeholder="Specify no of participants"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-sm font-normal placeholder:text-base pl-2"
            />
          </View>
          <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              dataDetectorTypes="phoneNumber"
              placeholder="Add additional note"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
            />
          </View>

          <View className="-mx-4">
            {/* <NavigationButton screen="CreateCasualHangoutSecond" text="Add Address" root="CreateHangoutScreens" /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateCasualHangoutSecond;
