import { View, Text,Modal } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View>
    <Modal
     visible={false}
      animationType="slide"
      transparent={true}>
      <View style={{backgroundColor:'rgba(224, 223, 223, 0.55)',flex:1,marginTop:300,borderTopRightRadius:50,borderTopLeftRadius:50,borderWidth:0,alignItems:'center',padding:3}}>
      <View style={{height:8,width:90,backgroundColor:'black',marginTop:5,borderRadius:10,opacity:1,marginBottom:50}}></View>
      <View style={{height:90,backgroundColor:'#EBEFF5',width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{color:"black",fontSize:30}}>Inbox</Text></View>
      <View style={{height:90,backgroundColor:'#61DEA4',width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{color:"white",fontSize:30}}>Work</Text></View>
      <View style={{height:90,backgroundColor:'#F45E6D',width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{color:"white",fontSize:30}}>Shopping</Text></View>
      <View style={{height:90,backgroundColor:'#FFE761',width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{color:"black",fontSize:30}}>Family</Text></View>
      <View style={{height:90,backgroundColor:'#B678FF',width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{color:"white",fontSize:30}}>Personal</Text></View>
      
      </View>
      </Modal>
    </View>
  )
}

export default Category