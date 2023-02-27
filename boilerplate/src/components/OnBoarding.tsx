import React, {useCallback} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Source} from 'react-native-fast-image';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from '../theme/colors';
import {OnboardingItemType} from '../types/onboarding-item';
import {Button} from './Button';
import {Image} from './Image';

type Props = {
  items: OnboardingItemType[];
  onFinish: () => void;
};
export const OnBoarding = ({items, onFinish}: Props) => {
  const translateX = useSharedValue(0);
  const {width} = useWindowDimensions();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const activeIndex = useDerivedValue(() =>
    Math.round(translateX.value / width),
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  const onNext = useCallback(() => {
    if (activeIndex.value === items.length - 1) {
      onFinish();
    }
    scrollRef.current?.scrollTo({
      x: width * (activeIndex.value + 1),
    });
  }, [activeIndex.value, items.length, onFinish, scrollRef, width]);
  return (
    <View className="flex-1">
      <Animated.ScrollView
        ref={scrollRef}
        className="flex-1"
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}>
        {items.map(item => (
          <OnBoardingItem {...item} key={item.index} translateX={translateX} />
        ))}
      </Animated.ScrollView>
      <View className="flex flex-row justify-between items-center mb-10 px-5">
        <View className="flex flex-row" style={styles.gap}>
          {items.map(item => (
            <Dot
              key={item.index}
              index={item.index}
              activeIndex={activeIndex}
              translateX={translateX}
            />
          ))}
        </View>

        <View>
          <Button label="Next" className="px-10" onPress={onNext} />
        </View>
      </View>
    </View>
  );
};

const OnBoardingItem = ({
  image,
  title,
  description,
  index,
  translateX,
}: OnboardingItemType & {translateX: SharedValue<number>}) => {
  const {width} = useWindowDimensions();
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const animationStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {transform: [{scale}]};
  });

  return (
    <View className="w-screen h-screen items-center justify-center">
      <Animated.View className="w-full h-1/3 " style={animationStyle}>
        <Image
          source={image as Source}
          className="w-full h-full"
          resizeMode="contain"
        />
      </Animated.View>
      <View className="p-5">
        <Text className="text-2xl font-black text-center">{title}</Text>
        <Text className="text-xs font-light text-center mt-2">
          {description}
        </Text>
      </View>
    </View>
  );
};

const Dot = ({
  activeIndex,
  index,
  translateX,
}: {
  translateX: SharedValue<number>;
  activeIndex: SharedValue<number>;
  index: number;
}) => {
  const {width} = useWindowDimensions();
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const animationStyle = useAnimatedStyle(() => {
    const isActive = activeIndex.value === index;
    const dotWidth = interpolate(
      translateX.value,
      inputRange,
      [10, 23, 10],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.3, 1, 0.2],
      Extrapolate.CLAMP,
    );

    return {
      backgroundColor: withTiming(
        isActive ? Colors.BLACKMATTE : Colors.ABBEYBLACK,
        {
          duration: 100,
        },
      ),

      width: dotWidth,
      opacity,
    };
  });

  return (
    <Animated.View
      className="h-2 w-2 rounded-md border-2"
      style={animationStyle}
    />
  );
};

const styles = StyleSheet.create({
  gap: {gap: 5},
});
