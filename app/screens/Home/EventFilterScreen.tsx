import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { CheckSVG, SliderIconSVG } from '../../assets/Icons';
import { NavigationButton } from '../../components/Button';
import FilterItem from '../../components/HomeScreen/FilterItems';

const EventFilterScreen = () => {
  const [sliderValues, setSliderValues] = React.useState([50, 200]);
  const [time, setTime] = React.useState('Today');
  const navigation = useNavigation();
  const IntrestData = [
    {
      id: 1,
      name: 'Sports',
    },
    {
      id: 2,
      name: 'Music',
    },
    {
      id: 3,
      name: 'Food',
    },
    {
      id: 4,
      name: 'Painting',
    },
    {
      id: 5,
      name: 'Sports',
    },
  ];

  return (
    <ScrollView className="bg-white h-full px-4 relative">
      <View>
        <View className="flex-row items-center  py-6 mb-2">
          <View className="mr-3">
            <Pressable onPress={() => navigation.goBack()}>
              <CheckSVG />
            </Pressable>
          </View>
          <Text className="text-[22px] font-bold text-black pl-4">Filter</Text>
        </View>
        <View className="border-b border-gray-300 pb-5">
          <Text className="text-black font-bold mb-4 text-base">
            Categories
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {IntrestData.map((item, index) => (
              <FilterItem key={index} Data={item} borderAllow={true} />
            ))}
          </ScrollView>
        </View>
        <View className="my-4 ">
          <Text className="text-black font-bold mb-4 text-base">Location</Text>
        </View>
        <View className="my-4 flex flex-row justify-between">
          <Text className="text-black font-bold mb-4 text-base">
            Select price range
          </Text>
          <Text className="text-lg font-bold">
            ${sliderValues[0]} -${sliderValues[1]}
          </Text>
        </View>
        <View horizontal={false}>
          <MultiSlider
            isMarkersSeparated={true}
            min={0}
            max={300}
            values={[sliderValues[0], sliderValues[1]]}
            onValuesChange={values => setSliderValues(values)}
            //   onValuesChangeFinish={values => setSliderValues(values)}
            sliderLength={300}
            step={1}
            customMarkerLeft={e => <SliderIconSVG />}
            customMarkerRight={e => <SliderIconSVG />}
            selectedStyle={{
              backgroundColor: '#000',
              height: 3,
            }}
            unselectedStyle={{
              height: 3,
            }}
            containerStyle={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <View className="my-4 ">
          <Text className="text-black font-bold mb-4 text-base">
            Time & Date
          </Text>
          <View className="flex flex-row justify-evenly">
            <Pressable
              onPress={() => setTime('Today')}
              style={{
                backgroundColor: time === 'Today' ? '#000' : '#fff',
                borderColor: time === 'Today' ? '#000' : '#E6E6E6',
              }}
              className="h-11 border rounded-xl flex justify-center items-center w-28">
              <Text
                style={{
                  color: time === 'Today' ? '#fff' : '#807A7A',
                }}
                className="text-base font-medium">
                Today
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setTime('Tomorrow')}
              style={{
                backgroundColor: time === 'Tomorrow' ? '#000' : '#fff',
                borderColor: time === 'Tomorrow' ? '#000' : '#E6E6E6',
              }}
              className="h-11 border rounded-xl flex justify-center items-center w-28">
              <Text
                style={{
                  color: time === 'Tomorrow' ? '#fff' : '#807A7A',
                }}
                className="text-base font-medium">
                Tomorrow
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setTime('This week')}
              style={{
                backgroundColor: time === 'This week' ? '#000' : '#fff',
                borderColor: time === 'This week' ? '#000' : '#E6E6E6',
              }}
              className="h-11 border rounded-xl flex justify-center items-center w-28">
              <Text
                style={{
                  color: time === 'This week' ? '#fff' : '#807A7A',
                }}
                className="text-base font-medium">
                This week
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <NavigationButton
            text="Apply"
            screen="RecommendedHangOutsScreen"
            root="CreateHangoutScreens"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EventFilterScreen;
