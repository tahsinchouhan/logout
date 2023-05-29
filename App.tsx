/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Toast from 'react-native-toast-message';
import TabBar from './app/components/tabBar';
import MessagesScreen from './app/screens/ChatScreens/MessagesScreen';
import AddBankAccountScreen from './app/screens/CreateHangoutScreen/AddBankAccountScreen';
import CreateCasualHangout from './app/screens/CreateHangoutScreen/CreateCasualHangout';
import CreateCasualHangoutSecond from './app/screens/CreateHangoutScreen/CreateCasualHangoutSecond';
import HangoutLocation from './app/screens/CreateHangoutScreen/HangoutLocation';
import ProfessionalHangoutFifthScreen from './app/screens/CreateHangoutScreen/ProfessionalHangoutFifthScreen';
import ProfessionalHangoutFirstScreen from './app/screens/CreateHangoutScreen/ProfessionalHangoutFirstScreen';
import ProfessionalHangoutFourthScreen from './app/screens/CreateHangoutScreen/ProfessionalHangoutFourthScreen';
import ProfessionalHangoutSecondScreen from './app/screens/CreateHangoutScreen/ProfessionalHangoutSecondScreen';
import ProfessionalHangoutThirdScreen from './app/screens/CreateHangoutScreen/ProfessionalHangoutThirdScreen';
import AboutScreen from './app/screens/DashboardScreens/AboutScreen';
import AddFriendScreen from './app/screens/DashboardScreens/AddFriendScreen';
import FaqScreen from './app/screens/DashboardScreens/FaqScreen';
import FriendsScreen from './app/screens/DashboardScreens/FriendsScreen';
import MyDashboard from './app/screens/DashboardScreens/MyDashboard';
import UserHangoutTickets from './app/screens/DashboardScreens/UserHangoutTickets';
import ArrivedEventDetails from './app/screens/EventDetails/ArrivedEventDetails';
import PaidEventDetails from './app/screens/EventDetails/PaidEventDetails';
import SelfEventDetails from './app/screens/EventDetails/SelfEventDetails';
import Home from './app/screens/Home';
import Chats from './app/screens/Home/Chats';
import EventFilterScreen from './app/screens/Home/EventFilterScreen';
import MyHangoutsScreen from './app/screens/Home/MyHangoutsScreen';
import RecommendedHangOutsScreen from './app/screens/Home/RecommendedHangoutScreen';
import EnterOtpScreen from './app/screens/Login/EnterOtpScreen';
import LoginScreen from './app/screens/Login/LoginScreen';
import SendOtpScreen from './app/screens/Login/SendOtpScreen';
import FirstOnBoarding from './app/screens/OnBoardingScreens/FirstOnBoarding';
import FourthOnBoardingScreen from './app/screens/OnBoardingScreens/FourthOnBoardingScreen';
import SecondOnBoarding from './app/screens/OnBoardingScreens/SecondOnBoarding';
import ThirdOnBoarding from './app/screens/OnBoardingScreens/ThirdOnBoarding';
import SignupScreen from './app/screens/Signup/SignupScreen';
import UserIntrestScreen from './app/screens/Signup/UserIntrestScreen';
import EditProfileScreen from './app/screens/UserProfileScreens/EditProfileScreen';
import UserProfileScreen from './app/screens/UserProfileScreens/UserProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SwipeTab = createMaterialTopTabNavigator();

