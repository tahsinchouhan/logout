import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { LeftArrowSVG, ParticipantsSVG } from '../../assets/Icons';
import { NavigationButton } from '../../components/Button';

const CreateCasualHangoutSecond = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
            <View>
              <View className="flex flex-row space-x-2 pr-8">
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text className="text-xs font-medium text-[#6B6B6B]">
                  By clicking the tick box, I agree that i have read and
                  understood to maintain compliance with local laws, rules and
                  regulation and I may be required to provide evidence of such
                  compliance. Furthermore I agree to all the Terms and
                  conditions presented by Logout.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="space-y-4">
        <View className="w-full h-14 rounded-[100px] bg-[#F5F5F5] px-4 flex flex-row items-center justify-between">
          <Text className="text-sm font-bold">Hangout creation charge</Text>
          <Text className="text-sm font-bold text-black">₹ 200</Text>
        </View>

        <View className="-mx-4">
          <NavigationButton
            screen="Home"
            text="Add Address"
            root="HomeTabs"
          />
        </View>
        <View>
          <Text className="text-xs text-black text-center mt-2 w-[70%] mx-auto">
            By tapping I agree to our Terms, Privacy Policy and Local bodie
            lorem Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CreateCasualHangoutSecond;
