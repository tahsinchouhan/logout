import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AppleSVG, BlankSVG, GoogleSVG } from '../../assets/Icons';

const NavigationButton = ({text, screen,root}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(root, {screen: screen})}>
      <View className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
        <Text className="text-white font-bold text-sm">{text}</Text>
      </View>
    </Pressable>
  );
};

export default NavigationButton;

const NavigationButtonLight = ({text, screen, svg, root}) => {
  const navigation = useNavigation();

  const SVG =
    svg === 'GoogleSVG' ? GoogleSVG : svg === 'AppleSVG' ? AppleSVG : BlankSVG;

  return (
    <Pressable onPress={() => navigation.navigate(root, {screen: screen})}>
      <View className="bg-white border border-black rounded-3xl flex flex-row justify-center items-center w-[90vw] h-12 mx-auto">
        <View className="mr-4">
          <SVG />
        </View>
        <Text className="text-black font-bold text-sm">{text}</Text>
      </View>
    </Pressable>
  );
};

export { NavigationButtonLight };

