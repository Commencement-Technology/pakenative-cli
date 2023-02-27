import React from 'react';
import {Text, View} from 'react-native';
import {Picker as RNPicker, PickerProps} from '@react-native-picker/picker';

export const Picker = ({
  label,
  data,
  ...rest
}: PickerProps & {label: string; data: {label: string; value: string}[]}) => {
  return (
    <View className="mt-5">
      <Text className="text-black font-medium text-base mb-1">{label}</Text>
      <RNPicker {...rest}>
        {data.map(d => (
          <RNPicker.Item label={d.label} value={d.value} key={d.value} />
        ))}
      </RNPicker>
    </View>
  );
};
