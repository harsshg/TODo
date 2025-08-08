import { View, Text,StyleProp,TextStyle } from 'react-native'
import React from 'react'

const Texts = ({style,Value}:{style:StyleProp<TextStyle>,Value:any}) => {
  return (
    <Text style={style}>{Value}</Text>
  )
}

export default Texts