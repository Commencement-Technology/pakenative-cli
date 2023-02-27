import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from '../navigations/Routes';

export type NavigationTypes = {
  [Routes.Welcome]: undefined;
  [Routes.Country]: undefined;
  [Routes.Onboarding]: undefined;
  [Routes.Notification]: undefined;
};

export type Navigation = NativeStackNavigationProp<NavigationTypes>;
