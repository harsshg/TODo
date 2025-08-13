import React from 'react';
import { Text } from 'react-native';
import { TextsProps } from '../../types';

const Texts: React.FC<TextsProps> = ({ style, Value }) => {
  return <Text style={style}>{Value}</Text>;
};

export default Texts;
