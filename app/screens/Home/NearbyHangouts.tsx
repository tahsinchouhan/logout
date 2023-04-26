import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import EventCard from '../../components/Cards/EventCard';

const NearbyHangOuts: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6];

  const navigation = useNavigation();
  return (
    <View className="">
      <View className="flex-row items-center justify-between py-6">
        <Text className="text-22px font-bold text-black">Nearby hangouts</Text>
        <Pressable onPress={() => navigation.navigate('MyHangoutsScreen')}>
        <Text className="text-sm font-bold">See All</Text>
        </Pressable>
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

export default NearbyHangOuts;
