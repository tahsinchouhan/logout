import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { NavigationButton } from '../Button';

const ReviewSubmitModal = ({setModalVisible}) => {
  const navigation = useNavigation();
  return (
    <View className="h-full bg-gray-900/30 backdrop-brightness-75">
      <View className="bg-white max-h-[60vh] absolute bottom-0 w-full rounded-t-xl p-4 py-6 ">
        <View className="flex flex-row justify-end ">
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            className="">
            <Text className="text-end">Close</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-22px font-bold text-black">
            How was your experience with your host Erica Hansen ?
          </Text>
        </View>
        <View className="mb-4 -mt-10">
          <AirbnbRating count={10} defaultRating={6} size={30} />
        </View>
        <View>
          <Text className="font-semibold text-primarygray">
            Category: Social
          </Text>
          <TextInput
            placeholder="Describe your experience in words "
            multiline={true}
            numberOfLines={4}
            className="border border-gray-300 rounded-2xl my-4 mb-8 p-4 w-full "
            style={{
              verticalAlign: 'top',
            }}
          />
        </View>
        <View className="-mx-4">
          <NavigationButton text="Submit" root="HomeTabs" screen="Home" />
        </View>
      </View>
    </View>
  );
};

export default ReviewSubmitModal;
