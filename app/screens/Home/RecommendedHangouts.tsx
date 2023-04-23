import React from 'react';
import { FlatList, Text, View } from 'react-native';
import EventCard from '../../components/Cards/EventCard';

const RecommendedHangOuts: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <View className="">
      <View className="flex-row items-center justify-between py-6">
        <Text className="text-22px font-bold text-black">Recommended</Text>
        <Text className="text-sm font-bold">See All</Text>
      </View>
      <FlatList
        data={data}
        renderItem={() => <EventCard />}
        keyExtractor={item => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecommendedHangOuts;
