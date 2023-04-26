import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full px-5">
      <View>
        <Text className="text-black font-bold text-[22px] mb-2">
          Setup your profile{' '}
        </Text>
        <Text className="text-[#595959] font-normal text-base mb-6">
          Create an account so you can manage your account hassle free
        </Text>
      </View>
      <View className="my-5">
        <View className="flex flex-row justify-between">
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#777B7E"
            className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#777B7E"
            className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
          />
        </View>

        <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
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
        <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
          <Text className="text-black font-medium text-base">@</Text>
          <Text className="text-gray-400 pl-1 text-xl">|</Text>
          <TextInput
            maxLength={10}
            placeholder="Select prefered username"
            placeholderTextColor="#777B7E"
            className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
          />
        </View>

        <View className="flex flex-row rounded-[100px] border border-[#E5E5E5] px-4 items-center h-12 mb-4">
          <TextInput
            placeholder="Password"
            placeholderTextColor="#777B7E"
            className="h-12  text-black flex flex-row items-center text-base w-[90%]"
          />
        </View>
        <View className="mt-6 ">
          {/* <CustomButton screen="UserInterestScreen" text={"Sign up"}/> */}
          <Pressable
            onPress={() => {
              navigation.navigate('SignUpScreens', {
                screen: 'UserIntrestScreen',
              });
            }}>
            <View className="bg-black rounded-3xl flex justify-center items-center w-[90vw] h-12 mx-auto">
              <Text className="text-white font-bold text-sm">Sign up</Text>
            </View>
          </Pressable>
          <View className="text-center my-6 flex items-center">
            <Text className="text-sm font-normal text-[#4D4D4D]">
              By tapping Sign up, you agree to our
            </Text>
            <Text className="text-sm font-normal text-[#4D4D4D]">
              <Text className="text-black font-medium">Terms, Data Policy</Text>{' '}
              and <Text className="text-black font-medium">Cookies Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
