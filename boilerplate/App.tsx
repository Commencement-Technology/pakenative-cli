import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Assets, Colors, Typography } from 'react-native-ui-lib';

const App = () => {
  Colors.loadColors({
    blackMatte: '#28282B',
    smoothGray: '#F6F6F6',
    red900: '#7f1d1d',
    abbeyBlack: '#494F55',
    brand900: '#0f172a',
  });

  Assets.loadAssetsGroup('images', {
    backgroundImage: require('./src/assets/images/background.jpg'),
  });

  Typography.loadTypographies({
    brand: { fontSize: 65, fontWeight: '900' },
    h1: { fontSize: 58, fontWeight: '900' },
    h2: { fontSize: 46, fontWeight: '900' },
    h3: { fontSize: 35, fontWeight: '800' },
    h4: { fontSize: 25, fontWeight: '700' },
    quote: {
      fontSize: 20,
      fontWeight: '600',
      fontStyle: 'italic',
    },
  });
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
