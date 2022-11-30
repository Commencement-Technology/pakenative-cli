import React from 'react';
import { Text as RNText, TextProps } from 'react-native-ui-lib';
import { ReactNode } from 'react';

type Props = TextProps & {
  children: ReactNode;
  caption?: boolean;
  title?: boolean;
  subtitle?: boolean;
};

export const Text = ({ children, ...rest }: Props): JSX.Element => {
  return <RNText {...rest}>{children}</RNText>;
};
