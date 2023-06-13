import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

const SendOtpScreen = () => {
  const navigation = useNavigation();

  const Validate = (values: any) => {
    const errors: any = {};
    if (!values.mobileNumber) {
      errors.mobileNumber = 'Required';
    } else if (values.mobileNumber.length !== 10) {
      errors.mobileNumber = 'Invalid mobile number';
    }
    return errors;
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    navigation.navigate('LoginScreens', {
      screen: 'EnterOtpScreen',
      params: {mobileNumber: values.mobileNumber},
    });
  };

  return (
    <View className="p-4 bg-white h-full">
      <View>
        <Text className="text-black font-bold text-[22px] mb-2">
          Enter your phone number{' '}
        </Text>
        <Text className="text-[#595959] font-normal text-base mb-6">
          We will send an OTP verification to you{' '}
        </Text>
        <Formik
          validate={Validate}
          initialValues={{
            mobileNumber: '',
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
                className="w-[90vw] mx-auto border rounded-3xl px-4  text-black h-12 mb-4 flex flex-row items-center">
                <Text className="text-black font-medium text-[17px]">+91</Text>
                <Text className="text-gray-400 pl-1 text-xl">|</Text>
                <TextInput
                  keyboardType="number-pad"
                  dataDetectorTypes="phoneNumber"
                  placeholder="Enter your mobile number"
                  placeholderTextColor="#777B7E"
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  className="w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                />
              </View>

              <View className="mt-48 -mx-4">
                <Pressable
                  onPress={() =>
                    // navigation.navigate('LoginScreens', {
                    //   screen: 'EnterOtpScreen',
                    // })
                    handleSubmit()
                  }>
                  <View className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
                    <Text className="text-white font-bold text-sm">
                      Send me the code
                    </Text>
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

export default SendOtpScreen;
