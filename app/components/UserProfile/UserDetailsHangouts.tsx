import React from 'react';
import {Text, View} from 'react-native';
import HangoutCard from '../Cards/HangoutCard';

const UserDetailsHangouts = () => {
  const data = [1, 2, 3, 4];

  return (
    <View className="p-4">
      <View className="flex flex-row justify-between">
        <View className="flex items-center w-[48%] justify-center border border-black rounded-[100px] h-9">
          <Text className=" text-black">Participated</Text>
        </View>
        <View className="flex bg-white items-center w-[48%] justify-center border border-black rounded-[100px] h-9">
          <Text className=" text-black">Hosted </Text>
        </View>
      </View>
      <View className="">
        <Text className="py-3 text-primarygray">
          You have participated in 08 events
        </Text>

        {/* <FlatList
          data={data}
          renderItem={() => <HangoutCard />}
          keyExtractor={item => item.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          nestedScrollEnabled
        /> */}

        {data?.map((item, index) => (
          <HangoutCard key={index} />
        ))}
      </View>
    </View>
  );
};

export default UserDetailsHangouts;
