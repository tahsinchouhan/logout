import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Toast from 'react-native-toast-message';
import {ClockSVG} from '../../assets/Icons';

const CareerTab = ({userData}) => {
  const [date, setDate] = useState(new Date());
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endTimeOpen, setEndTimeOpen] = useState(false);
  const [startTimeText, setStartTimeText] = useState(
    new Date(userData?.careerBusiness?.startDate).toLocaleDateString() ||
      'Start time',
  );
  const [endTimeText, setEndTimeText] = useState(
    new Date(userData?.careerBusiness?.endDate).toLocaleDateString() ||
      'End time',
  );
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (values: any) => {
      const userId = userData?._id;
      const Data = {
        jobType: [values.jobType],
        companyName: [values.companyName],
        startDate: values.startDate,
        endDate: values.endDate,
      };
      console.log('Data', Data);

      return axios
        .patch(
          `https://logout-idnd.onrender.com/profile/career-business/${userId}`,
          Data,
        )
        .then(res => {
          console.log(res.data);
          Toast.show({
            type: 'success',
            text1: 'Updates Successfully',
            text2: 'Business Career has been updated',
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
    if (!values.jobType) {
      errors.jobType = 'Required';
    }
    if (!values.companyName) {
      errors.companyName = 'Required';
    }
    if (!values.startDate) {
      errors.startDate = 'Required';
    }
    if (!values.endDate) {
      errors.endDate = 'Required';
    }
    return errors;
  };

  return (
    <ScrollView>
      <View className="p-4">
        <View className="py-4">
          <View className="mb-4">
            <View className="flex justify-between flex-row mb-4">
              <Text className="font-bold text-primarygray">Career</Text>
            </View>

            <Formik
              validate={Validate}
              initialValues={{
                jobType: userData?.careerBusiness?.jobType[0],
                companyName: userData?.careerBusiness?.companyName[0],
                startDate: userData?.careerBusiness?.startDate,
                endDate: userData?.careerBusiness?.endDate,
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
                <View>
                  <View
                    style={{
                      borderColor:
                        errors.jobType && touched.jobType ? 'red' : '#E5E5E5',
                    }}
                    className="border rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                    <TextInput
                      placeholder="Job Type"
                      placeholderTextColor="#777B7E"
                      onChangeText={handleChange('jobType')}
                      onBlur={handleBlur('jobType')}
                      defaultValue={userData?.careerBusiness?.jobType[0]}
                      className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                    />
                  </View>
                  <View
                    style={{
                      borderColor:
                        errors.companyName && touched.companyName
                          ? 'red'
                          : '#E5E5E5',
                    }}
                    className="border rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
                    <TextInput
                      placeholder="Company Name"
                      placeholderTextColor="#777B7E"
                      onChangeText={handleChange('companyName')}
                      onBlur={handleBlur('companyName')}
                      defaultValue={userData?.careerBusiness?.companyName[0]}
                      className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
                    />
                  </View>
                  <View className="flex flex-row justify-between">
                    <View className="flex flex-row rounded-[100px] border border-[#E5E5E5] px-4 items-center h-12 mb-4 w-[48%]">
                      <Pressable
                        onPress={() => setStartTimeOpen(true)}
                        className="flex flex-row items-center space-x-2 px-3">
                        <ClockSVG />
                        <Text
                          style={{
                            color:
                              startTimeText === 'Start time'
                                ? '#777B7E'
                                : '#000',
                          }}
                          className="text-sm font-normal text-primarygray">
                          {startTimeText}
                        </Text>
                      </Pressable>

                      <DatePicker
                        modal
                        locale="en_IN"
                        mode="date"
                        open={startTimeOpen}
                        date={new Date(userData?.careerBusiness?.startDate)}
                        onConfirm={date => {
                          setStartTimeOpen(false);
                          setDate(date);
                          setStartTimeText(date.toLocaleDateString());
                          setFieldValue('startDate', date);
                        }}
                        onCancel={() => {
                          setStartTimeOpen(false);
                        }}
                      />
                    </View>
                    <View className="flex flex-row rounded-[100px] border border-[#E5E5E5] px-4 items-center h-12 mb-4 w-[48%]">
                      <Pressable
                        onPress={() => setEndTimeOpen(true)}
                        className="flex flex-row items-center space-x-2 px-3">
                        <ClockSVG />
                        <Text
                          style={{
                            color:
                              endTimeText === 'End time' ? '#777B7E' : '#000',
                          }}
                          className="text-sm font-normal text-primarygray">
                          {endTimeText}
                        </Text>
                      </Pressable>

                      <DatePicker
                        modal
                        open={endTimeOpen}
                        date={new Date(userData?.careerBusiness?.endDate)}
                        locale="en_IN"
                        mode="date"
                        onConfirm={date => {
                          console.log('date', date);
                          setEndTimeOpen(false);
                          setDate(date);
                          setEndTimeText(date.toLocaleDateString());
                          setFieldValue('endDate', date);
                        }}
                        onCancel={() => {
                          setEndTimeOpen(false);
                        }}
                      />
                    </View>
                  </View>
                  <Pressable
                    onPress={() => {
                      handleSubmit();
                    }}
                    disabled={mutation.isLoading}
                    className="-mx-4 mt-4">
                    <View className="bg-black rounded-3xl space-x-3 flex flex-row justify-center items-center w-[90%] h-12 mx-auto">
                      {mutation.isLoading && (
                        <ActivityIndicator animating={mutation.isLoading} />
                      )}
                      <Text className="text-white font-bold text-sm">
                        Save all Changes
                      </Text>
                    </View>
                  </Pressable>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CareerTab;
