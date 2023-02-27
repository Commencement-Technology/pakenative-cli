import React from 'react';
import {Routes} from './Routes';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {NavigationTypes} from '../types/navigation-type';
import {WelcomeScreen} from '../screens/welcome-screen';
import CountryScreen from '../screens/auth/country-screen';
import OnboardingScreen from '../screens/auth/onboarding-screen';
import NotificationScreen from '../screens/auth/notification-screen';
import HomeNavigation from './home-navigation';

const Stack = createNativeStackNavigator<NavigationTypes>();
const options: NativeStackNavigationOptions = {
  headerShown: false,
};

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Welcome}
        component={WelcomeScreen}
        options={options}
      />
      <Stack.Screen
        name={Routes.Country}
        component={CountryScreen}
        options={options}
      />
      <Stack.Screen
        name={Routes.Onboarding}
        component={OnboardingScreen}
        options={options}
      />
      <Stack.Screen
        name={Routes.Notification}
        component={NotificationScreen}
        options={options}
      />
      <Stack.Screen
        name={Routes.HomeTabNav}
        component={HomeNavigation}
        options={options}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
