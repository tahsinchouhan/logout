import * as React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { SceneMap, TabView } from 'react-native-tab-view';
import HangoutCard from '../../components/Cards/HangoutCard';
const data = [1, 2, 3];

const FirstRoute = () => (
  <View style={[styles.container]}>
    <View className="flex flex-row justify-evenly my-2">
      <Pressable className="bg-black w-[30%] rounded-3xl h-9 flex justify-center items-center">
        <Text className="text-white text-[15px]">Upcoming</Text>
      </Pressable>
      <Pressable className="border-black border w-[30%] rounded-3xl h-9 flex justify-center items-center">
        <Text className="text-black text-[15px]">Draft</Text>
      </Pressable>
      <Pressable className="border-black border w-[30%] rounded-3xl h-9 flex justify-center items-center">
        <Text className="text-black text-[15px]">Past</Text>
      </Pressable>
    </View>
    <View className="h-full flex items-center">
      <Image
        className=" w-52 h-auto rounded-full mt-36"
        source={require('../../assets/hangoutcalander.png')}
      />
      <View>
        <Text className="text-2xl font-bold text-black mt-6 text-center">
          No Upcoming Event
        </Text>
        <Text className="text-[#747688] text-base text-center">
          Lorem ipsum dolor sit amet, consectetur
        </Text>
      </View>
    </View>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container]}>
    <View className="flex flex-row justify-evenly my-2">
      <Pressable className="border-black border w-[30%] rounded-3xl h-9 flex justify-center items-center">
        <Text className="text-black text-[15px]"> Upcoming</Text>
      </Pressable>
      <Pressable className="bg-black w-[30%] rounded-3xl h-9 flex justify-center items-center">
        <Text className="text-white text-[15px]">Saved</Text>
      </Pressable>
      <Pressable className="border-black border w-[30%] rounded-3xl h-9 flex justify-center items-center">
        <Text className="text-black text-[15px]">Past</Text>
      </Pressable>
    </View>
    <View className="px-4 pt-8">
      <FlatList
        data={data}
        renderItem={() => <HangoutCard />}
        keyExtractor={item => item.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
);

export default class MyHangoutsScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Host'},
      {key: 'second', title: 'Participants'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View className="bg-white">
        <View>
          <Text className="text-22px font-bold text-black mt-5 ml-2">
            My hangouts
          </Text>
        </View>
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
    backgroundColor: 'white',

  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
