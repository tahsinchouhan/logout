import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import HangoutCard from '../../components/Cards/HangoutCard';

const UserHangoutTickets = () => {
  const data = [1, 2];
  const navigation = useNavigation();
  return (
    <View className=" h-full px-4 py-6 bg-[#F5F5F5] ">
        <Text className="text-sm font-normal mb-2">
        2 tickets available
        </Text>
      <FlatList
        data={data}
        renderItem={() => <HangoutCard />}
        keyExtractor={item => item.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default UserHangoutTickets;
