import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import ContactsMapFields from './ContactsMapFields';

const CantactsTab = () => {
  const [careerMap, setCareerMap] = React.useState([1]);
  return (
    <ScrollView>
      <View className="p-4">
        <View className=" border-b border-gray-300 mb-4">
          <Text className="font-bold text-primarygray mb-4">
            Link Your Partner
          </Text>
          <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
            />
          </View>
        </View>

        {careerMap.map(item => (
          <View key={item} className="mb-2">
            <View className="flex justify-between flex-row mb-4">
              <Text className="font-bold text-primarygray">
                Emergency Contact
              </Text>
              <Pressable
                onPress={() => {
                  const newCareerMap = [...careerMap];
                  newCareerMap.splice(item - 1, 1);
                  setCareerMap(newCareerMap);
                }}>
                <Text className=" text-red-500">remove</Text>
              </Pressable>
            </View>
            <ContactsMapFields />
          </View>
        ))}
        <Pressable
          className="-mx-4"
          onPress={() => setCareerMap([...careerMap, careerMap.length + 1])}>
          <View className="bg-[#EAF2FD] rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
            <Text className="text-[#2F80ED] font-bold text-sm">
              + Add Another Emergency Contact
            </Text>
          </View>
        </Pressable>

        <View className="-mx-4 mt-4 ">
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

export default CantactsTab;
