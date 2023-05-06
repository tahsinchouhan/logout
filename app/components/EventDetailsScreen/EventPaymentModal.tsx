import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
const EventPaymentModal = ({setStep, setModalVisible}) => {
  const navigation = useNavigation();
  return (
    <View className="h-full bg-gray-900/30 backdrop-brightness-75">
      <View className="bg-white max-h-[60vh] absolute bottom-0 w-full rounded-t-xl p-4 py-6 ">
        <View className="flex flex-row justify-between ">
          <Text className="text-22px font-bold text-black">Select ticket</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            className="">
            <Text className="text-end">Close</Text>
          </TouchableOpacity>
        </View>
        <View className="my-4 border border-gray-300 rounded-2xl p-4">
          <View className="flex flex-row items-center justify-between pb-4 border-b border-gray-300">
            <Text className=" text-black">Individual</Text>
            <View className="border border-[#1E78FF] h-8 w-[70px] rounded-full flex items-center justify-center flex-row">
              <Text className="text-[#1E78FF] text-xs font-bold"> + Add</Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between mt-4">
            <Text className=" text-black">Couple</Text>
            <View className="border border-[#1E78FF] h-8 w-[70px] rounded-full flex items-center justify-center flex-row">
              <Text className="text-[#1E78FF] text-xs font-bold"> + Add</Text>
            </View>
          </View>
        </View>

        <Pressable
          onPress={() => {
            setStep(3);
          }}
          className="my-4 mt-12 bg-[#F5F5F5] rounded-[100px] p-4 px-6 flex items-center flex-row justify-between">
          <Text className="font-bold text-black">Grand total</Text>
          <Text className="font-bold text-black">₹ 2,100</Text>
        </Pressable>

        <View className="-mx-4">
          <Pressable
            onPress={() => {
              setStep(3);
              setModalVisible(false);
            }}>
            <View className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
              <Text className="text-white font-bold text-sm">Pay now</Text>
            </View>
          </Pressable>
          <Text className="text-center w-[65%] mx-auto mt-4 text-black">
            By tapping I agree to our Terms, Privacy Policy and Local bodie
            lorem Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventPaymentModal;
