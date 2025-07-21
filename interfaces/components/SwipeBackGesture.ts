import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface SwipeBackGestureProps {
  readonly children: React.ReactNode;
  readonly enabled?: boolean;
  readonly style?: StyleProp<ViewStyle>;
}
