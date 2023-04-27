import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { LeftArrowSVG } from '../../assets/Icons';
import HangoutCard from '../../components/Cards/HangoutCard';

const RecommendedHangOutsScreen: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6];
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full px-4">
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
      <FlatList
        data={data}
        renderItem={() => <HangoutCard />}
        keyExtractor={item => item.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecommendedHangOutsScreen;
