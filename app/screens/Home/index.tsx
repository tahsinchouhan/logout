import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {FoodSVG, MusicSVG, PaintSVG, SportsSVG} from '../../assets/Icons';
import InvitationCard from '../../components/Cards/InvitationCard';
import IntrestCard from '../../components/HomeScreen/IntrestCard';
import NearbyHangOuts from './NearbyHangouts';
import RecommendedHangOutsSection from './RecommendedHangoutsSection';
const Home: React.FC = () => {
  const IntrestData = [
    {
      id: 1,
      name: 'Sports',
      icon: <SportsSVG />,
    },
    {
      id: 2,
      name: 'Music',
      icon: <MusicSVG />,
    },
    {
      id: 3,
      name: 'Food',
      icon: <FoodSVG />,
    },
    {
      id: 4,
      name: 'Painting',
      icon: <PaintSVG />,
    },
    {
      id: 5,
      name: 'Sports',
      icon: <SportsSVG />,
    },
  ];
  const {isLoading, error, data, isFetching} = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      axios.get('https://reqres.in/api/users').then(res => res.data),
  });
  console.log(isLoading, error, data, isFetching);
  return (
    <ScrollView className="">
      <View>
        <ImageBackground
          className="w-full h-[60vh]"
          source={require('../../assets/Home/HomePage.png')}>
          <ScrollView horizontal={true}>
            <View className="flex flex-row  px-5 pt-20">
              {/* <FlatList
              data={IntrestData}
              nestedScrollEnabled={true}
              renderItem={({item, index}) => (
                <IntrestCard item={item} key={index} />
              )}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            /> */}
              {IntrestData.map((item, index) => (
                <IntrestCard item={item} key={index} />
              ))}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      <View className="px-5 pb-20">
        <RecommendedHangOutsSection />
        <InvitationCard />
        <NearbyHangOuts />
      </View>
    </ScrollView>
  );
};

export default Home;
