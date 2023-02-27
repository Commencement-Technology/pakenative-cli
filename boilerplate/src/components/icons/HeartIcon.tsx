import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {ICON_SIZE} from '../../contants/sizes';
import {Colors} from '../../theme/colors';

export const HeartIcon = ({color = Colors.BRAND, ...rest}: SvgProps) => (
  <Svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 32 32"
    fill="none"
    {...rest}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z"
      fill={color}
    />
  </Svg>
);