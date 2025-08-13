import { Pressable } from 'react-native';
import React from 'react';
import { ButtonProps } from '../../types';

const Buttons: React.FC<ButtonProps> = ({ style, onPress, Value }) => {
  return (
    <Pressable style={style} onPress={onPress}>
      {Value}
    </Pressable>
  );
};

export default Buttons;
