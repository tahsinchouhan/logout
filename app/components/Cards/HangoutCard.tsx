import React from 'react';
import { Image, Text, View } from 'react-native';
import { LocationSVG, StarSvg } from '../../assets/Icons';
import { Avatars, Circle } from '../Avatars';

const HangoutCard: React.FC = data => {
  const userImages = [
    require('../../assets/images/user1.png'),
    require('../../assets/images/user2.png'),
    require('../../assets/images/user3.png'),
    require('../../assets/images/user4.png'),
  ];
  return (
    <View className="mb-4 bg-white rounded-2xl w-full h-48 flex flex-row border-[#BDBDBD] border">
      <View className="relative">
        <Image
          className="rounded-l-2xl  w-[170px] h-full"
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
        <View className="absolute bottom-2 left-1 w-auto px-4 py-1.5 rounded-2xl backdrop-blur-md bg-white/30">
          <Text className="text-white font-bold text-xs">
            {data.date} {data.time}
          </Text>
        </View>
      </View>
      <View className="px-4  rounded-b-16 flex justify-between">
        <View className="py-4  ">
          <Text className="text-base font-bold mb-2 text-black">
            Drum’n’Bassgfgdfgdf
          </Text>
          <Text className="text-xs text-black/50 mb-4">
            <LocationSVG /> Cafe Lilliput, Vado
          </Text>
          <View className="flex-row items-center space-x-2">
            <Avatars users={userImages} size={22} />
            <Text className="text-xs text-black">76/234 joined</Text>
          </View>
        </View>
        <View className="py-4 border-t border-[#BDBDBD]">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-2">
              <Circle>
                <Image
                  source={require('../../assets/hangout1.png')}
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
  );
};

export default HangoutCard;
