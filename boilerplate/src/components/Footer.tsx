import React from 'react';
import { View } from 'react-native-ui-lib';
import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

type Props = { children: ReactNode };
export const Footer = ({ children }: Props): JSX.Element => {
  const { bottom } = useSafeAreaInsets();
  return <View style={[styles.footer, { bottom }]}>{children}</View>;
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    width: '100%',
    padding: 4,
  },
});
