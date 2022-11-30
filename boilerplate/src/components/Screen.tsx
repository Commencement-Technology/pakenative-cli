import { View } from 'react-native-ui-lib';
import React, { ComponentProps, memo, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './Header';

type Props = {
  children: ReactNode;
  hasHeader?: boolean;
  edges?: ('bottom' | 'left' | 'right' | 'top')[];
  headerProps?: ComponentProps<typeof Header>;
  useSafeArea?: boolean;
};
export const Screen = memo(
  ({
    children,
    hasHeader,
    edges = ['top', 'bottom'],
    headerProps,
    useSafeArea = true,
  }: Props): JSX.Element => {
    if (useSafeArea) {
      return (
        <SafeAreaView style={styles.container} edges={edges}>
          {hasHeader && <Header {...headerProps} />}
          {children}
        </SafeAreaView>
      );
    }
    return (
      <View style={styles.container}>
        {hasHeader && <Header {...headerProps} />}
        {children}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
