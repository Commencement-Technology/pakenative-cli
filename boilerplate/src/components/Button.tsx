import classNames from 'classnames';
import React, {FunctionComponent, SVGProps, useMemo} from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import {Apple} from './icons/Apple';
import {Facebook} from './icons/Facebook';
import {Google} from './icons/Google';

type ButtonProps = PressableProps & {
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  social?: 'apple' | 'facebook' | 'google';
  label: string;
  rounded?: boolean;
  uppercase?: boolean;
  clear?: boolean;
};
export const Button = ({
  icon: Icon,
  social,
  label,
  rounded = true,
  uppercase,
  clear,
  ...rest
}: ButtonProps) => {
  const filteredIcon = useMemo(() => {
    if (social === 'apple') {
      return <Apple />;
    }
    if (social === 'facebook') {
      return <Facebook />;
    }
    if (social === 'google') {
      return <Google />;
    }
    if (Icon) {
      return <Icon />;
    }
    return null;
  }, [Icon, social]);

  return (
    <Pressable
      className={classNames(
        'p-2 justify-center items-center flex flex-row bg-brand',
        {
          'bg-black': social === 'apple',
          'bg-facebook': social === 'facebook',
          'bg-google': social === 'google',
          'rounded-full': rounded,
          'rounded-md': !rounded,
          'bg-transparent': clear,
        },
      )}
      {...rest}
      style={styles.gap}>
      {filteredIcon}
      <Text
        className={classNames('text-white text-lg font-medium', {
          uppercase: uppercase,
          'text-brand': clear,
        })}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gap: {gap: 4},
});
