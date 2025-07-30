import { View, Text,Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import Categorydetails from './Categorydetails';


const Category = () => {
  const[modalVisible,setModalVisible]=useState(false);
  

  const togglemodel=()=>{
    setModalVisible(!modalVisible);
  }
  const[bg,setbg]=useState('')
  const[title,settitle]=useState('')

  const togglemodelviatask=(task)=>{
    setbg (task)
    settitle(task.name)
    setModalVisible(true)
  } 
 
  
  let obj =[
  { id: 1, color:'#dadada',name:'Inbox',fontcolor:'black' },
  { id: 2, color:'#61DEA4',name:'Work',fontcolor:'white' },
  { id: 3, color:'#F45E6D',name:'Shopping',fontcolor:'white' },
  { id: 4, color:'#FFE761',name:'Family',fontcolor:'black' },
  { id: 5, color:'#B678FF',name:'Personal',fontcolor:'white'}, 
];
  return (
      
     <View style={{marginTop:30}} >
      {obj.map((task)=>(
       <Pressable onPress={()=>togglemodelviatask(task)} key ={task.id} style={{height:90,backgroundColor:(task.color),width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{color:(task.fontcolor),fontSize:30,fontWeight:500}}>{task.name}</Text></Pressable>
       
      ))}
      {/* <View style={{height:90,backgroundColor:'#dadada',width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}}><Text style={{color:"black",fontSize:30}}>Inbox</Text></View> */}
      
     <Categorydetails modalVisible={modalVisible} setModalVisible={setModalVisible} togglemodel={togglemodel} bg ={bg} title={title}/>


     </View>
  )
}

export default Category