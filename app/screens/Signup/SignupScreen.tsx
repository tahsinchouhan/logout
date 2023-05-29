/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {Formik} from 'formik';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

const SignupScreen = () => {
  const navigation = useNavigation();

  interface navigateProps {
    userId: string;
  }

  const navigateTo = async ({userId}: navigateProps) => {
    await AsyncStorage.setItem('userId', userId);
    navigation.navigate('SignUpScreens', {
      screen: 'UserIntrestScreen',
    });
  };

  const mutation = useMutation(async (values: any) => {
    console.log(values);
    const userData = {
      mobileNumber: values.mobileNumber,
      countryName: 'India',
      countryISD: '+91',
      username: values.username,
      generalDetails: {
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
      },
    };
    return axios
      .post('https://logout-idnd.onrender.com/user/sign-up', userData)
      .then(res => {
        console.log(res.data);
        Toast.show({
          type: 'success',
          text1: 'Welcome',
          text2: 'You have successfully signed up',
          visibilityTime: 2000,
        });

        navigateTo({userId: res?.data?.response?._id});
        return res.data.JSON();
      })
      .catch(err => {
        console.log(err);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err?.response?.message || 'Something went wrong',
          visibilityTime: 2000,
        });

        return err;
      });
  });

  const handleSubmit = (values: any) => {
    mutation.mutate(values);
  };

  const Validate = (values: any) => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length < 3) {
      errors.firstName = 'Must be 3 characters or more';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length < 3) {
      errors.lastName = 'Must be 3 characters or more';
    }

    if (!values.mobileNumber) {
      errors.mobileNumber = 'Required';
    } else if (values.mobileNumber.length < 10) {
      errors.mobileNumber = 'Must be 10 characters or more';
    }

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 3) {
      errors.username = 'Must be 3 characters or more';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be 6 characters or more';
    }

    return errors;
  };

  // console.log('signup data', mutation.data, mutation.error, mutation.isLoading);
  return (
    <View className="bg-white h-full px-5">
      <View>
        <Text className="text-black font-bold text-[22px] mb-2">
          Setup your profile{' '}
        </Text>
        <Text className="text-[#595959] font-normal text-base mb-6">
          Create an account so you can manage your account hassle free
        </Text>
      </View>
      <Formik
        validate={Validate}
        initialValues={{
          firstName: '',
          lastName: '',
          mobileNumber: '',
          username: '',
          password: '',
        }}
        onSubmit={values => handleSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, errors, touched}) => (
          <View className="my-5">
            <View className="flex flex-row justify-between">
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                className="h-12 rounded-[100px] border  px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                style={{
                  borderColor:
                    errors.firstName && touched.firstName ? 'red' : '#E5E5E5',
                }}
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('lastName')}
                className="h-12 rounded-[100px] border  px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                onBlur={handleBlur('lastName')}
                style={{
                  borderColor:
                    errors.lastName && touched.lastName ? 'red' : '#E5E5E5',
                }}
              />
            </View>

            <View
              style={{
                borderColor:
                  errors.mobileNumber && touched.mobileNumber
                    ? 'red'
                    : '#E5E5E5',
              }}
              className="border  rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
              <Text className="text-black font-medium text-base">+91</Text>
              <Text className="text-gray-400 pl-1 text-xl">|</Text>
              <TextInput
                keyboardType="numeric"
                maxLength={10}
                onChangeText={handleChange('mobileNumber')}
                onBlur={handleBlur('mobileNumber')}
                dataDetectorTypes="phoneNumber"
                placeholder="Enter your mobile number"
                placeholderTextColor="#777B7E"
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
              />
            </View>
            <View
              style={{
                borderColor:
                  errors.username && touched.username ? 'red' : '#E5E5E5',
              }}
              className="border  rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
              <Text className="text-black font-medium text-base">@</Text>
              <Text className="text-gray-400 pl-1 text-xl">|</Text>
              <TextInput
                placeholder="Select prefered username"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
              />
            </View>

            <View
              style={{
                borderColor:
                  errors.password && touched.password ? 'red' : '#E5E5E5',
              }}
              className="flex flex-row rounded-[100px] border  px-4 items-center h-12 mb-4">
              <TextInput
                placeholder="Password"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                className="h-12  text-black flex flex-row items-center text-base w-[90%]"
              />
            </View>
            <View className="mt-6 ">
              <Pressable
                onPress={() => {
                  handleSubmit();
                }}>
                <View
                  style={{
                    backgroundColor:
                      errors.firstName ||
                      errors.lastName ||
                      errors.mobileNumber ||
                      errors.username ||
                      errors.password
                        ? '#E5E5E5'
                        : '#000',
                  }}
                  className="bg-black rounded-3xl flex flex-row space-x-4 justify-center items-center w-[90vw] h-12 mx-auto">
                  {mutation.isLoading && (
                    <ActivityIndicator animating={mutation.isLoading} />
                  )}
                  <Text className="text-white font-bold text-sm">Sign up</Text>
                </View>
              </Pressable>
              <View className="text-center my-6 flex items-center">
                <Text className="text-sm font-normal text-[#4D4D4D]">
                  By tapping Sign up, you agree to our
                </Text>
                <Text className="text-sm font-normal text-[#4D4D4D]">
                  <Text className="text-black font-medium">
                    Terms, Data Policy
                  </Text>{' '}
                  and{' '}
                  <Text className="text-black font-medium">Cookies Policy</Text>
                </Text>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignupScreen;
