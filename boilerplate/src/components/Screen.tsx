import classNames from 'classnames';
import React, {ComponentProps, memo, ReactNode} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from './Header';

type Props = {
  children: ReactNode;
  hasHeader?: boolean;
  edges?: ('bottom' | 'left' | 'right' | 'top')[];
  headerProps?: ComponentProps<typeof Header>;
  useSafeArea?: boolean;
  center?: boolean;
  paddingHorizontal?: boolean;
};
export const Screen = memo(
  ({
    children,
    hasHeader,
    edges = ['top', 'bottom'],
    headerProps,
    useSafeArea = true,
    paddingHorizontal = true,
  }: Props): JSX.Element => {
    if (useSafeArea) {
      return (
        <SafeAreaView
          className={classNames('flex-1 h-screen w-screen', {
            'px-4': paddingHorizontal,
          })}
          edges={edges}>
          {hasHeader && <Header {...headerProps} />}
          <View className=" flex flex-1">{children}</View>
        </SafeAreaView>
      );
    }
    return (
      <View
        className={classNames('flex-1 h-screen w-screen', {
          'px-4': paddingHorizontal,
        })}>
        {hasHeader && <Header {...headerProps} />}
        <View className="flex flex-1">{children}</View>
      </View>
    );
  },
);
