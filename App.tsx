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
import React from 'react';
import { View } from 'react-native';
import TabBar from './app/components/tabBar';
import Home from './app/screens/Home';
import Chats from './app/screens/Home/Chats';
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
      <Stack.Screen name="SignUpScreen" component={SignupScreen} />
      <Stack.Screen name="UserIntrestScreen" component={UserIntrestScreen} />
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
      tabBar={props => <TabBar {...props} />}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="RecommendedHangOutsScreen"
        component={RecommendedHangOutsScreen}
      />
      <Tab.Screen name="MyHangoutsScreen" component={MyHangoutsScreen} />
      <Tab.Screen name="Chats" component={Chats} />
      {/* <Tab.Screen name="CreateHangoutScreen" component={CreateHangoutScreen} /> */}

    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
