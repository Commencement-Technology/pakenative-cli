import React from 'react';
import {TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from '../theme/colors';
import {SearchIcon} from './icons/SearchIcon';

export const SearchBar = (props: TextInputProps) => {
  return (
    <View>
      <View className="absolute top-9 ml-3">
        <SearchIcon />
      </View>

      <TextInput
        {...props}
        className="h-10 border-2 rounded-full border-gray-400 text-center opacity-1"
        placeholderTextColor={Colors.ABBEYBLACK}
      />
    </View>
  );
};
