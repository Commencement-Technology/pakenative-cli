/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigations/root-navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView className="flex-1">
        <RootNavigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
