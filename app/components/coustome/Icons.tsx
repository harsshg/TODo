import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconsProps } from '../../types';

const Icons: React.FC<IconsProps> = ({ name, size, color, style, onPress }) => {
  return (
    <Icon
      name={name}
      size={size}
      style={style}
      color={color}
      onPress={onPress}
    />
  );
};

export default Icons;
