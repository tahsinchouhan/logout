import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import EventCard from '../../components/Cards/EventCard';

const RecommendedHangOutsSection: React.FC = () => {
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

  const navigation = useNavigation();

  return (
    <View className="">
      <View className="flex-row items-center justify-between py-6">
        <Text className="text-22px font-bold text-black">Recommended</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('CreateHangoutScreens', {
              screen: 'RecommendedHangOutsScreen',
            });
          }}>
          <Text className="text-sm font-bold">See All</Text>
        </Pressable>
      </View>
      {/* <FlatList
        data={dummyData}
        renderItem={item => <EventCard {...item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummyData.map((item, index) => {
          return <EventCard {...item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default RecommendedHangOutsSection;
