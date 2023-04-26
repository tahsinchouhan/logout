import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { NavigationButton } from '../../components/Button';

const SendOtpScreen = () => {
  return (
    <View className="p-4 bg-white h-full">
      <View>
        <Text className="text-black font-bold text-[22px] mb-2">
          Enter your phone number{' '}
        </Text>
        <Text className="text-[#595959] font-normal text-base mb-6">
          We will send an OTP verification to you{' '}
        </Text>

        <View className="w-[90vw] mx-auto border border-black rounded-3xl px-4  text-black h-12 mb-4 flex flex-row items-center bg-gray-100">
          <Text className="text-black font-medium text-[17px]">+91</Text>
          <Text className="text-gray-400 pl-1 text-xl">|</Text>
          <TextInput
            keyboardType="number-pad"
            dataDetectorTypes="phoneNumber"
            placeholder="Enter your mobile number"
            placeholderTextColor="#777B7E"
            className="w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
          />
        </View>

        <View className="mt-48">
          <NavigationButton screen="EnterOtpScreen" text="Send me the code" root="LoginScreens" />
        </View>
      </View>
    </View>
  );
};

export default SendOtpScreen;