function OnboardingScreens() {
  return (
    <SwipeTab.Navigator
      initialRouteName={'FirstOnBoarding'}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
      tabBar={props => <View />}>
      <SwipeTab.Screen name="FirstOnBoarding" component={FirstOnBoarding} />
      <SwipeTab.Screen name="SecondOnBoarding" component={SecondOnBoarding} />
      <SwipeTab.Screen name="ThirdOnBoarding" component={ThirdOnBoarding} />
      <SwipeTab.Screen
        name="FourthOnBoarding"
        component={FourthOnBoardingScreen}
      />
    </SwipeTab.Navigator>
  );
}
function LoginScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="SendOtpScreen"
        component={SendOtpScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="EnterOtpScreen"
        component={EnterOtpScreen}
      />
    </Stack.Navigator>
  );
}
function SignUpScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: '',
      }}>
      <Stack.Screen name="UserIntrestScreen" component={UserIntrestScreen} />
      <Stack.Screen name="SignUpScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
      initialRouteName={'Home'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyHangoutsScreen" component={MyHangoutsScreen} />
      <Tab.Screen name="Drawer" component={Chats} />
      <Tab.Screen
        options={{
          tabBarStyle: {display: 'none'},
        }}
        name="dashboard"
        component={MyHangoutsScreen}
      />
      <Tab.Screen name="Chats" component={MessagesScreen} />
    </Tab.Navigator>
  );
}
function CreateHangoutScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'ProfessionalHangoutFirstScreen'}>
      <Stack.Screen
        name="CreateCasualHangout"
        component={CreateCasualHangout}
      />
      <Stack.Screen name="HangoutLocation" component={HangoutLocation} />
      <Stack.Screen
        name="CreateCasualHangoutSecond"
        component={CreateCasualHangoutSecond}
      />
      <Stack.Screen
        name="AddBankAccountScreen"
        component={AddBankAccountScreen}
      />
      <Stack.Screen
        name="ProfessionalHangoutFirstScreen"
        component={ProfessionalHangoutFirstScreen}
      />
      <Stack.Screen
        name="ProfessionalHangoutSecondScreen"
        component={ProfessionalHangoutSecondScreen}
      />
      <Stack.Screen
        name="ProfessionalHangoutThirdScreen"
        component={ProfessionalHangoutThirdScreen}
      />
      <Stack.Screen
        name="ProfessionalHangoutFourthScreen"
        component={ProfessionalHangoutFourthScreen}
      />
      <Stack.Screen
        name="ProfessionalHangoutFifthScreen"
        component={ProfessionalHangoutFifthScreen}
      />
      <Stack.Screen
        name="RecommendedHangOutsScreen"
        component={RecommendedHangOutsScreen}
      />
      <Stack.Screen name="EventFilterScreen" component={EventFilterScreen} />
    </Stack.Navigator>
  );
}
function DashboardScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="MyDashboard"
        component={MyDashboard}
        options={{
          headerTitle: 'My Dashboard',
        }}
      />
      <Stack.Screen
        name="UserHangoutTickets"
        component={UserHangoutTickets}
        options={{
          headerTitle: 'My Hangout tickets',
        }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTitle: 'About',
        }}
      />
      <Stack.Screen
        name="FaqScreen"
        component={FaqScreen}
        options={{
          headerTitle: 'FAQ',
        }}
      />
      <Stack.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{
          headerTitle: 'Friends',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="AddFriendScreen"
        component={AddFriendScreen}
        options={{
          headerTitle: 'Add friends',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
function EventDetailsScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FreeEventDetails" component={SelfEventDetails} />
      <Stack.Screen name="PaidEventDetails" component={PaidEventDetails} />
      <Stack.Screen
        name="ArrivedEventDetails"
        component={ArrivedEventDetails}
      />
    </Stack.Navigator>
  );
}
function UserProfileScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerShadowVisible: false,
        }}
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator
            // initialRouteName="UserProfileScreens"
            screenOptions={{
              headerShadowVisible: false,
            }}>
            <Stack.Screen
              name="OnboardingScreens"
              options={{
                headerShown: false,
              }}
              component={OnboardingScreens}
            />
            <Stack.Screen
              name="LoginScreens"
              options={{
                headerShown: false,
              }}
              component={LoginScreens}
            />
            <Stack.Screen
              name="SignUpScreens"
              options={{
                headerShown: false,
              }}
              component={SignUpScreens}
            />
            <Stack.Screen
              name="HomeTabs"
              options={{
                headerShown: false,
              }}
              component={HomeTabs}
            />
            <Stack.Screen
              name="CreateHangoutScreens"
              options={{
                headerShown: false,
              }}
              component={CreateHangoutScreens}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                animation: 'slide_from_right',
              }}
              name="DashboardScreens"
              component={DashboardScreens}
            />
            <Stack.Screen
              name="EventDetailsScreens"
              options={{
                headerShown: false,
              }}
              component={EventDetailsScreens}
            />
            <Stack.Screen
              name="UserProfileScreens"
              options={{
                headerShown: false,
              }}
              component={UserProfileScreens}
            />
          </Stack.Navigator>
          <Toast />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;



// ./gradlew assembleRelease