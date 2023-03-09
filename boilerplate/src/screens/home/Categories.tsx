import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Text, View} from 'react-native';
import {Category} from '../../components/Category';

export const Separator = () => <View className="w-2" />;

type Props = {
  data: {label: string; isActive?: boolean}[];
  title: string;
};
export const Categories = ({data, title}: Props) => {
  return (
    <>
      <Text className="text-xl font-black mb-3">{title}</Text>
      <FlashList
        data={data}
        renderItem={({item}) => (
          <Category label={item.label} isActive={item.isActive} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        estimatedItemSize={79}
      />
    </>
  );
};
