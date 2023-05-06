import React from 'react';
import { Text, View } from 'react-native';
import { RightArrowSVG } from '../../assets/Icons';
const EventDetailsAbout = () => {
  return (
    <View className="p-4 space-y-4">
      <View className="bg-white rounded-xl p-4">
        <Text className="text-primarygray font-bold pb-3">About the event</Text>
        <Text className="text-base text-black tracking-widest">
          When one thinks about India, one of the first iconic landmarks that
          come to mind is the Taj Mahal, one of the most famous and beautiful
          buildings in the world. This tour takes you right up to this iconic
          landmark of Indian history and culture.
        </Text>
      </View>

      <View className="bg-white rounded-xl p-4">
        <Text className="text-[#0ABE73] font-bold pb-3">What to expect</Text>
        <Text className="text-base text-black tracking-widest">
          <Text>
            {'\u2022'} When one thinks about India, one of the first iconic
            landmarks that come
            {'\n'}
            {'\u2022'} Head off to a private tour to one of the seven wonders of
            the world, the Taj Mahal, found in Agra
          </Text>
        </Text>
      </View>

      <View className="bg-white rounded-xl p-4">
        <Text className="text-primarygray font-bold pb-3">
          Participant eligibility
        </Text>
        <View className="flex flex-wrap flex-row">
          <View className="px-4 h-9 rounded-[100px] flex items-center justify-center border border-gray-300 mr-4 mb-4">
            <Text>All are welcome</Text>
          </View>
          <View className="px-4 h-9 rounded-[100px] flex items-center justify-center border border-gray-300 mr-4 mb-4">
            <Text>Couples only</Text>
          </View>
          <View className="px-4 h-9 rounded-[100px] flex items-center justify-center border border-gray-300 mr-4">
            <Text>People above 18+ allowed</Text>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-xl p-4">
        <Text className="text-primarygray font-bold pb-3">
          Special requirements
        </Text>
        <Text className="text-black text-base">
          {'\u2022'} Lorem iconic landmarks that come
          {'\n'} {'\u2022'} Head off to a private tour to one
        </Text>
      </View>

      <View className="bg-white rounded-xl p-4">
        <Text className="text-red-500 font-bold pb-3">Exclusions</Text>
        <Text className="text-black text-base">
          {'\u2022'} Lorem iconic landmarks that come
          {'\n'} {'\u2022'} Head off to a private tour to one
        </Text>
      </View>

      <View className="bg-white rounded-xl p-4 flex flex-row justify-between items-center">
        <Text className="text-primarygray font-bold">Terms & Conditions</Text>
        <Text>
          <RightArrowSVG />
        </Text>
      </View>
      
      <View className="bg-white rounded-xl p-4 flex flex-row justify-between items-center">
        <Text className="text-primarygray font-bold">Cancellation Policy</Text>
        <Text>
          <RightArrowSVG />
        </Text>
      </View>
    </View>
  );
};

export default EventDetailsAbout;
