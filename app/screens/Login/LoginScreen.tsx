import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { NavigationButton } from '../../components/Button';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="p-4 bg-white h-full">
      <View>
        <Text className="text-black font-bold text-[22px] mb-6">Log In</Text>
        <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
          <Text className="text-black font-medium text-[17px]">+91</Text>
          <Text className="text-gray-400 pl-1 text-xl">|</Text>
          <TextInput
            keyboardType="number-pad"
            dataDetectorTypes="phoneNumber"
            placeholder="Enter your mobile number"
            placeholderTextColor="#777B7E"
            className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
          />
        </View>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#777B7E"
          className="border border-gray-300 rounded-3xl px-4 py-2 w-full text-black h-12 mb-4"
        />
        <View className="flex flex-row justify-end items-center">
          <Text className="text-gray font-normal text-[14px] underline mr-2">
            Forgot Password ?
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center">
          <Pressable
            onPress={() => navigation.navigate('SendOtpScreen')}>
            <Text className="text-black font-medium text-[16px] my-4">
              Login Via OTP
            </Text>
          </Pressable>
        </View>

        <View className="mt-6">
          <NavigationButton  screen="Home" text="Login"  root="HomeTabs"/>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
