// components/icons/custom/CustomMapPinBase.tsx
import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface CustomSvgIconProps {
  size?: number | string;
  color?: string;

  [key: string]: any;
}

export const CustomMapPinBase: React.FC<CustomSvgIconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 32 32' fill={color} {...props}>
      <Path d='M22.75 8c0-0.010 0-0.022 0-0.034 0-3.728-3.022-6.75-6.75-6.75s-6.75 3.022-6.75 6.75c0 3.464 2.609 6.318 5.969 6.705l0.031 0.003v15.326c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-15.326c3.383-0.382 5.989-3.222 6-6.673v-0.001zM16 13.25c-2.899 0-5.25-2.351-5.25-5.25s2.351-5.25 5.25-5.25c2.899 0 5.25 2.351 5.25 5.25v0c-0.004 2.898-2.352 5.246-5.25 5.25h-0z'></Path>
    </Svg>
  );
};
