import { Pressable, Text } from 'react-native';
import React from 'react';
import { ButtonProps } from '../../types';
import {Icons,Texts} from '../index';

const Buttons: React.FC<ButtonProps> = ({ style, onPress, Value,Iconname,Iconsize,Iconstyle,Iconcolor,IcononPress,Textstyle,TextValue }) => {
  return (
    <Pressable style={style} onPress={onPress}>
          {Value}

          {Iconname?<Icons
            name={Iconname}
            size={Iconsize}
            style={Iconstyle}
            color={Iconcolor}
            onPress={IcononPress}
          />:null}

          {TextValue?<Texts style={Textstyle} Value={TextValue}/>:null}
          

    </Pressable>
  );
};

export default Buttons;



