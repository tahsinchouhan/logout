import { useNavigation } from '@react-navigation/native';
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from 'accordion-collapse-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { QuestionSVG, ThankyouSVG } from '../../assets/Icons';
const FaqScreen = () => {
  const FaqData = [
    {
      question: 'What is hangout ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'What we do ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
    {
      question: 'Do we have anything else ?',
      answer:
        'Our quantitative research company has been lucky to work with organizations from Fortune 500 enterprises to the top consultancies',
    },
  ];
  const navigation = useNavigation();

  const windowHeight = Dimensions.get('window').height;

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [thankyouModal, setThankyouModal] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    setThankyouModal(false);
  };

  const handleThankyouModal = () => {
    setIsBottomSheetOpen(false);
    setThankyouModal(true);
  };

  return (
    <View className="bg-slate-200 h-full px-4 py-6 flex justify-between">
      <View>
        {FaqData.map((item, index) => (
          <Collapse
            key={index}
            className="bg-white w-full min-h-[56px] justify-center p-4 rounded-lg mb-4">
            <CollapseHeader>
              <View>
                <Text className="text-black font-semibold">
                  {item.question}
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text>{item.answer}</Text>
            </CollapseBody>
          </Collapse>
        ))}
      </View>
      <View>
        <Pressable onPress={handleOpenBottomSheet}>
          <View className="bg-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto space-x-2">
            <QuestionSVG />
            <Text className="text-white font-bold text-sm">
              Ask any question
            </Text>
          </View>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}>
        <View className="h-full bg-gray-900/30 backdrop-brightness-75">
          <View
            style={{
              left: '-45%',
              transform: [{translateX: Dimensions.get('window').width / 2}],
            }}
            className="bg-white rounded-3xl border border-[#E5E5E5] max-h-[430px] p-5 absolute bottom-[20%] top-[20%]  w-[90%]">
            <Text className="font-bold text-lg text-black">
              Ask me anything
            </Text>
            <Text>Forum Training & Certification</Text>
            <View className=" mt-2 pt-4">
              <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
                <TextInput
                  placeholder="Add username"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
                />
              </View>
              <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
                <TextInput
                  placeholder="Add email address"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-sm font-normal placeholder:text-base"
                />
              </View>
              <View className="border border-[#E5E5E5] rounded-3xl px-4  w-full  mb-4">
                <TextInput
                  multiline={true}
                  numberOfLines={5}
                  placeholder="Enter your question here.."
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black text text-sm font-normal placeholder:text-base"
                  style={{
                    textAlignVertical: 'top',
                  }}
                />
              </View>
              <View className="-mx-4">
                <Pressable onPress={handleThankyouModal}>
                  <View className="bg-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto space-x-2">
                    <Text className="text-white font-bold text-sm">
                      Ask any question
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={thankyouModal}
        onRequestClose={handleCloseBottomSheet}>
        <View className="h-full bg-gray-900/30 backdrop-brightness-75">
          <View
            style={{
              left: '-45%',
              transform: [{translateX: Dimensions.get('window').width / 2}],
            }}
            className="bg-white rounded-3xl border border-[#E5E5E5] h-72 p-5 absolute bottom-[30%] top-[30%]  w-[90%]">
            <View className="">
              <View className="flex items-center py-4 space-y-2">
                <ThankyouSVG />
                <Text className="text-lg font-bold text-[#25AE88]">
                  Thank you
                </Text>
                <Text className="text-center">
                  uh...oh! Looks like this location is waiting for yoiu to host
                  a hangout
                </Text>
              </View>
              <View className="-mx-4">
                <Pressable onPress={handleCloseBottomSheet}>
                  <View className=" border border-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto space-x-2">
                    <Text className="text-black font-bold text-sm">Close</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FaqScreen;
