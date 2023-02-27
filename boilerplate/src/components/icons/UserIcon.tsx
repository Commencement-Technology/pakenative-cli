import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {ICON_SIZE} from '../../contants/sizes';
import {Colors} from '../../theme/colors';

export const UserIcon = ({color = Colors.BRAND, ...rest}: SvgProps) => (
  <Svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8ZM5.43 16.902C7.057 16.223 9.224 16 12 16c2.771 0 4.935.22 6.559.898 1.742.727 2.812 1.963 3.382 3.76A1.03 1.03 0 0 1 20.959 22H3.035c-.69 0-1.188-.67-.978-1.335.568-1.797 1.634-3.033 3.374-3.762Z"
      fill={color}
    />
  </Svg>
);
