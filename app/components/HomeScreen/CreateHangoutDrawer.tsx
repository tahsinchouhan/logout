import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import GestureRecognizer from 'react-native-swipe-gestures';
import { CreateHangoutSVG } from '../../assets/Icons';
const CreateHangoutDrawer = () => {
  const navigation = useNavigation();

  const windowHeight = Dimensions.get('window').height;

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOpenBottomSheet}
        className=" flex flex-row text-center justify-center items-center">
        <CreateHangoutSVG />
      </TouchableOpacity>
      <GestureRecognizer
        style={{
          flex: isBottomSheetOpen ? 1 : 0, 
        }}
        onSwipeDown={() => {
          setIsBottomSheetOpen(false);
        }}
        className="">
        <Modal
          animationType="slide"
          transparent={true}
          visible={isBottomSheetOpen}
          onRequestClose={handleCloseBottomSheet}>
          <View style={[styles.bottomSheet, {height: windowHeight * 0.5}]}>
            <View>
              <TouchableOpacity
                onPress={handleCloseBottomSheet}
                className="w-full flex flex-row justify-end">
                <Text className="text-end">Close</Text>
              </TouchableOpacity>
              <View className="px-2">
                <Text className="text-[22px] font-bold text-black py-4">
                  Create Hangout
                </Text>
                <View className="flex flex-row justify-between w-full mt-6">
                  <Pressable
                    onPress={() => {
                      navigation.navigate( "CreateHangoutScreens",{screen:'CreateCasualHangout'});
                      handleCloseBottomSheet();
                    }}>
                    <View>
                      <Image
                        source={require('../../assets/Home/casualhangout.png')}
                      />
                      <Text className="text-base text-center font-bold text-black py-4">
                        Casual
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable onPress={() => {
                       navigation.navigate( "CreateHangoutScreens",{screen:'AddBankAccountScreen'});
                      handleCloseBottomSheet();
                    }}>
                    <View>
                      <Image
                        source={require('../../assets/Home/professionalhangout.png')}
                      />
                      <Text className="text-base text-center font-bold text-black py-4">
                        Professional
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  );
};

export default CreateHangoutDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: 'red',
  },
});
