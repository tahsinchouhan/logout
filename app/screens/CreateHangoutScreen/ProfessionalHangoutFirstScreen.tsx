import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  CalanderSVG,
  ClockSVG,
  GallerySVG,
  LeftArrowSVG,
  NewLocationSVG,
  PenSVG,
} from '../../assets/Icons';
import {NavigationButton} from '../../components/Button';
const ProfessionalHangoutFirstScreen = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endTimeOpen, setEndTimeOpen] = useState(false);
  const [dateText, setDateText] = useState('Add event date');
  const [startTimeText, setStartTimeText] = useState('Start time');
  const [endTimeText, setEndTimeText] = useState('End time');
  return (
    <ScrollView>
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
            <Text className="text-sm font-normal text-black ">1/4</Text>
          </View>
        </View>
        <View className="my-5">
          <View className="flex flex-row justify-start space-x-2 items-center">
            <TextInput
              placeholder="Add hangout title "
              placeholderTextColor="#777B7E"
              className="text-22px font-bold px-3 text-black my-0 py-1"
            />
            <PenSVG />
          </View>
          <View className="flex flex-row justify-start space-x-2 items-center">
            <TextInput
              placeholder="Add a short discription for the hangout  "
              placeholderTextColor="#777B7E"
              className="text-base  px-3 text-black my-0 py-1"
            />
            <PenSVG />
          </View>
          <View className="h-44 w-full bg-[#F5F5F5] rounded-3xl mt-3 flex items-center justify-center border border-[#E5E5E5]">
            <GallerySVG />
            <Text className="text-base text-primarygray w-1/2 text-center">
              Add a banner to your hangout
            </Text>
          </View>
        </View>
        <View>
          <View className="my-2">
            <View className="border border-[#E5E5E5] rounded-3xl px-3  w-full text-black h-12 mb-4 flex justify-center">
              <Picker
                placeholder="Add Category"
                placeholderTextColor="#777B7E"
                mode="dropdown"
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base">
                <Picker.Item label="Add Category" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <View className="border border-[#E5E5E5] rounded-3xl px-3  w-full text-black h-12 mb-4 flex justify-center">
              <Picker
                placeholder="Add Sub Category"
                placeholderTextColor="#777B7E"
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2">
                <Picker.Item label="Add Sub Category" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
            <View className="flex flex-row rounded-[100px] border border-[#E5E5E5] px-4 items-center h-12 mb-4">
              <Pressable
                onPress={() => setOpen(true)}
                className="flex flex-row items-center space-x-2 px-3">
                <CalanderSVG />
                <Text
                  style={{
                    color: dateText === 'Add event date' ? '#777B7E' : '#000',
                  }}
                  className="text-sm font-normal text-primarygray">
                  {dateText}
                </Text>
              </Pressable>

              <DatePicker
                modal
                locale="en_IN"
                mode="date"
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                  setDateText(date.toDateString());
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <View className="flex flex-row justify-between">
              <View className="flex flex-row rounded-[100px] border border-[#E5E5E5] px-4 items-center h-12 mb-4 w-[48%]">
                <Pressable
                  onPress={() => setStartTimeOpen(true)}
                  className="flex flex-row items-center space-x-2 px-3">
                  <ClockSVG />
                  <Text
                    style={{
                      color:
                        startTimeText === 'Start time' ? '#777B7E' : '#000',
                    }}
                    className="text-sm font-normal text-primarygray">
                    {startTimeText}
                  </Text>
                </Pressable>

                <DatePicker
                  modal
                  locale="en_IN"
                  mode="time"
                  open={startTimeOpen}
                  date={date}
                  onConfirm={date => {
                    setStartTimeOpen(false);
                    setDate(date);
                    setStartTimeText(date.toTimeString());
                  }}
                  onCancel={() => {
                    setStartTimeOpen(false);
                  }}
                />
              </View>
              <View className="flex flex-row rounded-[100px] border border-[#E5E5E5] px-4 items-center h-12 mb-4 w-[48%]">
                <Pressable
                  onPress={() => setEndTimeOpen(true)}
                  className="flex flex-row items-center space-x-2 px-3">
                  <ClockSVG />
                  <Text
                    style={{
                      color: endTimeText === 'End time' ? '#777B7E' : '#000',
                    }}
                    className="text-sm font-normal text-primarygray">
                    {endTimeText}
                  </Text>
                </Pressable>

                <DatePicker
                  modal
                  open={endTimeOpen}
                  date={date}
                  locale="en_IN"
                  mode="time"
                  onConfirm={date => {
                    setEndTimeOpen(false);
                    setDate(date);
                    setEndTimeText(date.toTimeString());
                  }}
                  onCancel={() => {
                    setEndTimeOpen(false);
                  }}
                />
              </View>
            </View>

            <View className="flex flex-row justify-center rounded-[100px] bg-[#F5F5F5] border border-[#E5E5E5] px-4 items-center h-12 mb-4 space-x-2">
              <NewLocationSVG />
              <Text className="text-center text-black">Add location</Text>
            </View>
            <View className="flex flex-row justify-center rounded-[100px] bg-[#F5F5F5] border border-[#E5E5E5] px-4 items-center h-12 mb-4 space-x-2">
              {/* <NewLocationSVG /> */}
              <Text className="text-center text-black">+ Add co-host</Text>
            </View>

            <View className="mt-3 -mx-4">
              <NavigationButton
                text="Next"
                screen="ProfessionalHangoutSecondScreen"
                root="CreateHangoutScreens"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfessionalHangoutFirstScreen;
