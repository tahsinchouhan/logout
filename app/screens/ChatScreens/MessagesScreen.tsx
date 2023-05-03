import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Animated from 'react-native-reanimated';
import { SceneMap, TabView } from 'react-native-tab-view';
import { CheckSVG } from '../../assets/Icons';
import ChatBox from '../../components/ChatScreen/ChatBox';

const data = [1, 2, 3];

const FirstRoute = () => (
  <View style={[styles.container]}>
    <View className="flex flex-row  my-4">
      <Text className="text-primarygray text-sm font-normal">
        3 new messages
      </Text>
    </View>
    <View className="h-full flex items-center">
      <ChatBox
        image={require('../../assets/images/user1.png')}
        name="Peter Theil"
        text="2 new messages"
        time="12:34PM"
      />
      <ChatBox
        image={require('../../assets/images/user2.png')}
        name="Samson Taylor"
        text="3 new messages"
        time="02:34PM"
      />
      <ChatBox
        image={require('../../assets/images/user3.png')}
        name="Jena Ortega"
        text="5 new messages"
        time="01:10AM"
      />
    </View>
  </View>
);
const SecondRoute = () => (
    <View style={[styles.container]}>
    <View className="flex flex-row  my-4">
      <Text className="text-primarygray text-sm font-normal">
        2 new messages
      </Text>
    </View>
    <View className="h-full flex items-center">
      <ChatBox
        image={require('../../assets/images/user4.png')}
        name="Bob’s Party House"
        text="2 new messages"
        time="12:34PM"
      />
      <ChatBox
        image={require('../../assets/images/user3.png')}
        name="Club Party"
        text="5 new messages"
        time="01:10AM"
      />
    </View>
  </View>
);

export default class MessagesScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Host space'},
      {key: 'second', title: 'Friends'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderTabBar = props => {
    const navigation = useNavigation();

    return (
      <View className="bg-white">
        <View>
          <View className="flex-row items-center  py-6 mb-2">
            <View className="mx-3">
              <Pressable onPress={() => navigation.goBack()}>
                <CheckSVG />
              </Pressable>
            </View>
            <Text className="text-[22px] font-bold text-black">Messages</Text>
          </View>
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
    paddingHorizontal: 20,
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
