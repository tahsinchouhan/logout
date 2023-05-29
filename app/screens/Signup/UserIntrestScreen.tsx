import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
const UserIntrestScreen = () => {
  // const data = [1, 2, 3];
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);
  const getUserId = async () => {
    const userId = await AsyncStorage.getItem('userId');
    return userId;
  };

  useEffect(() => {
    getUserId();
  }, []);

  const {isLoading, error, data} = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      axios
        .get('https://logout-idnd.onrender.com/user/get-category')
        .then(res => res.data),
  });

  // console.log(isLoading, error, data, isFetching);

  const mutation = useMutation(async (values: any) => {
    const id = values.userId;
    const data = values.selectedItems;
    console.log(id, data);
    const queryParam = new URLSearchParams({id, data});
    console.log(queryParam.toString());
    // https://logout-idnd.onrender.com/user/select-category/{userID}?id=646f9faea41051a7f6e7df58&data=%5B%22Festival%22%2C%22Sport%22%5D
    return axios
      .post(
        `https://logout-idnd.onrender.com/user/select-category/{userID}?${queryParam}`,
      )
      .then(res => {
        console.log(res.data);
        return res.data.JSON();
      })
      .catch(err => {
        console.log(err);
      });
  });

  const updateUserCategories = async () => {
    const userId = await AsyncStorage.getItem('userId');

    mutation.mutate({userId, selectedItems});
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="bg-white h-full px-5">
      <View>
        <Text className="text-black font-bold text-[22px] mb-2">
          Tell us about your interests
        </Text>
        <Text className="text-[#595959] font-normal text-base mb-6">
          Create an account so you can manage your account hassle free
        </Text>
      </View>
      <View>
        <Text className="text-black font-bold text-base mb-2">
          Select Category
        </Text>
        <View className="flex flex-wrap flex-row w-full ">
          {data?.response?.map((item: any) => (
            <Pressable
              onPress={() => {
                if (selectedItems.includes(item)) {
                  setSelectedItems(selectedItems.filter(i => i !== item));
                } else {
                  setSelectedItems([...selectedItems, item]);
                }
              }}>
              <View
                style={{
                  backgroundColor: selectedItems.includes(item)
                    ? '#F2F2F2'
                    : '#fff',
                  borderColor: selectedItems.includes(item)
                    ? '#000'
                    : 'lightgrey',
                }}
                className="px-4 py-2 flex justify-center items-center border  rounded-[100px]  mr-4 mb-4">
                <Text className="text-sm text-black capitalize ">{item}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
      <View className="my-5">
        <View className="mt-6 ">
          {/* <CustomButton screen="UserInterestScreen" text={"Sign up"}/> */}
          <Pressable
            onPress={
              () => updateUserCategories()
              // navigation.navigate('HomeTabs',{screen:'Home'})
            }>
            <View className="bg-black rounded-3xl flex justify-center items-center w-[90vw] h-12 mx-auto">
              <Text className="text-white font-bold text-sm">Continue</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserIntrestScreen;
