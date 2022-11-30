import React from 'react';
import { Routes } from './Routes';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NavigationTypes } from '../types/navigation.type';
import WelcomeScreen from '../screens/WelcomeScreen';

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
    </Stack.Navigator>
  );
}

export default RootNavigation;
