import React from 'react';
import { TextInput, View } from 'react-native';

const EducationMapFields = () => {
  return (
    <View>
      <View className="py-4">
        <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
          <TextInput
            placeholder="Where did you do schooling from ?"
            placeholderTextColor="#777B7E"
            className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
          />
        </View>
        <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
          <TextInput
            dataDetectorTypes="Which college did you went ? "
            placeholder="Enter your mobile number"
            placeholderTextColor="#777B7E"
            className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
          />
        </View>
        <View className="mb-4">
          <View className="flex flex-row rounded-[100px] border border-gray-300 px-4 items-center h-12 mb-2">
            <TextInput
              placeholder="Competitive Exams"
              placeholderTextColor="#777B7E"
              className="h-12  text-black flex flex-row items-center text-base w-[90%]"
            />
          </View>
        </View>
        <View className="flex flex-row justify-between">
          <TextInput
            placeholder="Degree"
            placeholderTextColor="#777B7E"
            className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
          />
          <TextInput
            placeholder="Persuing Year"
            placeholderTextColor="#777B7E"
            className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
          />
        </View>
      </View>
    </View>
  );
};

export default EducationMapFields;
