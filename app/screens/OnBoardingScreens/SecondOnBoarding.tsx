import React from 'react'
import { Image, Text, View } from 'react-native'
import NavigationButton from '../../components/Button/NavigationButton'
import Pagination from './Pagination'

type SecondOnBoardingProps = {
    nextIntroScreenFunction: any,
    SwiperRef: any
}

const SecondOnBoarding = (
    {nextIntroScreenFunction, SwiperRef}: SecondOnBoardingProps
) => {
    return (
        <View style={{ height: "100%" }}>
      {/* <TopLogoComponent /> */}
      <View className="h-[60%] bg-black relative">
        <Image
        className="w-[90%] h-[90%] absolute right-0 bottom-0"
        source={require('../../assets/onbording/screen2.png')}
        />
      </View>
      <View className="h-[40%]  py-8">
        <Text className="font-bold text-[22px] text-center text-black">
        Explore hangouts nearby you
        </Text>
        <View className="w-[75%] flex  items-center text-center mx-auto mt-4">
          <Text className="font-normal text-base text-center text-[#595959]">
          Rolade is the fastest blockchain in the
 world and the fastest growing
          </Text>
        </View>
        <View className="mt-[10%] mb-[5%]">
        <Pagination
          nextIntroScreenFunction={nextIntroScreenFunction}
          currentPage={2}
          SwiperRef={SwiperRef}
          />
          </View>
        <NavigationButton text="Get Started!"  screen="Login"/>
      </View>
    </View>
    )
}


export default SecondOnBoarding
