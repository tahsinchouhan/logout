import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { CheckSVG, MyLocationSVG, SearchSVG } from '../../assets/Icons';
import { NavigationButton } from '../../components/Button';

const HangoutLocation = () => {
  const navigation = useNavigation();

  const windowHeight = Dimensions.get('window').height;

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View className="bg-white h-full px-4 py-6">
      <View className="flex-row items-center mb-4">
        <View className="mr-3">
          <Pressable onPress={() => navigation.goBack()}>
            <CheckSVG />
          </Pressable>
        </View>
        <Text className="text-[22px] font-bold text-black">
          Select your area
        </Text>
      </View>
      <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
        <View>
          <SearchSVG />
        </View>
        <TextInput
          keyboardType="numeric"
          maxLength={10}
          dataDetectorTypes="phoneNumber"
          placeholder="Search for your area"
          placeholderTextColor="#777B7E"
          className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
        />
      </View>
      <Pressable onPress={handleOpenBottomSheet}>
        <View className="flex flex-row items-center space-x-3 my-2">
          <MyLocationSVG />
          <Text className="text-sm font-bold text-black">
            Use my current location
          </Text>
        </View>
      </Pressable>
      <View className="-mx-4 mt-4">
        <Image
          source={require('../../assets/images/map.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isBottomSheetOpen}
          onRequestClose={handleCloseBottomSheet}>
          <View style={{
            left : "-45%",
            transform : [{translateX : Dimensions.get('window').width / 2}],
          }} className="bg-white rounded-3xl border border-[#E5E5E5] p-5 h-[60%] absolute bottom-[5%] w-[90%]">
            <Text className="font-bold text-lg text-black">
              Confirm Address
            </Text>
            <View className="border-t border-t-gray-400 mt-4 pt-4">
              <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
                <TextInput
                  keyboardType="numeric"
                  maxLength={10}
                  dataDetectorTypes="phoneNumber"
                  placeholder="Street Name"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
                />
              </View>
              <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
                <TextInput
                  keyboardType="numeric"
                  maxLength={10}
                  dataDetectorTypes="phoneNumber"
                  placeholder="Flat, building, (Optional)"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
                />
              </View>
              <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
                <TextInput
                  keyboardType="numeric"
                  maxLength={10}
                  dataDetectorTypes="phoneNumber"
                  placeholder="City"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
                />
              </View>
              <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
                <TextInput
                  keyboardType="numeric"
                  maxLength={10}
                  dataDetectorTypes="phoneNumber"
                  placeholder="State"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
                />
              </View>
              <View className="flex flex-row justify-between">
                <TextInput
                  placeholder="Pin code"
                  placeholderTextColor="#777B7E"
                  className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                />
                <TextInput
                  placeholder="Country"
                  placeholderTextColor="#777B7E"
                  className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                />
              </View>
              <View className="-mx-4">
              <NavigationButton screen="CreateCasualHangoutSecond" text="Add Address" root="CreateHangoutScreens" />
              </View>
              <View>
                <Text className="text-xs text-black text-center mt-2">
                Address will be shared with confired participants
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default HangoutLocation;
