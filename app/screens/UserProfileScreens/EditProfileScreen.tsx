import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import AboutTab from '../../components/EditProfile/AboutTab';
import CareerTab from '../../components/EditProfile/CareerTab';
import CantactsTab from '../../components/EditProfile/ContactsTab';
import EducationTab from '../../components/EditProfile/EducationTab';
import NGOTab from '../../components/EditProfile/NgoTab';
import SocialMediaTab from '../../components/EditProfile/SocialMediaTab';

const FirstRoute = () => {
  const route = useRoute();
  return (
    <View style={[styles.container]}>
      <AboutTab userData={route.params?.userData} />
    </View>
  );
};
const SecondRoute = () => {
  const route = useRoute();
  return (
    <View style={[styles.container]}>
      <CareerTab userData={route.params?.userData} />
    </View>
  );
};

const ThirdRoute = () => {
  const route = useRoute();
  return (
    <View style={[styles.container]}>
      <EducationTab userData={route.params?.userData} />
    </View>
  );
};
const FourthRoute = () => (
  <View style={[styles.container]}>
    <CantactsTab />
  </View>
);

const FifthRoute = () => (
  <View style={[styles.container]}>
    <SocialMediaTab />
  </View>
);
const SeventhRoute = () => (
  <View style={[styles.container]}>
    <NGOTab />
  </View>
);

export default class EditProfileScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'About'},
      {key: 'second', title: 'Career'},
      {key: 'third', title: 'Education'},
      {key: 'fourth', title: 'Add Contacts'},
      {key: 'fifth', title: 'Social Media'},
      {key: 'sixth', title: 'Personal Preferences'},
      {key: 'seventh', title: 'NGO Details'},
      {key: 'eighth', title: 'Celebrity Verification'},
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
                  className=" w-full text-center font-bold pb-2 text-black"
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
    fifth: FifthRoute,
    sixth: SeventhRoute,
    seventh: SeventhRoute,
    eighth: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        // renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'white'}}
            tabStyle={{width: 120, paddingBottom: 0, marginBottom: 0}}
            scrollEnabled={true}
            style={{
              backgroundColor: 'white',
            }}
            renderLabel={({route, focused}) => (
              <Text
                style={{
                  color: focused ? 'black' : 'grey',
                  width: 120,
                  fontWeight: 'bold',
                  borderBottomColor: 'black',
                  borderBottomWidth: focused ? 3 : 0,
                  paddingBottom: 24,
                  marginBottom: 0,
                  textAlign: 'center',
                }}>
                {route.title}
              </Text>
            )}
          />
        )}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: 100,
        }}
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
