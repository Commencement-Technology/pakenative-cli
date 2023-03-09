import React, {ReactNode} from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from '../theme/colors';

export const Input = ({icon, ...rest}: TextInputProps & {icon: ReactNode}) => {
  return (
    <View>
      <View className="absolute left-3 z-10" style={styles.icon}>
        {icon}
      </View>
      <TextInput
        {...rest}
        className="h-10 border-2 rounded-full border-zinc-300 text-center bg-smoothgray pl-9 pr-5"
        placeholderTextColor={Colors.ABBEYBLACK}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 37,
  },
});
