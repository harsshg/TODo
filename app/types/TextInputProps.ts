import { StyleProp, TextStyle } from 'react-native';

export interface TextInputsProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
}
