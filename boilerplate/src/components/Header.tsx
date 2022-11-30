import React, { ReactNode } from 'react';
import { View, Text } from 'react-native-ui-lib';
import { LeftIcon } from './icons/LeftIcon';

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  title?: string;
};
export const Header = ({ left, right, title }: Props): JSX.Element => {
  return (
    <View>
      {left ?? <LeftIcon fontWeight="black" />}
      <Text>{title}</Text>
      {right}
    </View>
  );
};
