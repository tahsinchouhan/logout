import React from 'react';
import { Image, View } from 'react-native';

export const Circle: React.FC = ({children}) => {
  return (
    <View
      className={`w-5 h-5 rounded-full bg-white border-[#cccccc] border-[1.5px]`}>
      {children}
    </View>
  );
};

// make a overlaping Avatars component

type AvatarsProps = {
  className?: string;
  radius?: number;
  users: number[] | string[];
};

export const Avatars: React.FC = ({className, users}: AvatarsProps) => {
  return (
    <View className={`flex-row ${className}`}>
      {users.map((user, index) => (
        <View className={`-ml-1.5`} key={index}>
          <Circle>
            <Image
              source={require('../assets/hangout1.png')}
              className="w-full h-full rounded-full"
            />
          </Circle>
        </View>
      ))}
    </View>
  );
};
