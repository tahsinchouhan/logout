import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Swiper from 'react-native-swiper';
import NavigationService from '../../navigation/NavigationService';
import FirstOnBoarding from './FirstOnBoarding';
import SecondOnBoarding from './SecondOnBoarding';

const OnboardingScreen = () => {
  const swiperRef = React.useRef(null);
  const [introscreenNumber, setIntroScreenNumber] = React.useState(0);
  const nextIntroScreenFunction = () => {
    if (introscreenNumber === 2) {
      NavigationService.navigate('Login');
    } else {
      swiperRef?.current?.scrollBy(1); // essential for the swiper to work
      setIntroScreenNumber(introscreenNumber);
    }
  };

  

  return (
    <SafeAreaView>
      <View>
        <Swiper
          ref={swiperRef}
          showsPagination={false}
          loop={false}
          // showsButtons={true}
          index={introscreenNumber}
          onIndexChanged={setIntroScreenNumber}>
          <FirstOnBoarding
            nextIntroScreenFunction={nextIntroScreenFunction}
            SwiperRef={swiperRef}
          />
          <SecondOnBoarding
            nextIntroScreenFunction={nextIntroScreenFunction}
            SwiperRef={swiperRef}
          />

          {/* // <ScreenThree
                    //     nextIntroScreenFunction={nextIntroScreenFunction}
                    //     SwiperRef={swiperRef}
                    // /> */}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
