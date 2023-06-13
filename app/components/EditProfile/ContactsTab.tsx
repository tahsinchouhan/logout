import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {Formik} from 'formik';
import React from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import Toast from 'react-native-toast-message';
import ContactsMapFields from './ContactsMapFields';
const CantactsTab = ({userData}) => {
  const [careerMap, setCareerMap] = React.useState([1]);
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
        <View className=" border-b border-gray-300 mb-4">
          <Text className="font-bold text-primarygray mb-4">
            Link Your Partner
          </Text>
          <View className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#777B7E"
              className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
            />
          </View>
          <View className="flex items-end">
            <Pressable className="mb-4 bg-black rounded-full px-5 py-2 w-36">
              <Text className="text-white text-center font-semibold">
                Send Request
              </Text>
            </Pressable>
          </View>
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
              {careerMap.map(item => (
                <View key={item} className="mb-2">
                  <View className="flex justify-between flex-row mb-4">
                    <Text className="font-bold text-primarygray">
                      Emergency Contact
                    </Text>
                    <Pressable
                      onPress={() => {
                        const newCareerMap = [...careerMap];
                        newCareerMap.splice(item - 1, 1);
                        setCareerMap(newCareerMap);
                      }}>
                      <Text className=" text-red-500">remove</Text>
                    </Pressable>
                  </View>
                  <ContactsMapFields />
                </View>
              ))}
            </View>
          )}
        </Formik>
        <Pressable
          className="-mx-4"
          onPress={() => setCareerMap([...careerMap, careerMap.length + 1])}>
          <View className="bg-[#EAF2FD] rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
            <Text className="text-[#2F80ED] font-bold text-sm">
              + Add Another Emergency Contact
            </Text>
          </View>
        </Pressable>

        <View className="-mx-4 mt-4 ">
          <View className="bg-black rounded-3xl flex justify-center items-center w-[90%] h-12 mx-auto">
            <Text className="text-white font-bold text-sm">
              Save all Changes
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CantactsTab;
