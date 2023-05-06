import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { SearchSVG } from '../../assets/Icons';
import AddFriendCard from '../../components/FriendsScreen/AddFriendCard';
const AddFriendScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <View>
      <View className="bg-white px-4">
        <View className="flex flex-row items-center border border-[#E5E5E5] rounded-3xl px-4  w-full  h-12 mb-4">
          <SearchSVG />
          <TextInput
            placeholder="Search phone number or username"
            placeholderTextColor="#777B7E"
            className=" w-full text-black h-full text text-sm font-normal placeholder:text-base ml-2"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </View>
      </View>
      <View className="bg-[#F5F5F5] h-full w-full items-center p-4"
      style={{
        display: search !== '' ? 'flex' : 'none',
      }}
      >
        <AddFriendCard
          image={require('../../assets/images/user1.png')}
          name="Peter Theil"
          text="Pensilvalia, California"
          rating="4.3"
        />
        <AddFriendCard
          image={require('../../assets/images/user2.png')}
          name="Samson Taylor"
          text="Huston, Jamaica"
          rating="3.9"
        />
      </View>
    </View>
  );
};

export default AddFriendScreen;
