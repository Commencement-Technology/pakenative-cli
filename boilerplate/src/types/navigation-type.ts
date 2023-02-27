import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from '../navigations/Routes';

export type NavigationTypes = {
  [Routes.Welcome]: undefined;
  [Routes.Country]: undefined;
  [Routes.Onboarding]: undefined;
  [Routes.Notification]: undefined;
  [Routes.HomeTabNav]: undefined;
};

export type HomeNavigationTypes = {
  [Routes.Home]: undefined;
  [Routes.Favorite]: undefined;
  [Routes.Chat]: undefined;
  [Routes.Profile]: undefined;
};

export type Navigation = NativeStackNavigationProp<NavigationTypes>;
export type TabNavigation = BottomTabNavigationProp<HomeNavigationTypes>;
