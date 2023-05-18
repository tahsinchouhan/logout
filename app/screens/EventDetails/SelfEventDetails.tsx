import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {
  CalanderSVG,
  EyesIconSVG,
  LeftArrowSVG,
  LocationSVG,
  MessageSVG,
  ShareIconSVG,
  StarSvg,
} from '../../assets/Icons';
import {Avatars} from '../../components/Avatars';
import SelfEventTabs from '../../components/EventDetailsScreen/SelfEventTabs';
const SelfEventDetails = () => {
  const navigation = useNavigation();

  const userImages = [
    require('../../assets/images/user1.png'),
    require('../../assets/images/user2.png'),
    require('../../assets/images/user3.png'),
    require('../../assets/images/user4.png'),
  ];
  return (
    <View>
      <ScrollView className="h-full relative bg-white py-4">
        <View>
          <View className="flex flex-row justify-between p-4">
            <View className="flex flex-row items-center justify-between w-full px-2">
              <Pressable onPress={() => navigation.goBack()}>
                <LeftArrowSVG />
              </Pressable>
              <Pressable>
                <ShareIconSVG />
              </Pressable>
            </View>
          </View>
          <View>
            <View className="bg-white p-4">
              <View className="flex flex-row space-x-4">
                <View>
                  <Image
                    source={require('../../assets/images/event.jpeg')}
                    className="w-16 h-16 rounded-2xl"
                  />
                </View>
                <View>
                  <Text className="text-2xl font-bold text-black mb-2">
                    Drum’n’Bass ft The. Lorem
                  </Text>
                  <Text className="text-xs text-black/50 mb-3">
                    <LocationSVG /> Cafe Lilliput, Vado
                  </Text>
                  <View className="flex flex-row space-x-2">
                    <View className="flex justify-center items-center border border-gray-400 rounded-[100px] h-7">
                      <Text className="text-xs px-4">Category</Text>
                    </View>
                    <View className="flex justify-center items-center border border-gray-400 rounded-[100px] h-7">
                      <Text className="text-xs px-4">Sub Category</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className="mt-5 space-y-4">
                <View className="flex flex-row justify-between">
                  <View className="w-full border rounded-lg border-gray-300 h-[74px] p-3 flex flex-row space-x-4">
                    <View className="w-[10%] flex items-center">
                      <View className="w-10 h-10 rounded-full bg-[#DCF4FF] flex justify-center items-center">
                        <CalanderSVG />
                      </View>
                    </View>
                    <View className=" px-4">
                      <View className="flex justify-center">
                        <Text className=" text-black font-bold">
                          23 Novemeber
                        </Text>
                        <View className=" mt-1">
                          <Text className="font-normal">10:30PM</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="border border-gray-300 rounded-lg p-3 w-full ">
                  <Text className="text-xs text-primarygray">Host</Text>
                  <View className=" flex flex-row items-center w-full mt-3">
                    <View className="w-[10%]">
                      <Image
                        className="w-10 h-10 rounded-full"
                        source={require('../../assets/images/user1.png')}
                      />
                    </View>
                    <View className="w-[50%] px-4">
                      <View className="flex justify-center">
                        <Text className=" text-black">Melissa Parker</Text>
                        <View className="flex flex-row items-center mt-1">
                          <StarSvg />
                          <Text className="text-black ml-1">4.5</Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row items-center w-[30%]">
                      <View className="border border-[#1E78FF] h-9 w-32 rounded-full flex items-center justify-center flex-row">
                        <MessageSVG />
                        <Text className="text-[#1E78FF] font-bold ml-3">
                          Message
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text className="text-xs text-primarygray mt-2">Co-host</Text>
                  <View className=" flex flex-row items-center w-full mt-3">
                    <View className="w-[10%]">
                      <Image
                        className="w-10 h-10 rounded-full"
                        source={require('../../assets/images/user2.png')}
                      />
                    </View>
                    <View className="w-[50%] px-4">
                      <View className="flex justify-center">
                        <Text className=" text-black">Thomas Hanks</Text>
                        <View className="flex flex-row items-center mt-1">
                          <StarSvg />
                          <Text className="text-black ml-1">3.2</Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row items-center w-[30%]">
                      <View className="border border-[#1E78FF] h-9 w-32 rounded-full flex items-center justify-center flex-row">
                        <MessageSVG />
                        <Text className="text-[#1E78FF] font-bold ml-3">
                          Message
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View className=" flex flex-row items-center w-full mt-3">
                    <View className="w-[10%]">
                      <Image
                        className="w-10 h-10 rounded-full"
                        source={require('../../assets/images/user3.png')}
                      />
                    </View>
                    <View className="w-[50%] px-4">
                      <View className="flex justify-center">
                        <Text className=" text-black">Jenny Hail</Text>
                        <View className="flex flex-row items-center mt-1">
                          <StarSvg />
                          <Text className="text-black ml-1">5.2</Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-row items-center w-[30%]">
                      <View className="border border-[#1E78FF] h-9 w-32 rounded-full flex items-center justify-center flex-row">
                        <MessageSVG />
                        <Text className="text-[#1E78FF] font-bold ml-3">
                          Message
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex flex-row justify-center items-center space-x-4 border rounded-3xl border-black my-4 p-3">
                <EyesIconSVG />
                <Text className="text-black font-semibold">Public view</Text>
              </View>

              <View>
                <View className="flex-row items-center justify-center my-4 space-x-2">
                  <Avatars users={userImages} size={30} />
                  <Text className="text-xs text-black">76/234 joined</Text>
                </View>
              </View>
            </View>
            <View className="bg-[#f5f5f5] h-full min-h-[135vh]">
              <SelfEventTabs />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="bg-white w-full absolute bottom-0 h-24 border-t-2 border-gray-300 flex flex-row justify-between items-center px-4">
        <Pressable
          onPress={() => {
            navigation.navigate('EventDetailsScreens', {
              screen: 'PaidEventDetails',
            });
          }}
          className="w-[48%] bg-white border border-black rounded-[100px] h-12 flex items-center justify-center">
          <Text className="font-bold text-black">Edit event</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('EventDetailsScreens', {
              screen: 'PaidEventDetails',
            });
          }}
          className="w-[48%] bg-black rounded-[100px] h-12 flex items-center justify-center">
          <Text className="font-bold text-white">Contact Support</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SelfEventDetails;
