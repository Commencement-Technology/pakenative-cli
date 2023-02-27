import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import {CategoryType} from '../types/category-type';

type Props = PressableProps & {
  item: CategoryType;
};
export const Category = ({item}: Props) => {
  const {label, icon} = item;
  return (
    <Pressable className="flex flex-row gap-2 bg-brand p-5 rounded-3xl justify-center items-center">
      {icon}
      <Text>{label}</Text>
    </Pressable>
  );
};
