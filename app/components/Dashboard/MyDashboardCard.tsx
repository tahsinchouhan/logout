import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import {
    AboutSVG,
    FaqSVG,
    FriendsSVG,
    RightArrowSVG,
    SettingsSVG,
    SupportSVG,
    TicketSVG,
} from '../../assets/Icons';
const MyDashboardCard = ({icon, name, root, screen}) => {
  const navigation = useNavigation();
  const renderIcon = () => {
    switch (icon) {
      case 'ticket':
        return <TicketSVG />;
      case 'friends':
        return <FriendsSVG />;
      case 'settings':
        return <SettingsSVG />;
      case 'about':
        return <AboutSVG />;
      case 'faq':
        return <FaqSVG />;
      case 'support':
        return <SupportSVG />;
      default:
        return <TicketSVG />;
    }
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(screen, {root});
      }}
      className="w-full">
      <View className="bg-white h-14 mb-4 rounded-2xl px-6 flex flex-row items-center w-full border border-gray-200">
        <View className="w-[5%]">{renderIcon()}</View>
        <View className="w-[90%] px-4">
          <Text className="text-base font-semibold text-black">{name}</Text>
        </View>
        <View className="flex flex-row items-center w-[5%]">
          <Text className="text-xs font-normal text-[#747688]">
            <RightArrowSVG />
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MyDashboardCard;
// '../../assets/images/user1.png'
