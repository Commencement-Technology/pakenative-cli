import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button as RNButton,
  ButtonProps,
  Colors,
  TextProps,
} from 'react-native-ui-lib';

type Props = Omit<ButtonProps, 'round'> & {
  labelProps?: TextProps;
  borderRadius?: number | string;
};
export const Button = ({
  backgroundColor = Colors.brand900,
  borderRadius = 7,
  fullWidth,
  outlineColor = Colors.brand900,
  ...rest
}: Props) => {
  return (
    <RNButton
      {...rest}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      style={fullWidth && styles.fullWidth}
      outlineColor={outlineColor}
      enableShadow
      labelStyle={styles.label}
    />
  );
};

const styles = StyleSheet.create({
  fullWidth: { width: '100%' },
  label: { fontWeight: '700' },
});
