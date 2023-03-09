import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../theme/colors';
import {CategoryItem} from '../types/categority-item';
import {HeartIcon} from './icons/HeartIcon';
import {Image} from './Image';

const Favoris = () => (
  <View className="absolute right-2 top-3 z-20 bg-slate-100 rounded-full">
    <HeartIcon color={Colors.ZINC300} />
  </View>
);

export const Card = ({title, image, description}: CategoryItem) => {
  return (
    <View className="rounded-2xl bg-white w-60 h-auto pt-2 pb-9 px-3">
      <Favoris />
      <Image source={image} className="w-56 h-40 rounded-2xl" />
      <View className="mt-1">
        <Text className="text-xl font-black">{title}</Text>
        <Text className="text-base">{description}</Text>
      </View>
    </View>
  );
};
