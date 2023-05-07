import React from 'react';
import { Text, View } from 'react-native';
import { StarSvg } from '../../assets/Icons';
import ProfileReviewCard from './ProfileReviewCard';
const UserDetailsReview = () => {
  return (
    <View className="p-4 ">
      <View className="flex flex-row justify-between">
        <View className="flex items-center w-[48%] justify-center border border-black rounded-[100px] h-9">
          <View className="space-x-2 flex flex-row items-center">
            <Text className=" border-r pr-2 text-black">Participant</Text>
            <View>
              <StarSvg />
            </View>
            <Text className="text-black">4.3</Text>
          </View>
        </View>
        <View className="flex bg-white items-center w-[48%] justify-center border border-black rounded-[100px] h-9">
          <View className="space-x-2 flex flex-row items-center">
            <Text className=" border-r pr-2 text-black">Host</Text>
            <View>
              <StarSvg />
            </View>
            <Text className="text-black">3.6</Text>
          </View>
        </View>
      </View>

      <Text className="py-2">You have 06 ratings as a participant</Text>
      <View>
        <ProfileReviewCard
          category="The Part Hunter!!!"
          name="The act or an instance of giving notice or information Notification of all winners the act or an instance of giving notice or information Notification of all winners."
          rating="4.5"
          participant="Sam Billings"
        />
        <ProfileReviewCard
          category="Best guy!"
          name="The act or an instance of giving notice or information Notification of all winners the act or an instance of giving notice."
          rating="4.3"
          participant="Joseph Xavier"
        />
        <ProfileReviewCard
          category="The Part Hunter!!!"
          name="The act or an instance of giving notice or information Notification of all winners the act or an instance of giving notice or information Notification of all winners."
          rating="4.5"
          participant="Sam Billings"
        />
        <ProfileReviewCard
          category="Best guy!"
          name="The act or an instance of giving notice or information Notification of all winners the act or an instance of giving notice."
          rating="4.3"
          participant="Joseph Xavier"
        />
      </View>
    </View>
  );
};

export default UserDetailsReview;
