import React from 'react';
import { Image, Text, View } from 'react-native';
import { AttandanceSVG, RightArrowSVG } from '../../assets/Icons';
import MyDashboardCard from '../../components/Dashboard/MyDashboardCard';

const MyDashboard = () => {
  return (
    <View className="px-4 py-6">
      <View className="bg-white h-20 mb-4 rounded-2xl px-6 flex flex-row items-center w-full border border-gray-200">
        <View className="w-[10%]">
          <Image
            className="w-10 h-10 rounded-full"
            source={require('../../assets/images/user1.png')}
          />
        </View>
        <View className="w-[85%] px-4">
          <Text className="text-base font-bold text-black">Chris Adams</Text>
          <Text className="text-xs font-normal text-primarygray">
            @chrisadams
          </Text>
        </View>
        <View className="flex flex-row items-center w-[5%]">
          <Text className="text-xs font-normal text-[#747688]">
            <RightArrowSVG />
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-evenly">
        <View className="w-[30%] px-1 flex items-center justify-center my-4">
          <Text className="text-primarygray text-xs font-semibold">
            Host rating
          </Text>
          <View className="flex flex-row justify-center items-center space-x-2 mt-2">
            <Image
              source={require('../../assets/images/star.png')}
              className="w-4 h-4"
            />
            <Text className="text-black text-sm font-semibold">4.0</Text>
          </View>
        </View>
        <View className="w-[33%] border-l px-1 border-r flex items-center justify-center my-4">
          <Text className="text-primarygray text-xs font-semibold">
            Participant rating
          </Text>
          <View className="flex flex-row justify-center items-center space-x-2 mt-2">
            <Image
              source={require('../../assets/images/star.png')}
              className="w-4 h-4"
            />
            <Text className="text-black text-sm font-semibold">6.0</Text>
          </View>
        </View>
        <View className="w-[30%] px-1  flex items-center justify-center my-4">
          <Text className="text-primarygray text-xs font-semibold">
            Attendence score{' '}
          </Text>
          <View className="flex flex-row justify-center items-center space-x-2 mt-2">
            <AttandanceSVG />
            <Text className="text-black text-sm font-semibold">75%</Text>
          </View>
        </View>
      </View>
      <View className="border-t border-gray-400 pt-5 mt-5">
        <MyDashboardCard name="Hangout tickets" icon="ticket" root="DashboardScreens" screen="UserHangoutTickets" />
        <MyDashboardCard name="Friends" icon="friends" root="DashboardScreens" screen="UserHangoutTickets" />
        <MyDashboardCard name="Settings" icon="settings" root="DashboardScreens" screen="UserHangoutTickets" />
        <MyDashboardCard name="About" icon="about" root="DashboardScreens" screen="AboutScreen" />
        <MyDashboardCard name="FAQ" icon="faq" root="DashboardScreens" screen="FaqScreen" />
        <MyDashboardCard name="Help & Support" icon="support" root="DashboardScreens" screen="UserHangoutTickets" />
      </View>
    </View>
  );
};

export default MyDashboard;
