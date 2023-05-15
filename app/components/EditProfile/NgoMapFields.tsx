import React from 'react';
import { TextInput, View } from 'react-native';

const NgoMapFields = () => {
  return (
    <View>
      <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
        <TextInput
          placeholder="NGO Name"
          placeholderTextColor="#777B7E"
          className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
        />
      </View>
      <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
        <TextInput
          placeholder="Designation"
          placeholderTextColor="#777B7E"
          className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
        />
      </View>
    </View>
  );
};

export default NgoMapFields;
