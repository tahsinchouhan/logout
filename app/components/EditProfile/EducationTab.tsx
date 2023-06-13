import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import EducationMapFields from './EducationMapFields';

const EducationTab = ({userData}) => {
  // const [careerMap, setCareerMap] = React.useState([1]);
  return (
    <ScrollView>
      <View className="p-4">
        {/* {careerMap.map(item => ( */}
        <View className="mb-4">
          <View className="flex justify-between flex-row mb-4">
            <Text className="font-bold text-primarygray">Education</Text>
          </View>
          <EducationMapFields userData={userData} />
        </View>
        {/* ))} */}
        {/* <Pressable
          className="-mx-4"
          onPress={() => setCareerMap([...careerMap, careerMap.length + 1])}>
          <View className="bg-[#EAF2FD] rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
            <Text className="text-[#2F80ED] font-bold text-sm">
              + Add new Education
            </Text>
          </View>
        </Pressable> */}
      </View>
    </ScrollView>
  );
};

export default EducationTab;
