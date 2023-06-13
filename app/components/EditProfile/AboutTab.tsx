import { Picker } from '@react-native-picker/picker';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {Formik} from 'formik';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {AttachIconSVG} from '../../assets/Icons';

const AboutTab = ({userData}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (values: any) => {
      const userId = userData?._id;
      const Data = {
        email: values.email,
        age: values.age,
        gender: values.gender,
      };

      return axios
        .patch(`https://logout-idnd.onrender.com/user/general/${userId}`, Data)
        .then(res => {
          console.log(res.data);
          Toast.show({
            type: 'success',
            text1: 'Updates Successfully',
            text2: 'Personal Details has been updated',
            visibilityTime: 2000,
          });
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
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userData']);
      },
    },
  );

  const handleSubmit = values => {
    mutation.mutate(values);
  };

  const Validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = 'Required';
    }
    if (!values.username) {
      errors.username = 'Required';
    }
    return errors;
  };

  return (
    <ScrollView>
      <Formik
        validate={Validate}
        initialValues={{
          firstName: userData?.generalDetails?.firstName,
          lastName: userData?.generalDetails?.lastName,
          mobileNumber: userData?.mobileNumber,
          username: userData?.username,
          email: userData?.generalDetails?.email,
          age: userData?.generalDetails?.age,
          gender: userData?.gengeneralDetails?.gender || 'male',
        }}
        onSubmit={values => handleSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
        }) => (
          <View className="p-4">
            <Text className="font-bold text-primarygray">
              Personal Information
            </Text>
            <View className="py-4">
              <View className="flex flex-row justify-between">
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor="#777B7E"
                  onChangeText={handleChange('firstName')}
                  defaultValue={userData?.generalDetails?.firstName}
                  onBlur={handleBlur('firstName')}
                  style={{
                    borderColor:
                      errors.firstName && touched.firstName ? 'red' : '#E5E5E5',
                  }}
                  className="h-12 rounded-[100px] border px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                />
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor="#777B7E"
                  onChangeText={handleChange('lastName')}
                  defaultValue={userData?.generalDetails?.lastName}
                  onBlur={handleBlur('lastName')}
                  style={{
                    borderColor:
                      errors.lastName && touched.lastName ? 'red' : '#E5E5E5',
                  }}
                  className="h-12 rounded-[100px] border px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                />
              </View>

              <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                <Text className="text-black font-medium text-base">@</Text>
                <Text className="text-gray-400 pl-1 text-xl">|</Text>
                <TextInput
                  placeholder="Select prefered username"
                  placeholderTextColor="#777B7E"
                  onChangeText={handleChange('username')}
                  defaultValue={userData?.username}
                  onBlur={handleBlur('username')}
                  editable={false}
                  className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                />
              </View>
              <View
                style={{
                  borderColor:
                    errors.mobileNumber && touched.mobileNumber
                      ? 'red'
                      : '#E5E5E5',
                }}
                className="border rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                <Text className="text-black font-medium text-base">+91</Text>
                <Text className="text-gray-400 pl-1 text-xl">|</Text>
                <TextInput
                  keyboardType="numeric"
                  maxLength={10}
                  dataDetectorTypes="phoneNumber"
                  placeholder="Enter your mobile number"
                  placeholderTextColor="#777B7E"
                  onChangeText={handleChange('mobileNumber')}
                  defaultValue={userData?.mobileNumber.toString()}
                  onBlur={handleBlur('mobileNumber')}
                  className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                />
              </View>
              <View className="mb-4">
                <View
                  style={{
                    borderColor:
                      errors.email && touched.email ? 'red' : '#E5E5E5',
                  }}
                  className="flex flex-row rounded-[100px] border px-4 items-center h-12 mb-2">
                  <TextInput
                    placeholder="Email Address"
                    onChangeText={handleChange('email')}
                    defaultValue={userData?.generalDetails?.email}
                    onBlur={handleBlur('email')}
                    placeholderTextColor="#777B7E"
                    className="h-12  text-black flex flex-row items-center text-base w-[90%]"
                  />
                </View>
                <View className="flex flex-row justify-between items-center px-2">
                  <Text className="text-[#F2994A]">
                    Verify your email address
                  </Text>
                  <Text className="text-black font-semibold">Resent</Text>
                </View>
              </View>
              <View className="flex flex-row justify-between">
                <View
                  style={{
                    borderColor: errors.age && touched.age ? 'red' : '#E5E5E5',
                  }}
                  className="h-12 rounded-[100px] border px-4  w-[48%] mb-4">
                  <TextInput
                    placeholder="Age"
                    placeholderTextColor="#777B7E"
                    onChangeText={handleChange('age')}
                    defaultValue={userData?.generalDetails?.age.toString()}
                    onBlur={handleBlur('age')}
                    className="h-12  text-black flex flex-row items-center text-base w-[90%]"
                  />
                </View>

                <View className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%] mb-2">
                  <Picker
                    placeholder="Gender"
                    className="text-black"
                    onValueChange={itemValue => {
                      console.log(itemValue);
                      setFieldValue('gender', itemValue ? itemValue : 'male');
                    }}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                </View>
              </View>
            </View>
            <Text className="font-bold text-primarygray">
              Personal Information
            </Text>
            <View className="py-4">
              <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                <Text className="text-black font-medium text-base">
                  <AttachIconSVG />
                </Text>
                <TextInput
                  maxLength={10}
                  placeholder="Aadhar Card"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                />
              </View>
              <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                <Text className="text-black font-medium text-base">
                  <AttachIconSVG />
                </Text>
                <TextInput
                  maxLength={10}
                  placeholder="Upload Selfie"
                  placeholderTextColor="#777B7E"
                  className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                />
              </View>
            </View>
            <View className="-mx-4">
              <Pressable
                onPress={() => {
                  handleSubmit();
                }}
                disabled={mutation.isLoading}
                className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto flex-row space-x-3">
                {mutation.isLoading && (
                  <ActivityIndicator animating={mutation.isLoading} />
                )}
                <Text className="text-white font-bold text-sm">
                  Save all Changes
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AboutTab;
