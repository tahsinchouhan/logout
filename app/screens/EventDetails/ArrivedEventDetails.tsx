import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Modal, Pressable, ScrollView, Text, View} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  CalanderSVG,
  LeftArrowSVG,
  LocationSVG,
  MessageSVG,
  StarSvg,
  TicketSVG,
} from '../../assets/Icons';
import {Avatars} from '../../components/Avatars';
import EventDetailsTabs from '../../components/EventDetailsScreen/EventDetailsTabs';
import ReviewSubmitModal from '../../components/EventDetailsScreen/ReviewSubmitModal';
const ArrivedEventDetails = () => {
  const navigation = useNavigation();
  const [reviewModalVisible, setReviewModalVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

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
            <View className="flex flex-row items-center space-x-4">
              <Pressable onPress={() => navigation.goBack()}>
                <LeftArrowSVG />
              </Pressable>
              <View className="px-4 py-0.5 bg-[#0ABE73] items-center space-x-2  rounded-[100px] border border-gray-500 flex flex-row">
                <View className="bg-red-500 w-2 h-2 rounded-full"></View>
                <Text className="text-xs font-normal text-black">Ongoing</Text>
              </View>
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
                  <View className="w-[75%] border rounded-lg border-gray-300 h-[74px] p-3 flex flex-row space-x-4">
                    <View className="w-[10%]">
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
                  <View className="w-[20%] border rounded-lg border-gray-300 h-[74px] justify-center flex items-center space-y-1">
                    <Image
                      source={require('../../assets/map.png')}
                      className="w-full rounded-lg"
                    />
                  </View>
                </View>
                <View className="border border-gray-300 rounded-lg p-3 w-full h-24">
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
                </View>
              </View>
              <View className="my-4 space-y-4">
                <Pressable className="-mx-4">
                  <View className="bg-[#EAF2FD] rounded-3xl flex flex-row space-x-2 justify-center items-center w-[90%] h-12 mx-auto">
                    <TicketSVG fill="#1E78FF" />
                    <Text className="text-[#2F80ED] font-bold text-sm">
                      Add new Career
                    </Text>
                  </View>
                </Pressable>
                <Pressable className="-mx-4">
                  <View className="bg-[#F5F5F5] rounded-3xl flex flex-row space-x-2 justify-center items-center w-[90%] h-12 mx-auto">
                    <Text className="text-black font-semibold text-sm">
                      Payment Information
                    </Text>
                  </View>
                </Pressable>
              </View>

              <View>
                <View className="flex-row items-center justify-center my-4 space-x-2">
                  <Avatars users={userImages} size={30} />
                  <Text className="text-xs text-black">76/234 joined</Text>
                </View>
              </View>
            </View>
            <View className="bg-[#f5f5f5] h-full min-h-[135vh]">
              <EventDetailsTabs />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="bg-white w-full absolute bottom-0 h-24 border-t-2 border-gray-300 flex flex-row justify-between items-center px-4">
        <View>
          <Text className="text-[#27AE60] text-lg font-semibold">Free</Text>
          <Text className="font-medium text-primarygray">20 Seats Left</Text>
        </View>
        <Pressable
          onPress={() => {
            setReviewModalVisible(true);
          }}
          className="w-[40%] bg-black rounded-[100px] h-12 flex items-center justify-center">
          <Text className="font-bold text-white">Next</Text>
        </Pressable>
      </View>
      <GestureRecognizer
        style={{
          flex: modalVisible ? 1 : 0,
        }}
        onSwipeDown={() => {
          setModalVisible(false);
        }}
        className="">
        <Modal
          animationType="slide"
          transparent={true}
          visible={reviewModalVisible}
          onRequestClose={() => {
            setReviewModalVisible(false);
          }}>
          <ReviewSubmitModal setModalVisible={setReviewModalVisible} />
        </Modal>
      </GestureRecognizer>
    </View>
  );
};

export default ArrivedEventDetails;
