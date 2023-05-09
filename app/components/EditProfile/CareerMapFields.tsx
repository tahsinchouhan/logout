import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ClockSVG } from '../../assets/Icons';

const CareerMapFields = () => {
  const [date, setDate] = useState(new Date());
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endTimeOpen, setEndTimeOpen] = useState(false);
  const [startTimeText, setStartTimeText] = useState('Start time');
  const [endTimeText, setEndTimeText] = useState('End time');
  return (
    <View>
      <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
        <TextInput
          maxLength={10}
          placeholder="Name"
          placeholderTextColor="#777B7E"
          className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
        />
      </View>
      <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
        <TextInput
          placeholder="Location"
          placeholderTextColor="#777B7E"
          className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
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
                color: startTimeText === 'Start time' ? '#777B7E' : '#000',
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
    </View>
  );
};

export default CareerMapFields;
