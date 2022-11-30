import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Screen } from '../../components/Screen';

export const Login = () => {
  return (
    <Screen>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry marginT-20 />
      <Button label="Login" marginT-20 />
    </Screen>
  );
};
