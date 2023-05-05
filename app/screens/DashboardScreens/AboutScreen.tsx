import React from 'react';
import { Image, Text, View } from 'react-native';

const AboutScreen = () => {
  return (
    <View className="bg-white h-full px-4 py-6">
      <View>
        <Image
          className="w-full h-48 rounded-2xl"
          source={require('../../assets/images/about.png')}
        />
      </View>
      <Text className="text-2xl font-bold text-black my-4">Logout Inc</Text>
      <Text>
        Our quantitative research company has been lucky to work with
        organizations from Fortune 500 enterprises to the top consultancies,
        financial institutions, and leading market research firms. Our
        quantitative research company has been lucky to work with organizations
        from Fortune 500 enterprises to the top consultancies, financial
        institutions, and leading market research firms.
      </Text>
    </View>
  );
};

export default AboutScreen;
