import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { TextField, TextFieldProps } from 'react-native-ui-lib/src/incubator';

export const Input = (props: TextFieldProps): JSX.Element => {
  return <TextField {...props} useGestureHandlerInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.blackMatte,
    borderWidth: 0.3,
    borderRadius: 99,
    height: 37,
    padding: 5,
  },
});
