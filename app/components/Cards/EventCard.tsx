import React from 'react';
import { Image, Text, View } from 'react-native';
import { LocationSVG, StarSvg } from '../../assets/Icons';
import { Avatars, Circle } from '../Avatars';

const EventCard: React.FC = () => {
  return (
    <View className="mr-4 rounded-2xl w-56">
      <Image
        className="rounded-t-2xl  w-full"
        source={require('../../assets/hangout1.png')}
      />
      <View className="px-4 border border-t-0 border-[#BDBDBD] rounded-b-16 ">
        <View className="py-4 border-b border-[#BDBDBD] ">
          <Text className="text-base w-48 font-bold mb-2 text-black">
            Drum’n’Bassgfgdfgdf
          </Text>
          <Text className="text-xs text-black/50 mb-4">
            <LocationSVG /> Cafe Lilliput, Vado
          </Text>
          <View className="flex-row items-center space-x-2">
            <Avatars users={[1, 2, 3]} />
            <Text className="text-xs text-black">76/234 joined</Text>
          </View>
        </View>
        <View className="py-4">
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

export default EventCard;
