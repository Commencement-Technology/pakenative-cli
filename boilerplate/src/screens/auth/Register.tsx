import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Screen } from '../../components/Screen';

export const Register = () => {
  return (
    <Screen>
      <Input placeholder="Username" />
      <Input placeholder="Email" marginT-20 />
      <Input placeholder="Password" secureTextEntry marginT-20 />
      <Button label="Join" marginT-20 />
    </Screen>
  );
};
