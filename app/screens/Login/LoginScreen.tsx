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

const LoginScreen = () => {
  const navigation = useNavigation();
  interface navigateProps {
    userId: string;
  }

  const navigateTo = async ({userId}: navigateProps) => {
    await AsyncStorage.setItem('userId', userId);
    navigation.navigate('HomeTabs', {
      screen: 'Home',
    });
  };

  const mutation = useMutation(async (values: any) => {
    const password = values.password;
    const mobileNumber = values.mobileNumber;
    console.log(password, mobileNumber);
    return axios
      .post(
        `https://logout-idnd.onrender.com/user/login-password/{mobile}/${password}?mobileNumber=${mobileNumber}`,
      )
      .then(res => {
        console.log('res', res.data.response);
        if (res.data.response._id) {
          Toast.show({
            type: 'success',
            text1: 'Welcome',
            text2: 'You have successfully Loged In',
            visibilityTime: 3000,
          });

          navigateTo({userId: res?.data?.response?._id});
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: res?.data?.response,
            visibilityTime: 3000,
          });
        }
      });
  });

  const handleSubmit = (values: any) => {
    // clear form fields
    mutation.mutate(values);
  };

  const Validate = (values: any) => {
    const errors: any = {};
    if (!values.mobileNumber) {
      errors.mobileNumber = 'Required';
    } else if (values.mobileNumber.length !== 10) {
      errors.mobileNumber = 'Must be 10 characters';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  return (
    <View className="p-4 bg-white h-full">
      <View>
        <Text className="text-black font-bold text-[22px] mb-6">Log In</Text>
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
            <View>
              <View
                style={{
                  borderColor:
                    errors.mobileNumber && touched.mobileNumber
                      ? 'red'
                      : '#777B7E',
                }}
                className="border  rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                <Text className="text-black font-medium text-[17px]">+91</Text>
                <Text className="text-gray-400 pl-1 text-xl">|</Text>
                <TextInput
                  keyboardType="number-pad"
                  dataDetectorTypes="phoneNumber"
                  placeholder="Enter your mobile number"
                  placeholderTextColor="#777B7E"
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                />
              </View>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#777B7E"
                className="border  rounded-3xl px-4 py-2 w-full text-black h-12 mb-4"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                style={{
                  borderColor:
                    errors.password && touched.password ? 'red' : '#777B7E',
                }}
              />
              <View className="flex flex-row justify-end items-center">
                <Text className="text-gray font-normal text-[14px] underline mr-2">
                  Forgot Password ?
                </Text>
              </View>
              <View className="flex flex-row justify-center items-center">
                <Pressable onPress={() => navigation.navigate('SendOtpScreen')}>
                  <Text className="text-black font-medium text-[16px] my-4">
                    Login Via OTP
                  </Text>
                </Pressable>
              </View>

              <View className="mt-6">
                {/* <NavigationButton screen="Home" text="Login" root="HomeTabs" /> */}

                <Pressable
                  onPress={() => {
                    handleSubmit();
                  }}
                  disabled={mutation.isLoading}
                  className="-mx-4">
                  <View
                    style={{
                      backgroundColor:
                        errors && Object.keys(errors).length > 0
                          ? '#E5E5E5'
                          : '#000',
                    }}
                    className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto flex-row space-x-3">
                    {mutation.isLoading && (
                      <ActivityIndicator animating={mutation.isLoading} />
                    )}
                    <Text className="text-white font-bold text-sm">Login</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;
