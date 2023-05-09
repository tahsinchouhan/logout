import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import CareerMapFields from './CareerMapFields';

const CareerTab = () => {
  const [careerMap, setCareerMap] = React.useState([1]);

  return (
    <ScrollView>
      <View className="p-4">
        <View className="py-4">
          {careerMap.map(item => (
            <View key={item} className="mb-4">
              <View className="flex justify-between flex-row mb-4">
                <Text className="font-bold text-primarygray">Career</Text>
                <Pressable
                  onPress={() => {
                    const newCareerMap = [...careerMap];
                    newCareerMap.splice(item - 1, 1);
                    setCareerMap(newCareerMap);
                  }}>
                  <Text className=" text-red-500">remove</Text>
                </Pressable>
              </View>

              <CareerMapFields />
            </View>
          ))}
          <Pressable
            className="-mx-4"
            onPress={() => setCareerMap([...careerMap, careerMap.length + 1])}>
            <View className="bg-[#EAF2FD] rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
              <Text className="text-[#2F80ED] font-bold text-sm">
                + Add new Career
              </Text>
            </View>
          </Pressable>
          <View className="-mx-4 mt-4">
            <View className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
              <Text className="text-white font-bold text-sm">
                Save all Changes
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CareerTab;
