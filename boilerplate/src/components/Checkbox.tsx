import React from 'react';
import {StyleSheet} from 'react-native';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';
import {Colors} from '../theme/colors';

export const Checkbox = ({size = 27, ...rest}: IBouncyCheckboxProps) => {
  return (
    <BouncyCheckbox
      size={size}
      fillColor={Colors.BRAND}
      unfillColor={Colors.SMOOTHGRAY}
      iconStyle={styles.icon}
      innerIconStyle={styles.innerIcon}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    borderColor: Colors.BRAND,
  },
  innerIcon: {borderWidth: 2},
});
