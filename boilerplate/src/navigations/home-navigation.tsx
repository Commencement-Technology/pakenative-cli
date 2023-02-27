import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/home-screen';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {HomeNavigationTypes} from '../types/navigation-type';
import {Routes} from './Routes';
import {Colors} from '../theme/colors';
import {TABBAR_HEIGHT} from '../contants/sizes';
import {HomeIcon} from '../components/icons/HomeIcon';
import {ChatIcon} from '../components/icons/ChatIcon';
import {UserIcon} from '../components/icons/UserIcon';
import {HeartIcon} from '../components/icons/HeartIcon';

const LibraryScreen = () => (
  <View>
    <Text>Lib Screen</Text>
  </View>
);

const Dot = () => <View className="w-1 h-1 bg-white rounded-full mt-1" />;

const getIcon = (
  route: RouteProp<HomeNavigationTypes, keyof HomeNavigationTypes>,
  color: string,
  focused: boolean,
) => {
  if (route.name === Routes.Home) {
    return (
      <View className="flex flex-col items-center justify-center">
        <HomeIcon color={color} />
        {focused && <Dot />}
      </View>
    );
  }
  if (route.name === Routes.Chat) {
    return (
      <View className="flex flex-col items-center justify-center">
        <ChatIcon color={color} />
        {focused && <Dot />}
      </View>
    );
  }
  if (route.name === Routes.Profile) {
    return (
      <View className="flex flex-col items-center justify-center">
        <UserIcon color={color} />
        {focused && <Dot />}
      </View>
    );
  }
  return (
    <View className="flex flex-col items-center justify-center">
      <HeartIcon color={color} />
      {focused && <Dot />}
    </View>
  );
};

const Tab = createBottomTabNavigator<HomeNavigationTypes>();

export default function HomeNavigation(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          return getIcon(route, color, focused);
        },
        tabBarActiveTintColor: Colors.BRAND,
        tabBarInactiveTintColor: Colors.SMOOTHGRAY,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.BLACKMATTE,
          height: TABBAR_HEIGHT,
          padding: 10,
          marginHorizontal: 10,
          marginBottom: 20,
          borderRadius: 23,
          elevation: 10,
          shadowOffset: {width: 10, height: 10},
        },
      })}>
      <Tab.Screen name={Routes.Home} component={HomeScreen} />
      <Tab.Screen name={Routes.Favorite} component={LibraryScreen} />
      <Tab.Screen name={Routes.Chat} component={LibraryScreen} />
      <Tab.Screen name={Routes.Profile} component={LibraryScreen} />
    </Tab.Navigator>
  );
}
