import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import InvitationCard from '../../components/Cards/InvitationCard';
import HangOuts from './Hangouts';
import RecommendedHangOuts from './RecommendedHangouts';

const Home: React.FC = () => {
  return (
    <ScrollView className="">
        <Image className="w-full -mt-6" resizeMethod='resize' resizeMode='contain' source={require('../../assets/Home/HomePage.png')} />
      <View className="px-5 pb-20">
        <RecommendedHangOuts />
        <InvitationCard/>
        <HangOuts />
      </View>
    </ScrollView>
  );
};

export default Home;
