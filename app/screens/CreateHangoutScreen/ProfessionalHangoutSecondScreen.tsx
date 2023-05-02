import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { LeftArrowSVG, ParticipantsSVG, UserSVG } from '../../assets/Icons';
import { NavigationButton } from '../../components/Button';
const ProfessionalHangoutSecondScreen = () => {
  const navigation = useNavigation();
  const [participantType, setParticipantType] = useState('anyone');

  return (
    <View className="bg-white h-full px-4 py-6 flex justify-between">
      <View>
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
            <Text className="text-sm font-normal text-black ">2/4</Text>
          </View>
        </View>
        <View className="my-8">
          <Text className="text-[22px] font-bold text-black">
            Set participartion eligibility
          </Text>
          <View className=" mt-6 pt-4">
            <View className="flex flex-row justify-between">
              <TextInput
                placeholder="Age"
                placeholderTextColor="#777B7E"
                className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
              />
              <TextInput
                placeholder="Gender"
                placeholderTextColor="#777B7E"
                className="h-12 rounded-[100px] border border-[#E5E5E5] px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
              />
            </View>
            <View className="border border-[#E5E5E5] rounded-3xl px-3  w-full text-black h-12 mb-4 flex justify-center">
              <Picker
                placeholder="Select minimum participation rating"
                placeholderTextColor="#777B7E"
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2">
                <Picker.Item
                  label="Select minimum participation rating"
                  value="java"
                />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            <View>
              <Text className="text-sm font-bold text-primarygray my-3">
                Participation type
              </Text>
              <View className="flex flex-row justify-evenly">
                <Pressable
                  onPress={() => setParticipantType('singles')}
                  style={{
                    backgroundColor:
                      participantType === 'singles' ? '#F2F2F2' : 'white',
                  }}
                  className="border border-black flex justify-center items-center rounded-[100px] w-[30%] h-10">
                  <Text className="text-black text-sm font-bold">Singles</Text>
                </Pressable>
                <Pressable
                  onPress={() => setParticipantType('couples')}
                  style={{
                    backgroundColor:
                      participantType === 'couples' ? '#F2F2F2' : 'white',
                  }}
                  className="border border-black flex justify-center items-center rounded-[100px] w-[30%] h-10">
                  <Text className="text-black text-sm font-bold">Couples</Text>
                </Pressable>
                <Pressable
                  onPress={() => setParticipantType('anyone')}
                  style={{
                    backgroundColor:
                      participantType === 'anyone' ? '#F2F2F2' : 'white',
                  }}
                  className="border border-black flex justify-center items-center rounded-[100px] w-[30%] h-10">
                  <Text className="text-black text-sm font-bold">Anyone</Text>
                </Pressable>
              </View>
            </View>
            <View className="mt-4">
              <Text className="text-sm font-bold text-primarygray my-3">
                Number of seats
              </Text>
              <View className="flex flex-row justify-between">
                <View className="border border-[#E5E5E5] px-4  w-[48%] h-12 rounded-[100px] mb-4 space-x-2 flex flex-row items-center">
                  <UserSVG />
                  <TextInput
                    style={{
                      display:
                        participantType === 'anyone' ||
                        participantType === 'singles'
                          ? 'flex'
                          : 'none',
                    }}
                    keyboardType="numeric"
                    placeholder="Single Seats"
                    placeholderTextColor="#777B7E"
                    className="   text-black  text-base"
                  />
                </View>
                <View className="border border-[#E5E5E5] px-4  w-[48%] h-12 rounded-[100px] mb-4 flex flex-row space-x-2  items-center">
                  <ParticipantsSVG />
                  <TextInput
                    style={{
                      display:
                        participantType === 'anyone' ||
                        participantType === 'couples'
                          ? 'flex'
                          : 'none',
                    }}
                    keyboardType="numeric"
                    placeholder="Couple Seats"
                    placeholderTextColor="#777B7E"
                    className="   text-black  text-base"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="-mx-4">
        <NavigationButton
          screen="ProfessionalHangoutThirdScreen"
          text="Next"
          root="CreateHangoutScreens"
        />
      </View>
    </View>
  );
};

export default ProfessionalHangoutSecondScreen;
