import { View, Text,StyleProp,ViewStyle } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name,size,color,style,onPress}:{name:string,size:number,color:string,style:StyleProp<ViewStyle>,onPress?:()=>void}) => {
  return (
    <Icon name={name} size={size} style={style} color={color} onPress={onPress} />
  )
}

export default Icons