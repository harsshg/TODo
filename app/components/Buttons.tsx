import { View, Text, Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'
import React from 'react'


interface ButtonProps {
  style?: StyleProp<ViewStyle>
  onPress?: PressableProps['onPress']
  Value: React.ReactNode
}

const Buttons = ({style, onPress, Value}: ButtonProps) => {
  return (
    <Pressable
    style={style}
    onPress={onPress}
    >
     {Value}
    </Pressable>
  )
}

export default Buttons