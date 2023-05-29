import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { LocationSVG, StarSvg } from '../../assets/Icons';
import { Avatars, Circle } from '../Avatars';
const EventCard: React.FC = data => {
  // const {eventType, image, date, time, price } = data;
  const navigation = useNavigation();
  const userImages = [
    require('../../assets/images/user1.png'),
    require('../../assets/images/user2.png'),
    require('../../assets/images/user3.png'),
    require('../../assets/images/user4.png'),
  ];
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('EventDetailsScreens', {
          screen:
            data.eventType === 'Paid' ? 'PaidEventDetails' : 'FreeEventDetails',
        })
      }
      className="mr-4 rounded-2xl w-56">
      <View className="">
        <View className="relative">
          <Image
            className="rounded-t-2xl h-40  max-w-56 w-full"
            source={data.image}
          />
          {data.eventType === 'Free' ? (
            <View className="absolute top-2 left-2 flex-row space-x-2 bg-[#0ABE73] w-20 h-6 rounded-2xl flex justify-center items-center">
              <Text className="text-white font-bold text-xs">
                {data.eventType} entry
              </Text>
            </View>
          ) : (
            <View className="absolute top-2 left-2 flex-row space-x-2 bg-[#EB5757] w-20 h-6 rounded-2xl flex justify-center items-center">
              <Text className="text-white font-bold text-xs">
                ${data.price} USD
              </Text>
            </View>
          )}

          <View className="absolute bottom-2 left-2 w-auto px-4 py-1 rounded-2xl backdrop-blur-md bg-white/30">
            <Text className="text-white font-bold">
              {data.date} {data.time}
            </Text>
          </View>
        </View>
        <View className="px-4 border border-t-0 border-[#BDBDBD] rounded-b-16 ">
          <View className="py-4 border-b border-[#BDBDBD] ">
            <Text className="text-base w-48 font-bold mb-2 text-black">
              Drum’n’Bassgfgdfgdf
            </Text>
            <Text className="text-xs text-black/50 mb-4">
              <LocationSVG /> Cafe Lilliput, Vado
            </Text>
            <View className="flex-row items-center space-x-2">
              <Avatars users={userImages} size={20} />
              <Text className="text-xs text-black">76/234 joined</Text>
            </View>
          </View>
          <View className="py-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center space-x-2">
                <Circle>
                  <Image
                    source={require('../../assets/Home/hangoutone.jpg')}
                    className="w-full h-full rounded-full"
                  />
                </Circle>
                <Text className="text-xs text-black">Melissa Parker</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <StarSvg />
                <Text className="text-xs text-black">4.5</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default EventCard;
