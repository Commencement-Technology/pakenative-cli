import React, {ReactNode, useMemo} from 'react';
import {View, ViewProps} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
  const {top} = useSafeAreaInsets();
  const leftIcon = useMemo(() => {
    if (left === null) {
      return null;
    }
    return left || <LeftIcon fontWeight="black" onPress={onPress} />;
  }, [left, onPress]);
  return (
    <View style={[styles.header, {top}]} {...rest}>
      {leftIcon}
      <Text>{title}</Text>
      <View style={styles.right}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 15,
    zIndex: 50,
    width: '100%',
    justifyContent: 'space-between',
  },
  right: {
    alignSelf: 'flex-end',
  },
});
