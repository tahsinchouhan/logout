import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { AttachIconSVG } from '../../assets/Icons';

const AboutTab = () => {
  return (
    <ScrollView>
      <View className="p-4">
        <Text className="font-bold text-primarygray">Personal Information</Text>
        <View className="py-4">
          <View className="flex flex-row justify-between">
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#777B7E"
              className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
            />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#777B7E"
              className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
            />
          </View>

          <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
            <Text className="text-black font-medium text-base">@</Text>
            <Text className="text-gray-400 pl-1 text-xl">|</Text>
            <TextInput
              maxLength={10}
              placeholder="Select prefered username"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
            />
          </View>
          <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
            <Text className="text-black font-medium text-base">+91</Text>
            <Text className="text-gray-400 pl-1 text-xl">|</Text>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              dataDetectorTypes="phoneNumber"
              placeholder="Enter your mobile number"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
            />
          </View>
          <View className="mb-4">
            <View className="flex flex-row rounded-[100px] border border-gray-300 px-4 items-center h-12 mb-2">
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#777B7E"
                className="h-12  text-black flex flex-row items-center text-base w-[90%]"
              />
            </View>
            <View className="flex flex-row justify-between items-center px-2">
              <Text className="text-[#F2994A]">Verify your email address</Text>
              <Text className="text-black font-semibold">Resent</Text>
            </View>
          </View>
          <View className="flex flex-row justify-between">
            <View className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%] mb-4">
              <Picker placeholder="Age" className="  text-black ">
                {[...Array(90)].map((_, i) => (
                  <Picker.Item
                    key={i}
                    label={`${i + 10}`}
                    value={`${i + 10}`}
                  />
                ))}
              </Picker>
            </View>

            <View className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%] mb-4">
              <Picker placeholder="Gender" className="  text-black ">
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
          </View>
        </View>
        <Text className="font-bold text-primarygray">Personal Information</Text>
        <View className="py-4">
          <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
            <Text className="text-black font-medium text-base">
              <AttachIconSVG />
            </Text>
            <TextInput
              maxLength={10}
              placeholder="Aadhar Card"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
            />
          </View>
          <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
            <Text className="text-black font-medium text-base">
              <AttachIconSVG />
            </Text>
            <TextInput
              maxLength={10}
              placeholder="Upload Selfie"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
            />
          </View>
        </View>
        <View className="-mx-4">
          <View className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
            <Text className="text-white font-bold text-sm">
              Save all Changes
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutTab;
