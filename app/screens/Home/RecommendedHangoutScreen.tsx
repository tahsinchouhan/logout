import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { FilterIconSVG, LeftArrowSVG } from '../../assets/Icons';
import HangoutCard from '../../components/Cards/HangoutCard';

const RecommendedHangOutsScreen: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6];
  const navigation = useNavigation();
  const dummyData = [
    {
      id: 1,
      image: require('../../assets/Home/hangout1.png'),
      date: '11 May',
      time: '8:00 PM',
      eventType: 'Free',
    },
    {
      id: 2,
      price: 100,
      image: require('../../assets/Home/hangout2.png'),
      date: '03 February',
      time: '10:00 PM',
      eventType: 'Paid',
    },
    {
      id: 3,
      price: 320,
      image: require('../../assets/Home/hangout3.png'),
      date: '28 December',
      time: '1:00 AM',
      eventType: 'Paid',
    },
    {
      id: 4,
      image: require('../../assets/Home/hangout1.png'),
      date: '11 May',
      time: '8:00 PM',
      eventType: 'Free',
    },
    {
      id: 5,
      image: require('../../assets/Home/hangout2.png'),
      date: '03 February',
      time: '10:00 PM',
      eventType: 'Free',
    },
    {
      id: 6,
      price: 240,
      image: require('../../assets/Home/hangout3.png'),
      date: '28 December',
      time: '1:00 AM',
      eventType: 'Paid',
    },
  ];

  return (
    <View className="bg-white h-full px-4 relative">
      <View className="flex-row items-center  py-6 mb-2">
        <View className="mr-3">
          <Pressable onPress={() => navigation.goBack()}>
            <LeftArrowSVG />
          </Pressable>
        </View>
        <Text className="text-[22px] font-bold text-black">
          Recommeded hangouts{' '}
        </Text>
        <Text className="text-sm font-bold"></Text>
      </View>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        {dummyData.map((item, index) => {
          return <HangoutCard key={index} {...item} />;
        })}
      </ScrollView>
      <Pressable
        onPress={() =>
          navigation.navigate('CreateHangoutScreens', {
            screen: 'EventFilterScreen',
          })
        }
        className="absolute bottom-5 left-1/2  bg-black rounded-3xl px-5 w-auto flex flex-row items-center justify-center h-12 space-x-4">
        <View>
          <FilterIconSVG />
        </View>
        <Text className="text-white font-bold">Filter</Text>
      </Pressable>
    </View>
  );
};

export default RecommendedHangOutsScreen;
