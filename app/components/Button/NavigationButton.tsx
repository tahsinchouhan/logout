import React from "react";
import { Pressable, Text, View } from "react-native";
import NavigationService from "../../navigation/NavigationService";

const NavigationButton = ({ text,screen }) => {
  return (
    <Pressable onPress={() => NavigationService.navigate(screen)}>
      <View className="bg-black rounded-3xl flex justify-center items-center w-[90vw] h-12 mx-auto">
        <Text className="text-white font-bold text-sm">{text}</Text>
      </View>
    </Pressable>
  );
};

export default NavigationButton;
