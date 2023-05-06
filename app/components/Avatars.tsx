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
  size?: number;
};

export const Avatars: React.FC = ({className, users, size}: AvatarsProps) => {
  return (
    <View className={`flex-row ${className}`}>
      {users.map((user, index) => (
        <View className={`-ml-1.5`} key={index}>
          <View className="rounded-full bg-white border-[#cccccc] border-[1.5px] w-auto h-auto">
            <Image
              source={user}
              className=" rounded-full"
              style={{
                width: size || 20,
                height: size || 20,
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
};
