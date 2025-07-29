import { View, Text,ScrollView } from 'react-native'
import React from 'react'

const Storyview = () => {
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator ={false}
      contentContainerStyle={{display:"flex",flexDirection:"row",gap:10,}}>
        <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
           <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
          <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
          <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
          <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
          <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
          <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
          <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#EA047E"}}></View>
         <View style={{height:80,width:80,borderRadius:"50%",backgroundColor:"#4DFFBE"}}></View>
      </ScrollView >
  )
}

export default Storyview