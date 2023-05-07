import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SceneMap, TabView } from 'react-native-tab-view';
import UserDetailsAbout from './UserDetailsAbout';
import UserDetailsHangouts from './UserDetailsHangouts';
import UserDetailsReview from './UserDetailsReview';
// import EventPeopleCard from './EventPeopleCard';

const FirstRoute = () => (
  <View style={[styles.container]}>
    <UserDetailsAbout />
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container]}>
    <UserDetailsHangouts />
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.container]}>
    <UserDetailsReview />
  </View>
);

export default class UserProfileDetails extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'About'},
      {key: 'second', title: 'Hangouts'},
      {key: 'third', title: 'Review'},
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
