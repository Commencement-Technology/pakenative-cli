import React, { useCallback, useState } from 'react';
import { Assets, View } from 'react-native-ui-lib';
import { Screen } from '../components/Screen';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import Animated, {
  FadeIn,
  SlideInLeft,
  SlideInUp,
} from 'react-native-reanimated';
import { Text } from '../components/Text';
import { useModalize } from 'react-native-modalize';
import { Modalize } from '../components/Modalize';
import { Register } from './auth/Register';
import { Login } from './auth/Login';

const DURATION = 2000;

const WelcomeScreen = (): JSX.Element => {
  const { ref, open } = useModalize();
  const [what, setWhat] = useState<'login' | 'register'>('login');

  const onLogin = useCallback(() => {
    setWhat('login');
    open();
  }, [open]);

  const onRegister = useCallback(() => {
    setWhat('register');
    open();
  }, [open]);
  return (
    <>
      <ImageBackground
        source={Assets.images.backgroundImage}
        style={styles.background}
      />
      <Screen useSafeArea={false}>
        <View style={styles.view}>
          <Animated.View
            style={styles.brand}
            entering={SlideInUp.duration(DURATION)}>
            <Text brand>
              <Text brand900>FIT</Text>
              <Text red900>.</Text>
            </Text>
          </Animated.View>
          <Animated.View
            style={styles.quote}
            entering={SlideInLeft.duration(DURATION)}>
            <Text blackMatte quote center>
              The body achieves what the mind believes.
            </Text>
          </Animated.View>

          <Animated.View
            style={styles.buttonView}
            entering={FadeIn.duration(DURATION).delay(DURATION)}>
            <Button label="Register" onPress={onRegister} fullWidth />
            <Button
              label="Login"
              marginT-10
              fullWidth
              outline
              onPress={onLogin}
            />
          </Animated.View>
        </View>
        <Modalize
          ref={ref}
          title={what === 'register' ? 'Join FIT' : 'Welcome back'}>
          {what === 'register' ? <Register /> : <Login />}
        </Modalize>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  background: { height: '100%' },
  view: {
    position: 'absolute',
    bottom: 70,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  brand: { alignSelf: 'center' },
  quote: { marginTop: 5, paddingHorizontal: 50, alignSelf: 'center' },
  buttonView: { marginTop: 50 },
});

export default WelcomeScreen;
