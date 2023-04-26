import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { NavigationButton } from '../../components/Button';
import { NavigationButtonLight } from '../../components/Button/NavigationButton';
const FourthOnBoardingScreen = () => {
  return (
    <View className="h-full bg-white">
      <View className="h-[50%]">
        <ImageBackground
          source={require('../../assets/onbording/loginscreen.png')}
          resizeMode="cover"
          className="h-full w-full"></ImageBackground>
      </View>
      <View className="h-[50%] py-8 px-4">
        <View className="mb-5">
          <NavigationButton text="Sign up" screen="SignUpScreen" root="SignUpScreens" />
        </View>
        <View className="mb-5">
          <NavigationButtonLight text="Login now" screen="LoginScreen" root="LoginScreens" />
        </View>
        <View className="flex items-center flex-row justify-center mb-5">
          <View className="border-t border-gray-300 w-full"></View>
          <Text className="text-base text-gray-800 mx-4">or</Text>
          <View className="border-t border-gray-300 w-full"></View>
        </View>
        <View className="mb-5">
          <NavigationButtonLight
            text="Continue with Google"
            screen="Login"
            svg="GoogleSVG"
          />
        </View>
        <View className="mb-5">
          <NavigationButtonLight
            text="Continue with Apple"
            screen="Login"
            svg="AppleSVG"
          />
        </View>
      </View>
    </View>
  );
};

export default FourthOnBoardingScreen;
