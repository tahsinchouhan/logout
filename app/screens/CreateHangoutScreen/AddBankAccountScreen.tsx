import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { LeftArrowSVG, PenSVG } from '../../assets/Icons';
import { NavigationButton } from '../../components/Button';

const AddBankAccountScreen = () => {
  const navigation = useNavigation();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View className="bg-white h-full px-4 pt-6 ">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center space-x-4">
          <Pressable onPress={() => navigation.goBack()}>
            <LeftArrowSVG />
          </Pressable>
          <View className="px-4 py-2  rounded-[100px] border border-gray-500">
            <Text className="text-sm font-normal text-black">
              Professional Hangout 👩🏻‍🔧
            </Text>
          </View>
        </View>
        <View className="flex justify-center">
          <Text className="text-sm font-normal text-black ">0/4</Text>
        </View>
      </View>
      <View className="my-5 mt-8">
        <View className="flex flex-row justify-start space-x-2 items-center">
          <TextInput
            placeholder="Add Your Bank Account"
            placeholderTextColor="#777B7E"
            className="text-22px font-bold text-black my-0 py-1 mr-2"
          />
          <PenSVG />
        </View>
        <View className="flex flex-row justify-start items-center">
          <Text className="text-base text-[#595959] pl-1">
            You will receive the money you earn here
          </Text>
        </View>
      </View>
      <View className="">
        <View className="border border-[#E5E5E5] rounded-3xl px-3  w-full text-black h-12 mb-4 flex justify-center">
          <Picker
            placeholder="Bank name"
            placeholderTextColor="#777B7E"
            mode="dropdown"
            className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base">
            <Picker.Item label="Bank name" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <TextInput
          placeholder="Account Number"
          placeholderTextColor="#777B7E"
          className="border border-gray-300 rounded-3xl px-4 py-2 w-full text-black h-12 mb-4"
        />
        <TextInput
          placeholder="Account Name"
          placeholderTextColor="#777B7E"
          className="border border-gray-300 rounded-3xl px-4 py-2 w-full text-black h-12 mb-4"
        />
        <TextInput
          placeholder="IFSC Code"
          placeholderTextColor="#777B7E"
          className="border border-gray-300 rounded-3xl px-4 py-2 w-full text-black h-12 mb-4"
        />
      </View>
      <View className="-mx-4 mt-6">
        <Pressable onPress={() => setIsBottomSheetOpen(true)}>
          <View className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
            <Text className="text-white font-bold text-sm">Next</Text>
          </View>
        </Pressable>
      </View>
      <GestureRecognizer
        style={{
          flex: isBottomSheetOpen ? 1 : 0,
        }}
        onSwipeDown={() => {
          setIsBottomSheetOpen(false);
        }}
        className="">
        <Modal
          animationType="slide"
          transparent={true}
          visible={isBottomSheetOpen}
          onRequestClose={handleCloseBottomSheet}>
          <View className="h-full bg-gray-900/30 backdrop-brightness-75">
            <View className="bg-white rounded-t-3xl border border-[#E5E5E5] p-5 h-fit absolute bottom-0 w-full">
              <View className="flex flex-row justify-between">
                <Text className="font-bold text-lg text-black">
                  Terms & Conditions
                </Text>
                <TouchableOpacity onPress={handleCloseBottomSheet} className="">
                  <Text className="text-end">Close</Text>
                </TouchableOpacity>
              </View>
              <View className="border-t border-t-gray-400 mt-4 pt-4">
                <Text className="text-black mb-4">
                  The act or an instance of giving notice or information
                  Notification of all winners will occur tomorrow. 2 : something
                  written or printed that gives noticethe act or an instance of
                  giving notice or information Notification of all winners will
                  occur tomorrow. 2 : something written or printed that gives
                  noticethe act or an instance of giving notice or information
                  Notification of all winners will occur tomorrow.
                </Text>
                <Text className="text-black mb-4">
                  2 : something written or printed that gives noticethe act or
                  an instance of giving notice or information Notification of
                  all winners will occur tomorrow. 2 : something written or
                  printed that gives noticethe act or an instance of giving
                  notice or information Notification of all winners will occur
                  tomorrow. 2 : something written or printed that gives
                  noticethe act or an instance of giving notice or information
                  Notification of all winners will occur tomorrow. 2 : something
                  written or printed that gives noticethe act or an instance of
                  giving notice or information Notification of all winners will
                  occur tomorrow.
                </Text>
                <View className="-mx-4">
                  <NavigationButton
                    text="I Accept"
                    screen={'ProfessionalHangoutFirstScreen'}
                    root={'CreateHangoutScreens'}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  );
};

export default AddBankAccountScreen;
