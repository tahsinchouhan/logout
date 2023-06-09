import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SceneMap, TabView } from 'react-native-tab-view';
import EventDetailsAbout from './EventDetailsAbout';
import EventPeopleCard from './EventPeopleCard';

const FirstRoute = () => (
  <View style={[styles.container]}>
    <EventDetailsAbout />
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container]}>
    <View className="flex flex-row justify-evenly my-2"></View>
    <View className="px-4 pt-8"></View>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.container]}>
    <View className="flex flex-row justify-evenly my-2"></View>
    <View className="px-4 pt-8"></View>
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

export default class EventDetailsTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'About'},
      {key: 'second', title: 'Reviews'},
      {key: 'third', title: 'Updates'},
      {key: 'fourth', title: 'People'},
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
