import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
const UserIntrestScreen = () => {
  const data = [1, 2, 3];
const navigation = useNavigation();
  return (
    <View className="bg-white h-full px-5">
      <View>
        <Text className="text-black font-bold text-[22px] mb-2">
          Tell us about your interests
        </Text>
        <Text className="text-[#595959] font-normal text-base mb-6">
          Create an account so you can manage your account hassle free
        </Text>
      </View>
      <View>
        <Text className="text-black font-bold text-base mb-2">
          Select Category{' '}
        </Text>
        <View className="flex flex-wrap flex-row w-full ">
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name</Text>
          </View>
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name</Text>
          </View>
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name lorem</Text>
          </View>
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name</Text>
          </View>
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name</Text>
          </View>
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name</Text>
          </View>
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name lorem</Text>
          </View>
          <View className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
            <Text className="text-sm text-black ">Category name</Text>
          </View>
        </View>
      </View>
      <View className="my-5">
        <View className="mt-6 ">
          {/* <CustomButton screen="UserInterestScreen" text={"Sign up"}/> */}
          <Pressable onPress={
            navigation.navigate('HomeTabs',{screen:'Home'})
          }>
            <View className="bg-black rounded-3xl flex justify-center items-center w-[90vw] h-12 mx-auto">
              <Text className="text-white font-bold text-sm">Continue</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserIntrestScreen;
