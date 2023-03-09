import React from 'react';
import {Text, View} from 'react-native';
import {Screen} from '../../components/Screen';
import {CATEGORIES} from '../../contants/categories';
import {Categories} from './Categories';
import user from '../../assets/images/user.jpg';
import {Image} from '../../components/Image';
import {Input} from '../../components/Input';
import {SearchIcon} from '../../components/icons/SearchIcon';
import {Colors} from '../../theme/colors';
import {Contents} from './Contents';
import {CONTENTS} from '../../contants/contents';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <Screen
      hasHeader
      headerProps={{
        left: null,
        right: <Image source={user} className="w-12 h-12 rounded-full" />,
      }}>
      <View className="mt-14">
        <Text className="text-base text-black">Hi Pakenfit,</Text>
        <Text className="text-3xl font-black">
          What Lamborghini do you want today ?
        </Text>
        <Input
          className="mt-7"
          placeholder="What lambo do you want ?"
          icon={<SearchIcon width={23} height={23} color={Colors.ZINC300} />}
        />
        <View className="mt-10">
          <Categories data={CATEGORIES} title="Models" />
        </View>

        <ScrollView
          className="mt-5 flex flex-row"
          showsHorizontalScrollIndicator={false}>
          <Contents data={CONTENTS} />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default HomeScreen;
