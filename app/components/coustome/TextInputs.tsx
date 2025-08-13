import React from 'react';
import { TextInput } from 'react-native';
import { TextInputsProps } from '../../types/index';

const TextInputs: React.FC<TextInputsProps> = ({
  placeholder,
  value,
  onChangeText,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style}
    />
  );
};

export default TextInputs;
