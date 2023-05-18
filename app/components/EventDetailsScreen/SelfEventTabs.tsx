import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {SceneMap, TabView} from 'react-native-tab-view';
import {AcceptRequestSVG, RejectRequestSVG} from '../../assets/Icons';
import FriendRequestCard from '../FriendsScreen/FriendRequestCard';
import CoupleRequestCard from './CoupleRequestCard';
import EventDetailsAbout from './EventDetailsAbout';
import EventPeopleCard from './EventPeopleCard';

const FirstRoute = () => (
  <View style={[styles.container]}>
    <EventDetailsAbout />
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container]}>
    <View className="">
      <View className="flex flex-row justify-evenly my-6">
        <Pressable className="bg-black w-[30%] rounded-3xl h-9 flex justify-center items-center">
          <Text className="text-white text-[15px]">Requested</Text>
        </Pressable>
        <Pressable className="border-black border w-[30%] rounded-3xl h-9 flex justify-center items-center">
          <Text className="text-black text-[15px]">Approved</Text>
        </Pressable>
        <Pressable className="border-black border w-[30%] rounded-3xl h-9 flex justify-center items-center">
          <Text className="text-black text-[15px]">Paid</Text>
        </Pressable>
      </View>
      <View className=" flex items-center px-4">
        <FriendRequestCard
          image={require('../../assets/images/user1.png')}
          name="Peter Theil"
          text="Pensilvalia, California"
          rating="4.3"
        />
        <View className="border rounded-2xl mx-4 py-4 bg-[#E7E7E7] my-4">
          <Text className="font-bold text-[#777B7E] px-4 pb-2">Couple</Text>
          <CoupleRequestCard
            image={require('../../assets/images/user2.png')}
            name="Samson Taylor"
            text="Huston, Jamaica"
            rating="3.9"
          />
          <CoupleRequestCard
            image={require('../../assets/images/user3.png')}
            name="Jena Ortega"
            text="Ivy, California"
            rating="4.5"
          />
          <View className="flex flex-row items-center justify-end w-full space-x-4">
            <View>
              <RejectRequestSVG />
            </View>
            <View>
              <AcceptRequestSVG />
            </View>
          </View>
        </View>
        <FriendRequestCard
          image={require('../../assets/images/user2.png')}
          name="Samson Taylor"
          text="Huston, Jamaica"
          rating="3.9"
        />
        <FriendRequestCard
          image={require('../../assets/images/user3.png')}
          name="Jena Ortega"
          text="Ivy, California"
          rating="4.5"
        />
      </View>
    </View>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.container]}>
    <View className="p-4">
      <Text className="text-black font-bold text-lg">Payout summary</Text>
      <View className="flex flex-row justify-evenly my-2">
        <View className="my-4 border rounded-2xl border-gray-300 p-4 bg-white">
          <Text className="text-[#777B7E] font-bold mb-4">
            Estimated revenue
          </Text>
          <View className="flex flex-row justify-between mb-4">
            <View className="w-[32%]">
              <Text className="text-base text-black">Individual</Text>
            </View>
            <View className="flex flex-row space-x-2 w-[32%] justify-center">
              <Text className="text-black text-base">10</Text>
            </View>
            <View className="w-[32%] flex items-end">
              <View className="px-5 bg-[#E9F1FF] rounded-2xl py-1">
                <Text className="text-base text-black font-semibold">
                  ₹3000
                </Text>
                {/* <TextInput
                    placeholder="$300"
                    onChangeText={text => setIndividualPrice(Number(text))}
                  /> */}
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-between mb-4">
            <View className="w-[32%]">
              <Text className="text-base text-black">Couple</Text>
            </View>
            <View className="flex flex-row space-x-2 w-[32%] justify-center">
              <Text className="text-black text-base">15</Text>
            </View>
            <View className="w-[32%] flex items-end">
              <View className="px-5 bg-[#E9F1FF] rounded-2xl py-1">
                <Text className="text-base text-black font-semibold">
                  ₹3000
                </Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-between mb-4 pt-4 border-t border-gray-300">
            <View className="">
              <Text className="text-base text-black">Commission charges</Text>
            </View>
            <View className=" flex items-end">
              <View className="px-5 bg-[#E9F1FF] rounded-2xl py-1">
                <Text className="text-base text-black font-semibold">
                  ₹6,000
                </Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-between mb-4 pt-4 border-t border-gray-300">
            <View className="">
              <Text className="text-base text-black">Taxes</Text>
            </View>
            <View className=" flex items-end">
              <View className="px-5 bg-[#E9F1FF] rounded-2xl py-1">
                <Text className="text-base text-black font-semibold">
                  ₹6,000
                </Text>
              </View>
            </View>
          </View>
          <View className="border-t pt-2 mt-2 border-gray-300 flex flex-row justify-between">
            <View>
              <Text className="text-base font-bold text-black">
                Estimated revenue
              </Text>
              <Text className="text-xs text-[#777B7E]">
                Excluding commission and charges
              </Text>
            </View>
            <View>
              <View className="px-5 bg-[#B9D4FF] rounded-2xl py-1">
                <Text className="text-base text-black font-semibold">
                  ₹ 12000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="my-4 border rounded-2xl border-gray-300 p-4 bg-white">
        <Text className="text-[#777B7E] font-bold mb-4">Payout status</Text>
        <View className="flex flex-row justify-between mb-4  border-gray-300">
          <View className="">
            <Text className="text-base text-black">Amount</Text>
          </View>
          <View className=" flex items-end">
            <View className="px-5 bg-[#B9D4FF] rounded-2xl py-1">
              <Text className="text-base text-black font-semibold">₹6,000</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-between mb-4 pt-4 border-t border-gray-300">
          <View className="">
            <Text className="text-base text-black">Status</Text>
            <Text className="text-xs text-[#777B7E]">
              Approved on 12/23, 13:43PM
            </Text>
          </View>
          <View className=" flex items-end">
            <View className="px-5 bg-[#F2994A] rounded-2xl py-1">
              <Text className="text-base text-white font-semibold">
                Pending
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-between mb-4 pt-4 border-t border-gray-300">
          <View className="">
            <Text className="text-xs text-[#777B7E]">Paid to</Text>
            <Text className=" text-black py-2">State Bank of India</Text>
            <Text className=" text-black">Acc: XXXXXXX013</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between mb-4 pt-4 border-t border-gray-300">
          <View className="">
            <Text className="text-xs text-[#777B7E]">Refference no.</Text>
            <Text className=" text-black py-2">LKASD12346124</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const FourthRoute = () => (
  <View className="h-full bg-white">
    <View className="flex flex-row m-4 bg-white">
      <Text className="space-x-2">
        <Text className="text-black font-semibold pr-1">24/50 people</Text>
        <Text className="text-black pl-1"> participated in the event</Text>
      </Text>
    </View>
    <View className=" pt-8 px-4">
      <EventPeopleCard
        image={require('../../assets/images/user1.png')}
        name="Peter Theil"
        text="Pensilvalia, California"
        rating="4.3"
      />
      <EventPeopleCard
        image={require('../../assets/images/user2.png')}
        name="Samson Taylor"
        text="Huston, Jamaica"
        rating="3.9"
      />
      <EventPeopleCard
        image={require('../../assets/images/user1.png')}
        name="Peter Theil"
        text="Pensilvalia, California"
        rating="4.3"
      />
      <EventPeopleCard
        image={require('../../assets/images/user2.png')}
        name="Samson Taylor"
        text="Huston, Jamaica"
        rating="3.9"
      />
    </View>
  </View>
);

export default class SelfEventTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'About'},
      {key: 'second', title: 'Participants'},
      {key: 'third', title: 'Revenue'},
      {key: 'fourth', title: 'Update'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View className="bg-white">
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            // if selected tab, color is black, else color is grey
            const color = i === props.navigationState.index ? 'black' : 'grey';
            const borderBottomWidth = i === props.navigationState.index ? 3 : 0;

            return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => this.setState({index: i})}>
                <Animated.Text
                  className=" w-full text-center font-bold pb-2"
                  style={{
                    color,
                    borderBottomWidth,
                    borderBottomColor: 'black',
                  }}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    first: SecondRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
});
