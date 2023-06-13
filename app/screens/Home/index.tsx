import React, {useState} from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  BellSVG,
  FoodSVG,
  HomeSearchSVG,
  MusicSVG,
  PaintSVG,
  SearchSVG,
  SportsSVG,
} from '../../assets/Icons';
import InvitationCard from '../../components/Cards/InvitationCard';
import IntrestCard from '../../components/HomeScreen/IntrestCard';
import NearbyHangOuts from './NearbyHangouts';
import RecommendedHangOutsSection from './RecommendedHangoutsSection';
const Home: React.FC = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const IntrestData = [
    {
      id: 1,
      name: 'Sports',
      icon: <SportsSVG />,
    },
    {
      id: 2,
      name: 'Music',
      icon: <MusicSVG />,
    },
    {
      id: 3,
      name: 'Food',
      icon: <FoodSVG />,
    },
    {
      id: 4,
      name: 'Painting',
      icon: <PaintSVG />,
    },
    {
      id: 5,
      name: 'Sports',
      icon: <SportsSVG />,
    },
  ];
  // const {isLoading, error, data, isFetching} = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () =>
  //     axios.get('https://reqres.in/api/users').then(res => res.data),
  // });
  // console.log(isLoading, error, data, isFetching);
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };
  return (
    <SafeAreaView>
      <ScrollView className="">
        <View>
          <ImageBackground
            className="w-full h-[60vh]"
            source={require('../../assets/Home/HomePage.png')}>
            <View className="flex flex-row justify-between px-4 mt-6">
              <Text className="text-white font-bold">User</Text>
              <View className="flex flex-row items-center space-x-4">
                <Pressable
                  onPress={() => {
                    handleOpenBottomSheet();
                  }}>
                  <HomeSearchSVG />
                </Pressable>
                <Pressable
                  onPress={() => {
                    console.log('pressed');
                  }}>
                  <BellSVG />
                </Pressable>
              </View>
            </View>
            <ScrollView horizontal={true}>
              <View className="flex flex-row  px-5 pt-4">
                {IntrestData.map((item, index) => (
                  <IntrestCard item={item} key={index} />
                ))}
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
        <View className="px-5 pb-20">
          <RecommendedHangOutsSection />
          <InvitationCard />
          <NearbyHangOuts />
        </View>
      </ScrollView>
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
          <View className="h-full  bg-gray-900/30 backdrop-brightness-75">
            <View className="bg-white rounded-t-3xl border border-[#E5E5E5] p-5 min-h-[90vh] absolute bottom-0 w-full">
              <View className="flex flex-row justify-between">
                <Text className="font-bold text-lg text-black">
                  Search Here
                </Text>
                <TouchableOpacity onPress={handleCloseBottomSheet} className="">
                  <Text className="text-end">Close</Text>
                </TouchableOpacity>
              </View>
              <View className=" mt-4">
                <View className="border border-gray-400  rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                  <SearchSVG />
                  <TextInput
                    placeholder="Search here"
                    placeholderTextColor="#777B7E"
                    className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
    </SafeAreaView>
  );
};

export default Home;
