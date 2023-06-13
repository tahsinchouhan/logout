import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import React, {useState} from 'react';
import {Image, Modal, Pressable, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GestureRecognizer from 'react-native-swipe-gestures';
import {AttandanceSVG, PenSVG, ProfileBannerSVG} from '../../assets/Icons';
import {Avatars} from '../../components/Avatars';
import UserProfileDetails from '../../components/UserProfile/UserProfileDetails';
import UserRatingDrawer from '../../components/UserProfile/UserRatingDrawer';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const userImages = [
    require('../../assets/images/user1.png'),
    require('../../assets/images/user2.png'),
    require('../../assets/images/user3.png'),
    require('../../assets/images/user4.png'),
  ];
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [userId, setUserId] = useState('' as any);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const getUserId = async () => {
    const Id = await AsyncStorage.getItem('userId');
    setUserId(Id);
    return Id;
  };

  React.useEffect(() => {
    getUserId();
  }, []);

  const {isLoading, error, data} = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      axios
        .get(
          `https://logout-idnd.onrender.com/profile/{userID}?userId=${userId}`,
        )
        .then(res => res.data),
    enabled: !!userId,
  });

  if (isLoading) {
    return (
      <View className="h-screen w-screen flex items-center justify-center">
        <Text className="text-xl font-semibold">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const {response} = data;
  const {generalDetails} = response;

  // console.log('response', response);

  return (
    <View>
      <ScrollView className="h-full relative">
        <View>
          <View className="relative">
            <View className="h-64 w-full hidden">
              <Image
                source={require('../../assets/images/event.jpeg')}
                className="w-full h-full"
              />
            </View>
            <View className="h-64 w-full bg-[#F5F5F5] flex items-center flex-row space-x-2 justify-center border border-[#E5E5E5]">
              <ProfileBannerSVG />
              <Text className=" text-primarygray">
                Add a banner to {'\n'} your profile
              </Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate('EditProfileScreen', {
                  userId: userId,
                  userData: response,
                });
              }}
              className="flex flex-row space-x-2 items-center absolute top-5 right-5">
              <View>
                <PenSVG fill={'#2F80ED'} />
              </View>
              <Text className="text-[#2F80ED] font-bold">Edit Profile</Text>
            </Pressable>
          </View>

          <View>
            <View className="bg-white p-4">
              <View className="flex flex-row items-center space-x-2">
                <Text className="text-xl font-bold text-black mb-2">
                  {generalDetails?.firstName} {generalDetails?.lastName}
                </Text>
                <View className="bg-gray-200"></View>
              </View>
              <Text className="text-xs text-black/60 mb-3">
                @{response?.username}
              </Text>

              <Text className="text-primarygray text-center text-base w-[80%] mx-auto py-4">
                No matter Wherever you go, remember to go with all your heart.
              </Text>
              <View>
                <Text className="text-black text-xs text-center">
                  {generalDetails?.firstName} you are Just two steps away from
                  legacy! 🎉
                </Text>
                <View className="w-[90%] mx-auto rounded-[100px] bg-gray-300 h-6 my-2">
                  <LinearGradient
                    colors={['#7CCFFD', '#3977FF']}
                    className="w-[60%] rounded-[100px] h-full px-2"></LinearGradient>
                </View>
                <View className="flex flex-row justify-between w-[90%] mx-auto">
                  <Text>Step 2/3</Text>
                  <Text>Verify your identity</Text>
                </View>
              </View>

              <View className="flex flex-row justify-evenly mt-8">
                <Pressable
                  onPress={handleOpenBottomSheet}
                  className="w-[31%] px-1 flex items-center justify-center my-4">
                  <Text className="text-black text-xs font-semibold">
                    Host rating
                  </Text>
                  <View className="flex flex-row justify-center items-center space-x-2 mt-2">
                    <Image
                      source={require('../../assets/images/star.png')}
                      className="w-4 h-4"
                    />
                    <Text className="text-black text-sm font-semibold">
                      4.0
                    </Text>
                  </View>
                </Pressable>
                <View className="w-[33%] border-l  border-gray-300 px-1 border-r flex items-center justify-center my-4">
                  <Text className="text-black text-xs font-semibold">
                    Participant rating
                  </Text>
                  <View className="flex flex-row justify-center items-center space-x-2 mt-2">
                    <Image
                      source={require('../../assets/images/star.png')}
                      className="w-4 h-4"
                    />
                    <Text className="text-black text-sm font-semibold">
                      6.0
                    </Text>
                  </View>
                </View>
                <View className="w-[31%] px-1  flex items-center justify-center my-4">
                  <Text className="text-black text-xs font-semibold">
                    Attendence score
                  </Text>
                  <View className="flex flex-row justify-center items-center space-x-2 mt-2">
                    <AttandanceSVG />
                    <Text className="text-black text-sm font-semibold">
                      75%
                    </Text>
                  </View>
                </View>
              </View>

              <View>
                <View className="flex-row items-center justify-center my-4 space-x-2">
                  <Avatars users={userImages} size={35} />
                  <Text className="font-medium text-[#2F80ED]">98 Friends</Text>
                </View>
              </View>
            </View>
            <View className="bg-[#f5f5f5] h-full min-h-screen">
              <UserProfileDetails />
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <GestureRecognizer
          style={{
            flex: isBottomSheetOpen ? 1 : 0,
          }}
          onSwipeDown={() => {
            setIsBottomSheetOpen(false);
          }}
          className="">
          <Modal
            animationType="slide"
            transparent={true}
            visible={isBottomSheetOpen}
            onRequestClose={handleCloseBottomSheet}>
            <UserRatingDrawer setIsBottomSheetOpen={setIsBottomSheetOpen} />
          </Modal>
        </GestureRecognizer>
      </View>
    </View>
  );
};

export default UserProfileScreen;
