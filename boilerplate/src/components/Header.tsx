import React, {ReactNode, useMemo} from 'react';
import {View, ViewProps} from 'react-native';
import {Text} from 'react-native';
import {LeftIcon} from './icons/LeftIcon';

type Props = ViewProps & {
  left?: ReactNode | null;
  right?: ReactNode;
  title?: string;
  onPress?: () => void;
};
export const Header = ({
  left,
  right,
  title,
  onPress,
  ...rest
}: Props): JSX.Element => {
  const leftIcon = useMemo(() => {
    if (left === null) {
      return null;
    }
    return left || <LeftIcon fontWeight="black" onPress={onPress} />;
  }, [left, onPress]);
  return (
    <View
      {...rest}
      className="flex flex-row items-center z-50 w-full justify-between">
      {leftIcon}
      <Text>{title}</Text>
      {right}
    </View>
  );
};
