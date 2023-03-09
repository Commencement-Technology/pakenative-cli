import React, {useCallback} from 'react';
import {Image} from '../components/Image';
import {Screen} from '../components/Screen';
import welcome from '../assets/images/welcome.png';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../types/navigation-type';
import {Routes} from '../navigations/Routes';
import Animated, {
  SlideInLeft,
  SlideInUp,
  BounceInUp,
  FadeInDown,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

const DURATION = 2000;

export const WelcomeScreen = () => {
  const navigation = useNavigation<Navigation>();

  const next = useCallback(
    () => navigation.navigate(Routes.Country),
    [navigation],
  );
  return (
    <Screen>
      <Animated.Text
        className="text-black font-black text-2xl text-center uppercase"
        entering={SlideInUp.duration(DURATION)}>
        Let's get started
      </Animated.Text>
      <Animated.Text
        className="text-black font-light text-sm text-center mb-10 uppercase"
        entering={SlideInLeft.duration(DURATION)}>
        Buy a Lambo!
      </Animated.Text>
      <Animated.View
        className="w-full h-1/3 mt-10"
        entering={BounceInUp.duration(DURATION).delay(DURATION)}>
        <Image source={welcome} className="w-full h-full flex-1" />
      </Animated.View>
      <Animated.View
        className="flex flex-col absolute bottom-2 w-full"
        entering={FadeInDown.duration(DURATION).delay(2 * DURATION)}
        style={styles.gap}>
        <Button social="apple" label="Continue with Apple" onPress={next} />
        <Button
          social="facebook"
          label="Continue with Facebook"
          onPress={next}
        />
        <Button social="google" label="Continue with Google" onPress={next} />
      </Animated.View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  gap: {gap: 8},
});
