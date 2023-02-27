import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Category} from '../../components/Category';
import {CategoryType} from '../../types/category-type';

type Props = {
  data: CategoryType[];
  title: string;
};
export const Categories = ({data, title}: Props) => {
  return (
    <View>
      <Text className="text-xl font-black">{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row mt-5" style={{gap: 15}}>
          {data.map((category, index) => (
            <Category item={category} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
