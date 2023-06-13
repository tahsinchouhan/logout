import {useMutation, useQueryClient} from '@tanstack/react-query';
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

const EducationMapFields = ({userData}) => {
  console.log(userData);

  const queryClient = useQueryClient();

  // console.log('userData', userData);

  const mutation = useMutation(
    async (values: any) => {
      const userId = userData?._id;
      const Data = {
        schoolName: values.schoolName,
        collegeName: [values.collegeName],
        collegeDegree: [values.collegeDegree],
        collegeYear: [values.collegeYear],
        competitiveExam: [values.competitiveExam],
      };
      console.log('Data', Data);

      return axios
        .patch(
          `https://logout-idnd.onrender.com/profile/educationDetails/${userId}`,
          Data,
        )
        .then(res => {
          console.log(res.data);
          Toast.show({
            type: 'success',
            text1: 'Updates Successfully',
            text2: 'Education Details has been updated',
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
    console.log('values', values);
    mutation.mutate(values);
  };

  const Validate = values => {
    const errors = {};
    if (!values.schoolName) {
      errors.schoolName = 'Required';
    }
    if (!values.collegeName) {
      errors.collegeName = 'Required';
    }
    if (!values.collegeDegree) {
      errors.collegeDegree = 'Required';
    }
    if (!values.collegeYear) {
      errors.collegeYear = 'Required';
    }
    return errors;
  };
  return (
    <View>
      <Formik
        validate={Validate}
        initialValues={{
          schoolName: userData?.educationDetails?.schoolName,
          collegeName: userData?.educationDetails?.collegeName[0],
          collegeDegree: userData?.educationDetails?.collegeDegree[0],
          collegeYear: userData?.educationDetails?.collegeYear[0],
          competitiveExam: userData?.educationDetails?.competitiveExam[0],
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
          <View className="py-4">
            <View
              style={{
                borderColor:
                  errors.schoolName && touched.schoolName ? 'red' : '#E5E5E5',
              }}
              className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
              <TextInput
                placeholder="Where did you do schooling from ?"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('schoolName')}
                onBlur={handleBlur('schoolName')}
                defaultValue={userData?.educationDetails?.schoolName}
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
              />
            </View>
            <View
              style={{
                borderColor:
                  errors.collegeName && touched.collegeName ? 'red' : '#E5E5E5',
              }}
              className="border border-gray-300 rounded-3xl px-4  w-full text-black h-12 mb-4 flex flex-row items-center">
              <TextInput
                placeholder="Which college did you went ?"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('collegeName')}
                onBlur={handleBlur('collegeName')}
                defaultValue={userData?.educationDetails?.collegeName[0]}
                className=" w-full text-black h-full text text-[17px] font-normal placeholder:text-base pl-2"
              />
            </View>
            <View className="mb-4">
              <View className="flex flex-row rounded-[100px] border border-gray-300 px-4 items-center h-12 mb-2">
                <TextInput
                  placeholder="Competitive Exams"
                  placeholderTextColor="#777B7E"
                  onChangeText={handleChange('competitiveExam')}
                  onBlur={handleBlur('competitiveExam')}
                  defaultValue={userData?.educationDetails?.competitiveExam[0]}
                  className="h-12  text-black flex flex-row items-center text-base w-[90%]"
                />
              </View>
            </View>
            <View className="flex flex-row justify-between">
              <TextInput
                placeholder="Degree"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('collegeDegree')}
                onBlur={handleBlur('collegeDegree')}
                defaultValue={userData?.educationDetails?.collegeDegree[0]}
                className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                style={{
                  borderColor:
                    errors.collegeDegree && touched.collegeDegree
                      ? 'red'
                      : '#E5E5E5',
                }}
              />
              <TextInput
                placeholder="Persuing Year"
                placeholderTextColor="#777B7E"
                onChangeText={handleChange('collegeYear')}
                onBlur={handleBlur('collegeYear')}
                defaultValue={userData?.educationDetails?.collegeYear[0]}
                style={{
                  borderColor:
                    errors.collegeYear && touched.collegeYear
                      ? 'red'
                      : '#E5E5E5',
                }}
                className="h-12 rounded-[100px] border border-gray-300 px-4  w-[48%]  text-black mb-4 flex flex-row items-center text-base"
                style={{
                  borderColor:
                    errors.collegeYear && touched.collegeYear
                      ? 'red'
                      : '#E5E5E5',
                }}
              />
            </View>
            <Pressable
              disabled={mutation.isLoading}
              onPress={() => handleSubmit()}
              className="-mx-4 mt-4 ">
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
  );
};

export default EducationMapFields;
