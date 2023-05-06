import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { SceneMap, TabView } from 'react-native-tab-view';
import { AddFriendSVG } from '../../assets/Icons';
import FriendRequestCard from '../../components/FriendsScreen/FriendRequestCard';
import FriendSpaceCard from '../../components/FriendsScreen/FriendSpaceCard';
const data = [1, 2, 3];

const FirstRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <View className="flex flex-row my-3 px-4">
        <Text>3 new messages</Text>
      </View>
      <ScrollView>
        <View className=" flex items-center px-4">
          <FriendSpaceCard
            image={require('../../assets/images/user1.png')}
            name="Peter Theil"
            text="Pensilvalia, California"
            rating="4.3"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user2.png')}
            name="Samson Taylor"
            text="Huston, Jamaica"
            rating="3.9"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user3.png')}
            name="Jena Ortega"
            text="Ivy, California"
            rating="4.5"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user1.png')}
            name="Peter Theil"
            text="Pensilvalia, California"
            rating="4.3"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user2.png')}
            name="Samson Taylor"
            text="Huston, Jamaica"
            rating="3.9"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user3.png')}
            name="Jena Ortega"
            text="Ivy, California"
            rating="4.5"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user1.png')}
            name="Peter Theil"
            text="Pensilvalia, California"
            rating="4.3"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user2.png')}
            name="Samson Taylor"
            text="Huston, Jamaica"
            rating="3.9"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user3.png')}
            name="Jena Ortega"
            text="Ivy, California"
            rating="4.5"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user1.png')}
            name="Peter Theil"
            text="Pensilvalia, California"
            rating="4.3"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user2.png')}
            name="Samson Taylor"
            text="Huston, Jamaica"
            rating="3.9"
          />
          <FriendSpaceCard
            image={require('../../assets/images/user3.png')}
            name="Jena Ortega"
            text="Ivy, California"
            rating="4.5"
          />
        </View>
      </ScrollView>
      <View className="absolute bottom-0 bg-[#F5F5F5] w-full h-28 flex flex-row items-center">
        <View className="w-1/2 ">
          <Pressable
            onPress={() =>
              navigation.navigate('DashboardScreens', {
                screen: 'AddFriendScreen',
              })
            }>
            <View className="bg-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto">
              <AddFriendSVG fill="#fff" />
              <Text className="text-white font-bold text-sm ml-2">
                Add friends
              </Text>
            </View>
          </Pressable>
        </View>
        <View className="w-1/2 ">
          <Pressable
          // onPress={() => navigation.navigate(root, {screen: screen})}
          >
            <View className="bg-[#F5F5F5] border border-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto">
              <AddFriendSVG fill="#000" />
              <Text className="text-black font-bold text-sm ml-2">
                Invite friends
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const SecondRoute = () => (
  <View style={[styles.container]}>
    <View className="flex flex-row  my-2 px-4">
      <Text>2 new messages</Text>
    </View>
    <ScrollView>
      <View className=" flex items-center px-4">
        <FriendRequestCard
          image={require('../../assets/images/user1.png')}
          name="Peter Theil"
          text="Pensilvalia, California"
          rating="4.3"
        />
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
    </ScrollView>
    <View className="absolute bottom-0 bg-[#F5F5F5] w-full h-28 flex flex-row items-center">
      <View className="w-1/2 ">
        <Pressable
        // onPress={() => navigation.navigate(root, {screen: screen})}
        >
          <View className="bg-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto">
            <AddFriendSVG fill="#fff" />
            <Text className="text-white font-bold text-sm ml-2">
              Add friends
            </Text>
          </View>
        </Pressable>
      </View>
      <View className="w-1/2 ">
        <Pressable
        // onPress={() => navigation.navigate(root, {screen: screen})}
        >
          <View className="bg-[#F5F5F5] border border-black rounded-3xl flex flex-row justify-center items-center w-[90%] h-12 mx-auto">
            <AddFriendSVG fill="#000" />
            <Text className="text-black font-bold text-sm ml-2">
              Invite friends
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  </View>
);

export default class FriendsScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Friends space'},
      {key: 'second', title: 'Requests'},
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
    first: FirstRoute,
    second: SecondRoute,
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
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0,
  },
});
