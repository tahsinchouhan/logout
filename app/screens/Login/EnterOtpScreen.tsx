import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import SplitOTPInput from '../../components/SplitOTPInput';

const EnterOtpScreen = ({route}) => {
  const [otpCode, setOtpCode] = useState('');
  const [isPinReady, setIsPinReady] = React.useState(false);
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
    const mobileNumber = route.params.mobileNumber;
    console.log(password, mobileNumber);
    return axios
      .post(
        `https://logout-idnd.onrender.com/user/login-otp{mobile}/4444?mobile_no=7000715502`,
      )
      .then(res => {
        console.log('res', res.data);
        if (res.data.response._id) {
          Toast.show({
            type: 'success',
            text1: 'Welcome',
            text2: 'Login via OTP was Successful',
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
    console.log(values);
    mutation.mutate(values);
  };

  return (
    <ScrollView className="bg-white px-5">
      <View style={styles.secondaryContainer}>
        <Text className="text-black font-bold text-[22px] mt-4">
          Confirm your number
        </Text>
        <Text className="text-[#595959] font-normal  text-base mt-2">
          We’ve sent an SMS with an activation code (4444) to your phone{' '}
          <Text className="font-medium">
            +91 {route.params.mobileNumber || ''}
          </Text>
        </Text>

        <SplitOTPInput
          OTP={otpCode}
          setOTP={setOtpCode}
          maximumCodeLength={4}
          setIsPinReady={setIsPinReady}
        />

        <View className="flex flex-row justify-center mt-4">
          <Text className="text-base text-black">
            I didn’t receive a code ?
          </Text>
          <Text className="font-semibold text-base text-black"> Resend </Text>
        </View>
      </View>
      <View className="mt-48">
        <Pressable
          disabled={!isPinReady}
          onPress={() =>
            // navigation.navigate('HomeTabs', {screen: 'Home'})
            handleSubmit({password: otpCode})
          }>
          <View
            style={{
              backgroundColor: !isPinReady ? '#E5E5E5' : '#000',
            }}
            className=" rounded-3xl flex flex-row justify-center items-center w-[90vw] h-12 mx-auto space-x-3">
            {mutation.isLoading && (
              <ActivityIndicator animating={mutation.isLoading} />
            )}
            <Text className="text-white font-bold text-sm">Verify</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default EnterOtpScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex: 1,
  },
  primaryContainer: {
    marginTop: '25%',
    marginBottom: '10%',
  },
  secondaryContainer: {},
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#A0A0A0',
    borderColor: '#282828',
  },
  underlineStyleHighLighted: {
    borderColor: '#1379AA',
    borderBottomWidth: 2,
  },
  thirdContainer: {
    marginTop: '12%',
    marginBottom: 30,
  },
  LogoPosition: {
    marginBottom: '10%',
  },
  primaryTextOne: {
    color: '#1379AA',
    fontWeight: '500',
    fontSize: 35,
    letterSpacing: 0.8,
  },
  primaryTextTwo: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0.8,
  },
  secondaryTextOne: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 15,
  },
  HighlightUnderlineText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  OTPTimerContainer: {
    marginTop: -5,
  },
});
