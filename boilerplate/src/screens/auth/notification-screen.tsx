import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../types/navigation-type';
import {Screen} from '../../components/Screen';
import {Lottie} from '../../components/Lottie';
import {Text, View} from 'react-native';
import {Button} from '../../components/Button';

const NotificationScreen = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <Screen>
      <View className="w-full h-1/3 justify-center items-center mt-10">
        <Lottie
          source={require('../../assets/animations/notification-bell-lottie-animation.json')}
          width={250}
          height={200}
        />
      </View>
      <View className="p-5">
        <Text className="text-2xl font-black text-center">
          Never miss a thing
        </Text>
        <Text className="text-xs font-light text-center mt-2">
          Changes to you order ? Exciting new Lambos ? Get our push
          notifications to keep up to date with of it!
        </Text>
      </View>

      <View className="p-5 mt-10 flex flex-col gap-5">
        <Button label="Yes, please" />
        <Button label="Maybe later" clear />
      </View>
    </Screen>
  );
};

export default NotificationScreen;
