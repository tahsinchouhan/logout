import React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FoodSVG, MusicSVG, PaintSVG, SportsSVG } from '../../assets/Icons';
import InvitationCard from '../../components/Cards/InvitationCard';
import IntrestCard from '../../components/HomeScreen/IntrestCard';
import NearbyHangOuts from './NearbyHangouts';
import RecommendedHangOutsSection from './RecommendedHangoutsSection';

const Home: React.FC = () => {
  const IntrestData=[
    {
      id:1,
      name:"Sports",
      icon:<SportsSVG/>
    },
    {
      id:2,
      name:"Music",
      icon:<MusicSVG/>
    },
    {
      id:3,
      name:"Food",
      icon:<FoodSVG/>
    },
    {
      id:4,
      name:"Painting",
      icon:<PaintSVG/>
    },
    {
      id:5,
      name:"Sports",
      icon:<SportsSVG/>
    },
  ]
  return (
    <ScrollView className="">
      <View>
        <ImageBackground
          className="w-full h-[60vh]"
          source={require('../../assets/Home/HomePage.png')}>
          <View className="flex flex-row justify-between items-center px-5 pt-16">
            <FlatList
              data={IntrestData}
              renderItem={({item,index}) => <IntrestCard item={item} key={index}/>}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />

            {/* <IntrestCard/> */}
          </View>
        </ImageBackground>

        {/* <Image
        className="w-full -mt-6"
        resizeMethod="resize"
        resizeMode="cover"
        source={require('../../assets/Home/HomePage.png')}
        /> */}
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
