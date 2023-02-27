import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {ICON_SIZE} from '../../contants/sizes';
import {Colors} from '../../theme/colors';

export const SearchIcon = ({color = Colors.ABBEYBLACK, ...rest}: SvgProps) => (
  <Svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}>
    <Path
      d="m15 15 6 6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);
