import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import NavigationService, { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import OnboardingScreen from 'app/screens/OnboardingScreen';


import Home from 'app/screens/Home';
import DiscoverHangouts from 'app/screens/Home/DiscoverHangouts';
import MyHangoutsScreen from 'app/screens/Home/MyHangout';


import HangoutDetails from 'app/screens/ViewHangouts';

import ForgotPassword from 'app/screens/ForgotPassword';
import NotificationScreen from 'app/screens/Notification';
import OtpScreen from 'app/screens/OtpValidation';
import Profile from 'app/screens/Profile';
import MyInterests from 'app/screens/Profile/MyInterests';
import MyInterestsSubCategory from 'app/screens/Profile/MyInterests/MyInterestsSubCategory';
import MyReviews from 'app/screens/Profile/MyReviews';
import ProfileHangouts from 'app/screens/Profile/ProfileHangouts';
import PublicProfile from 'app/screens/Profile/PublicProfile';
import AboutLogout from 'app/screens/SideMenuOptions/AboutLogout';
import FAQ from 'app/screens/SideMenuOptions/FAQ';
import Feedback from 'app/screens/SideMenuOptions/Feedback';
import Friends from 'app/screens/SideMenuOptions/Friends';
import HelpAndSupport from 'app/screens/SideMenuOptions/HelpAndSupport';
import RaiseATicket from 'app/screens/SideMenuOptions/RaiseATicket';
import SettingsAndPrivacy from 'app/screens/SideMenuOptions/SettingsAndPrivacy';
import Ticket from 'app/screens/SideMenuOptions/Ticket';
import UserDetails from 'app/screens/Signup';
import UserInterestScreen from 'app/screens/Signup/UserInterest';
import UserNameScreen from 'app/screens/Signup/UserName';

import CreateHangout from 'app/screens/CreateHangouts';
import CreateHangoutOne from 'app/screens/CreateHangouts/CreateHangoutOne';
import CreateHangoutThree from 'app/screens/CreateHangouts/CreateHangoutThree';
import CreateHangoutTwo from 'app/screens/CreateHangouts/CreateHangoutTwo';
import HangoutLocationScreen from 'app/screens/CreateHangouts/HangoutLocation';
import ProfessionalHangouts from 'app/screens/CreateHangouts/ProfessionalHangouts';
import TermsAndConditionsScreen from 'app/screens/CreateHangouts/TermsAndConditions';

import Messaging from 'app/screens/Messaging';
import ChatScreen from 'app/screens/Messaging/ChatScreen';

import SearchScreen from 'app/screens/SearchScreen';

import { ILoginState } from 'app/models/reducers/login';
import LoginScreen from 'app/screens/Login/LoginScreen';
import LoginWithOTPScreen from 'app/screens/Login/LoginWithOTPScreen';
import AddFriends from 'app/screens/SideMenuOptions/Friends/AddFriends';
import SideNavBarComponent from 'app/screens/SideMenuOptions/SideNavBarComponent';
import { StatusBar, Text, View } from 'react-native';
import { Colors, Scale } from '../utils';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const NotificationStack = createStackNavigator();
const HangoutStack = createStackNavigator();
const MessagingStack = createStackNavigator();
const SearchStack = createStackNavigator();

const homeOptions = {
  headerShown: false,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const tabOptions = {
  headerShown: false,
} as Record<string, unknown>;

function Header() {
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Navigate to Profile  */}
        <Pressable onPress={() => NavigationService.navigate('Profile')}>
          <FontAwesome name='user-circle' size={30} />
        </Pressable>
        <Text style={{ color: Colors.PRIMARY_BLUE, fontWeight: 'bold', fontSize: Scale(20), marginLeft: Scale(5) }}>Logout</Text>
      </View>
      <Pressable onPress={() => setOpenModal(true)}>
        <FontAwesome name='bars' size={30} />
      </Pressable>

      {/* The following component is for the SideNavbar Opering Modal Popup Component */}
      <SideNavBarComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </View>
  );
}

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: Colors.PRIMARY_RED,
      tabBarInactiveTintColor: Colors.PRIMARY_DARK,

    })}>
      <Tab.Screen
        name="HomeStack"
        component={LoggedInNavigator}
        options={{
          ...tabOptions,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Octicons
              name="home"
              color={color}
              size={focused ? 40 : 30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{
          ...tabOptions,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Octicons
              name="search"
              color={color}
              size={focused ? 40 : 30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddStack"
        component={HangoutStackScreen}
        options={{
          ...tabOptions,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="pluscircle"
              color={color}
              size={focused ? 40 : 30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MessagingStack"
        component={MessagingStackScreen}
        options={{
          ...tabOptions,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="message1"
              color={color}
              size={focused ? 40 : 30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStackScreen}
        options={{
          ...tabOptions,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="ios-notifications-sharp"
              color={color}
              size={focused ? 40 : 30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTabs };

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="LoginWithOTPScreen"
        component={LoginWithOTPScreen}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="UserNameScreen"
        component={UserNameScreen}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserInterestScreen"
        component={UserInterestScreen}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen name="Home" component={Home} options={homeOptions} />
    <Stack.Screen name="Profile" component={Profile} options={homeOptions} />
    <Stack.Screen name="PublicProfile" component={PublicProfile} options={homeOptions} />
    <Stack.Screen name="MyReviews" component={MyReviews} options={homeOptions} />
    <Stack.Screen name="ProfileHangouts" component={ProfileHangouts} options={homeOptions} />
    <Stack.Screen name="MyInterests" component={MyInterests} options={homeOptions} />
    <Stack.Screen name="MyInterestsSubCategory" component={MyInterestsSubCategory} options={homeOptions} />
    <Stack.Screen name="Ticket" component={Ticket} options={homeOptions} />
    <Stack.Screen name="Friends" component={Friends} options={homeOptions} />
    <Stack.Screen name="AddFriends" component={AddFriends} options={homeOptions} />
    <Stack.Screen name="SettingsAndPrivacy" component={SettingsAndPrivacy} options={homeOptions} />
    <Stack.Screen name="AboutLogout" component={AboutLogout} options={homeOptions} />
    <Stack.Screen name="FAQ" component={FAQ} options={homeOptions} />
    <Stack.Screen name="Feedback" component={Feedback} options={homeOptions} />
    <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} options={homeOptions} />
    <Stack.Screen name="RaiseATicket" component={RaiseATicket} options={homeOptions} />
    <Stack.Screen name="DiscoverHangouts" component={DiscoverHangouts} options={homeOptions} />
    <Stack.Screen name="MyHangoutsScreen" component={MyHangoutsScreen} options={homeOptions} />
    <Stack.Screen name="HangoutDetails" component={HangoutDetails} options={homeOptions} />
  </LoggedInStack.Navigator>
);

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={tabOptions as Record<string, unknown>}
      />
    </SearchStack.Navigator>
  );
}


function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={tabOptions as Record<string, unknown>}
      />
    </NotificationStack.Navigator>
  );
}

function MessagingStackScreen() {
  return (
    <MessagingStack.Navigator>
      <MessagingStack.Screen
        name="Messaging"
        component={Messaging}
        options={tabOptions as Record<string, unknown>}
      />
      <MessagingStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={tabOptions as Record<string, unknown>}
      />
    </MessagingStack.Navigator>
  );
}

function HangoutStackScreen() {
  return (
    <HangoutStack.Navigator>
      <HangoutStack.Screen
        name="CreateHangout"
        component={CreateHangout}
        options={tabOptions as Record<string, unknown>}
      />
      <HangoutStack.Screen
        name="ProfessionalHangouts"
        component={ProfessionalHangouts}
        options={tabOptions as Record<string, unknown>}
      />
      <HangoutStack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
        options={tabOptions as Record<string, unknown>}
      />
      <HangoutStack.Screen
        name="CreateHangoutOne"
        component={CreateHangoutOne}
        options={tabOptions as Record<string, unknown>}
      />
      <HangoutStack.Screen
        name="CreateHangoutTwo"
        component={CreateHangoutTwo}
        options={tabOptions as Record<string, unknown>}
      />
      <HangoutStack.Screen
        name="CreateHangoutThree"
        component={CreateHangoutThree}
        options={tabOptions as Record<string, unknown>}
      />
      <HangoutStack.Screen
        name="HangoutLocationScreen"
        component={HangoutLocationScreen}
        options={tabOptions as Record<string, unknown>}
      />
    </HangoutStack.Navigator>
  );
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  // const isLoggedIn = useSelector(
  //   (state: IState) => state.loginReducer.isLoggedIn,
  // );
const isLoggedIn = true;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar backgroundColor={Colors.PRIMARY_GRAY} animated barStyle='light-content' />
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{ headerTitle: (props) => <Header /> }}
          />
        ) : (
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});