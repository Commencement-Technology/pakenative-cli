import {SvgProps} from 'react-native-svg';
export type IconProps = Omit<SvgProps, 'width' | 'height'> & {size?: number};
