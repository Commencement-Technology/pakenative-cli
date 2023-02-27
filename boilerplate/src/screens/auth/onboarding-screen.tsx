import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {OnBoarding} from '../../components/OnBoarding';
import {Routes} from '../../navigations/Routes';
import {Navigation} from '../../types/navigation-type';
import {Screen} from '../../components/Screen';
import {LAMBOS} from '../../contants/lambos';
import {Button} from '../../components/Button';
import {View} from 'react-native';

const OnboardingScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <Screen edges={['top']} paddingHorizontal={false}>
      <View className="self-end pr-5">
        <Button
          label="Skip"
          clear
          onPress={() => navigation.navigate(Routes.Notification)}
        />
      </View>

      <OnBoarding
        items={LAMBOS}
        onFinish={() => navigation.navigate(Routes.Notification)}
      />
    </Screen>
  );
};

export default OnboardingScreen;
