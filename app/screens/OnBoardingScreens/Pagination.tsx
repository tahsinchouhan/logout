import React from 'react';
import { StyleSheet, View } from 'react-native';

type PaginationProps = {
  nextIntroScreenFunction: any;
  currentPage: number;
  SwiperRef: any;
};

const Pagination = ({
  nextIntroScreenFunction,
  currentPage,
  SwiperRef,
}: PaginationProps) => {
  return (
    <View>
      <View
        style={styles.NavigationNextContainer}
        className="flex items-center justify-center">
        <View style={styles.PositionContainer}>
          <View style={styles.positionDots}>
            <View
              style={{
                width: currentPage === 1 ? 40 : 30,
                height: 5,
                backgroundColor: currentPage === 1 ? 'black' : 'lightgray',
                borderRadius: 20,
              }}></View>
            <View
              style={{
                width: currentPage === 2 ? 40 : 30,
                height: 5,
                backgroundColor: currentPage === 2 ? 'black' : 'lightgray',
                borderRadius: 20,
              }}></View>
            <View
              style={{
                width: currentPage === 3 ? 40 : 30,
                height: 5,
                backgroundColor: currentPage === 3 ? 'black' : 'lightgray',
                borderRadius: 20,
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  // Bottom next container
  NavigationNextContainer: {
    marginVertical: '7%',
    flexDirection: 'row',
    marginHorizontal: '7%',
  },
  PositionContainer: {
    justifyContent: 'center',
    // width: '70%',
  },
  positionDots: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 106,
  },
  nextButton: {
    flexDirection: 'row',
  },
  nextButtonText: {
    textTransform: 'uppercase',
    // color: Colors.PRIMARY_DARK,
    // fontSize: Scale(12),
  },
  nextButtonIcon: {
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: -2,
  },
});
