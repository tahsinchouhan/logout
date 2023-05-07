import React from 'react';
import { Text, View } from 'react-native';
import InclusionItem from '../InclusionItem';
import ProfileAboutCard from './ProfileAboutCard';
const UserDetailsAbout = () => {
  const inclusionData = [
    '🍔 Food',
    '🐶 Pets',
    '🧷 Craft',
    '🎭 Arts',
    '✏️ Design',
    '🕺🏻 Nightclubs',
  ];
  return (
    <View className="p-4 space-y-2">
      <View>
        <Text className="font-bold text-primarygray">My Interests</Text>
        <View className="flex flex-wrap flex-row w-full my-4 border-b border-gray-400">
          {inclusionData.map((item, index) => (
            <InclusionItem key={index} Data={item} borderAllow={false} />
          ))}
        </View>
      </View>

      <View className="space-y-4">
        <Text className="font-bold text-primarygray mb-4">Education</Text>
        <ProfileAboutCard
          category=" Stanford University"
          name="Phd, Machine Learning"
          time="2021-2023"
        />
        <ProfileAboutCard
          category="APJ Abdul Kalam Technical University"
          name="Computer Science Engineering"
          time="2016-2020"
        />
      </View>

      <View className="space-y-4">
        <Text className="font-bold text-primarygray mb-4">Career </Text>
        <ProfileAboutCard
          category="Software Engineer"
          name="Microsoft Rapid Labs"
          time="2022 - Present"
        />
      </View>
    </View>
  );
};

export default UserDetailsAbout;
