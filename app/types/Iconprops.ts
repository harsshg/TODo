import { StyleProp, ViewStyle } from 'react-native';

export interface IconsProps {
  name: string;
  size: number;
  color: string;
  style: StyleProp<ViewStyle>;
  onPress?: () => void;
}
