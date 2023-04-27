import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { LeftArrowSVG } from '../../assets/Icons';

const CreateCasualHangout = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())

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
          <Text className="text-sm font-normal text-black ">1/2</Text>
        </View>
      </View>
      <View>
        <View className="my-5">
          <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full text-black h-12 mb-4 flex justify-center">
            <Picker
              placeholder="Add Category"
              placeholderTextColor="#777B7E"
              mode="dropdown"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base">
              <Picker.Item  label="Add Category" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full text-black h-12 mb-4 flex justify-center">
          <Picker
              placeholder="Add Sub Category"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2">
              <Picker.Item label="Add Sub Category" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>

          <View className="flex flex-row rounded-[100px] border border-[#E5E5E5] px-4 items-center h-12 mb-4">
            {/* <TextInput
              placeholder="Password"
              placeholderTextColor="#777B7E"
              className="h-12  text-black flex flex-row items-center text-base w-[90%]"
            /> */}
            <DatePicker mode='date' date={date} onDateChange={setDate} />
          </View>
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
                <Text className="text-black font-medium">
                  Terms, Data Policy
                </Text>{' '}
                and{' '}
                <Text className="text-black font-medium">Cookies Policy</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateCasualHangout;
