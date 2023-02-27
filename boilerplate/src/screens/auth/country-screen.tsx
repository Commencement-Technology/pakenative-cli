import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import React, {useCallback, useMemo, useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../components/Button';
import {Checkbox} from '../../components/Checkbox';
import {Picker} from '../../components/Picker';
import {Screen} from '../../components/Screen';
import {countries} from '../../contants/countries';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../types/navigation-type';
import {Routes} from '../../navigations/Routes';

const CountryScreen = () => {
  const [country, setCountry] = useState<ItemValue>();
  const navigation = useNavigation<Navigation>();

  const handleValueChange = useCallback(
    (itemValue: ItemValue) => setCountry(itemValue as string),
    [],
  );

  const sortedCountries = useMemo(() => _.sortBy(countries, c => c.label), []);

  return (
    <Screen hasHeader headerProps={{onPress: () => navigation.goBack()}}>
      <View className="w-full mt-10">
        <Picker
          data={sortedCountries}
          label="Choose country"
          selectedValue={country}
          onValueChange={handleValueChange}
        />
        <View className="mt-5">
          <Checkbox text="I agree with the terms and conditions and the privacy policy" />
        </View>
      </View>
      <View className="flex flex-col gap-2 mt-9 w-full">
        <Button
          label="Sign me up"
          uppercase
          onPress={() => navigation.navigate(Routes.Onboarding)}
        />
      </View>
    </Screen>
  );
};

export default CountryScreen;
