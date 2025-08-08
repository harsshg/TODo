import { View, Text, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'

interface TextInputsProps {
  placeholder?: string
  value?: string
  onChangeText?: (text: string) => void
  style?: StyleProp<TextStyle>
}

const TextInputs = ({placeholder, value, onChangeText, style}: TextInputsProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style}
    />
  )
}

export default TextInputs