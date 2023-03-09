import classNames from 'classnames';
import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';

type Props = PressableProps & {
  label: string;
  isActive?: boolean;
};
export const Category = ({label, isActive}: Props) => {
  return (
    <Pressable
      className={classNames(
        'flex flex-row rounded-full justify-center py-2 px-3',
        {'bg-brand': isActive, 'bg-zinc-300': !isActive},
      )}>
      <Text>{label}</Text>
    </Pressable>
  );
};
