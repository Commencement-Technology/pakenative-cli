import React from 'react';
import LottieView, {AnimatedLottieViewProps} from 'lottie-react-native';

export function Lottie({
  autoPlay = true,
  loop = true,
  width,
  height,
  ...rest
}: AnimatedLottieViewProps & {
  width?: number | string;
  height?: number | string;
}) {
  return (
    <LottieView
      autoPlay={autoPlay}
      loop={loop}
      {...rest}
      style={{width, height}}
    />
  );
}
