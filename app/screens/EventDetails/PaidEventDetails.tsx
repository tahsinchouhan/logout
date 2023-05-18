import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  CalanderSVG,
  LocationSVG,
  MessageSVG,
  NewLocationSVG,
  PaidEntrySVG,
  StarSvg,
  TickRightSVG,
} from '../../assets/Icons';
import {Avatars} from '../../components/Avatars';
import EventDetailsTabs from '../../components/EventDetailsScreen/EventDetailsTabs';
import EventPaymentModal from '../../components/EventDetailsScreen/EventPaymentModal';
import ReviewSubmitModal from '../../components/EventDetailsScreen/ReviewSubmitModal';
const PaidEventDetails = () => {
  const [step, setStep] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [reviewModalVisible, setReviewModalVisible] = React.useState(false);
  const navigation = useNavigation();
  const userImages = [
    require('../../assets/images/user1.png'),
    require('../../assets/images/user2.png'),
    require('../../assets/images/user3.png'),
    require('../../assets/images/user4.png'),
  ];
  return (
    <View>
      <ScrollView className="h-full relative">
        <View>
          <View className="h-72 w-full">
            <Image
              source={require('../../assets/images/event2.jpeg')}
              className="w-full h-full"
            />
          </View>
          <View>
            <View className="bg-white p-4">
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
              <View className="mt-5 space-y-4">
                <View className="flex flex-row justify-between">
                  <View className="w-[65%] border rounded-lg border-gray-300 h-[74px] p-3 flex flex-row space-x-4">
                    <View className="w-[10%]">
                      <View className="w-10 h-10 rounded-full bg-[#DCF4FF] flex justify-center items-center">
                        <CalanderSVG />
                      </View>
                    </View>
                    <View className=" px-4">
                      <View className="flex justify-center">
                        <Text className=" text-black font-bold">
                          03 February
                        </Text>
                        <View className=" mt-1">
                          <Text className="font-normal">12:40PM</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="w-[30%] border rounded-lg border-gray-300 h-[74px] justify-center flex items-center space-y-1">
                    <PaidEntrySVG />
                    <Text className="font-bold text-[#FF8A1E]">4,250</Text>
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

              <View>
                <View className="flex-row items-center justify-center my-4 space-x-2">
                  <Avatars users={userImages} size={30} />
                  <Text className="text-xs text-black">23/54 joined</Text>
                </View>
              </View>
            </View>
            <View className="bg-[#f5f5f5] h-full min-h-[135vh]">
              <EventDetailsTabs />
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        {step === 0 && (
          <View className="bg-white w-full absolute bottom-0 h-24 border-t-2 border-gray-300 flex flex-row justify-between items-center px-4">
            <View>
              <Text className="text-black text-lg font-semibold">₹300</Text>
              <Text className="font-medium text-primarygray">
                12 Seats Left
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setStep(1);
              }}
              className="w-[40%] bg-black rounded-[100px] h-12 flex items-center justify-center">
              <Text className="font-bold text-white">Request Invite</Text>
            </Pressable>
          </View>
        )}
        {step === 1 && (
          <View className="bg-white w-full absolute bottom-0 h-24 border-t-2 border-gray-300 flex flex-row justify-between items-center px-4">
            <View>
              <Text className="font-medium text-primarygray">
                Waiting for {'\n'} approval from host
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setStep(2);
              }}
              className="w-[40%] bg-[#FFA843] rounded-[100px] h-12 flex items-center justify-center">
              <Text className="font-bold text-white">Request Sent</Text>
            </Pressable>
          </View>
        )}
        {step === 2 && (
          <View className="bg-white w-full absolute bottom-0 h-24 border-t-2 border-gray-300 flex flex-row justify-between items-center px-4">
            <View>
              <Text className="text-black text-base">
                Request {'\n'} Accepted
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}
              className="w-[40%] bg-black rounded-[100px] h-12 flex items-center justify-center">
              <Text className="font-bold text-white">Pay Now</Text>
            </Pressable>
          </View>
        )}
        {step === 3 && (
          <View className="bg-white w-full absolute bottom-0 h-24 border-t-2 border-gray-300 flex flex-row justify-between items-center px-4">
            <View className="w-1/2 ">
              <Pressable
              // onPress={() => navigation.navigate(root, {screen: screen})}
              >
                <View className="bg-white border border-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto">
                  <NewLocationSVG />
                  <Text className="text-black font-bold text-sm ml-2">
                    Directions
                  </Text>
                </View>
              </Pressable>
            </View>
            <View className="w-1/2 ">
              <Pressable
                onPress={() => {
                  // setReviewModalVisible(true);
                  navigation.navigate('ArrivedEventDetails');
                }}>
                <View className="bg-[#169D44] border border-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto">
                  <TickRightSVG />
                  <Text className="text-white font-bold text-sm ml-2">
                    Mark Arrived
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        )}
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
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <EventPaymentModal
            setStep={setStep}
            setModalVisible={setModalVisible}
          />
        </Modal>
      </GestureRecognizer>
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

export default PaidEventDetails;
