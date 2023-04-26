import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type SplitOTPInputProps = {
  OTP: string;
  setOTP: (text: string) => void;
  maximumCodeLength: number;
  setIsPinReady: (isPinReady: boolean) => void;
};

const SplitOTPInput: React.FC<SplitOTPInputProps> = ({
  OTP,
  setOTP,
  maximumCodeLength,
  setIsPinReady,
}) => {
  const inputRef = useRef();
  const boxArray = new Array(maximumCodeLength).fill(0);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
  setTimeout(() => inputRef?.current.focus(), 100);

  const boxDigit = (_, index) => {
    const emptyInput = '';
    const digit = OTP[index] || emptyInput;

    const isCurrentValue = index === OTP.length;
    const isLastValue = index === maximumCodeLength - 1;
    const isCodeComplete = OTP.length === maximumCodeLength;
    // console.log(
    //   isLastValue,
    //   index,
    //   maximumCodeLength,
    //   OTP.length,
    //   maximumCodeLength - 1,
    // );

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <View key={index}>
        {isValueFocused ? (
          <View style={styles.SplitBoxesFocused}>
            <Text style={styles.SplitBoxText}>{digit}</Text>
          </View>
        ) : (
          <View style={styles.SplitBoxes}>
            <Text style={styles.SplitBoxText}>{digit}</Text>
          </View>
        )}
      </View>
    );
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    setIsPinReady(OTP.length === maximumCodeLength);
    return () => {
      setIsPinReady(false);
    };
  }, [OTP]);

  return (
    <View style={styles.OTPInputContainer}>
      <Pressable style={styles.SplitOTPBoxesContainer}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        style={styles.TextInputHidden}
        ref={inputRef}
        onChangeText={text => setOTP(text)}
        value={OTP}
        maxLength={maximumCodeLength}
        keyboardType="number-pad"
        onBlur={handleOnBlur}
      />
    </View>
  );
};

export default SplitOTPInput;

const styles = StyleSheet.create({
  OTPInputContainer: {
    // nothing for now.
    width: '100%',
    // backgroundColor: 'red',
  },
  TextInputHidden: {
    width: 300,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    position: 'absolute',
    opacity: 0,
  },
  SplitOTPBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 30,
  },
  SplitBoxes: {
    borderColor: '#e5e5e5',
    borderWidth: 2,
    borderRadius: 80,
    padding: 5,
    height: 50,
    width: 77,
    shadowOpacity: 0.05,
    shadowColor: '#888888',
    elevation: 5,
    backgroundColor: '#fff',
    // marginLeft: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplitBoxesFocused: {
    borderColor: '#888888',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 80,
    padding: 5,
    height: 50,
    width: 77,
    shadowOpacity: 0.05,
    shadowColor: '#888888',
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
},
  SplitBoxText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#888888',
  },
});
