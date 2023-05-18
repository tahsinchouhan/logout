import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {LeftArrowSVG} from '../../assets/Icons';
import {NavigationButton} from '../../components/Button';

const ProfessionalHangoutFifthScreen = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView className="bg-white h-full">
      <View className="px-4 py-6 flex justify-between">
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
              <Text className="text-sm font-normal text-black ">4/4</Text>
            </View>
          </View>
        </View>
        <View className="my-8">
          <Text className="text-[22px] font-bold text-black">
            Participant pricing
          </Text>
          <View className="p-4 border border-black rounded-3xl mt-8 flex flex-row">
            <View className="mr-1">
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>
            <View>
              <Text className="text-black font-bold">
                Title of the cancellation policy
              </Text>
              <Text className="text-[#777B7E] mt-2">
                Information Notification of all winners will occur tomorrow. 2 :
                something written or printed that gives noticethe act or an
                instance.. Read more
              </Text>
            </View>
          </View>
          <View className="p-4 border border-black rounded-3xl my-8 flex flex-row">
            <View className="mr-1">
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>
            <View>
              <Text className="text-black font-bold">
                Title of the cancellation policy
              </Text>
              <Text className="text-[#777B7E] mt-2">
                Information Notification of all winners will occur tomorrow. 2 :
                something written or printed that gives noticethe act or an
                instance.. Read more
              </Text>
            </View>
          </View>
        </View>
        <View className="-mx-4">
          <NavigationButton
            text="Next"
            screen="HangoutLocation"
            root="CreateHangoutScreens"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfessionalHangoutFifthScreen;
