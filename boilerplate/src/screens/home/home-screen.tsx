import React from 'react';
import {Text, View} from 'react-native';
import {Screen} from '../../components/Screen';
import {CATEGORIES} from '../../contants/categories';
import {Categories} from './Categories';
import user from '../../assets/images/user.jpg';
import {Image} from '../../components/Image';
import {SearchBar} from '../../components/SearchBar';

const HomeScreen = () => {
  return (
    <Screen
      hasHeader
      headerProps={{
        left: null,
        right: <Image source={user} className="w-12 h-12 rounded-full" />,
      }}>
      <View className="mt-20">
        <Text className="text-base text-black">Hi Pakenfit,</Text>
        <Text className="text-3xl font-black">
          What Lamborghini do you want today ?
        </Text>
        <SearchBar className="mt-7" placeholder="What lambo do you want ?" />
        <View className="mt-10">
          <Categories data={CATEGORIES} title="Models" />
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;
