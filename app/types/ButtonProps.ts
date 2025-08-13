import { PressableProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import React from 'react';

export interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: PressableProps['onPress'];
  Value: React.ReactNode;
}
