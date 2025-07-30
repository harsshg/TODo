import { View, Text,Modal ,Pressable, SafeAreaView } from 'react-native'
import React from 'react'

const Categorydetails = ({setModalVisible,modalVisible,togglemodel,bg,taskcolorwise}) => {

  return (
    <View>
       <Modal
       animationType="slide"
        transparent={true}
        visible={modalVisible} //here add modalVisible
        onRequestClose={() => setModalVisible(true)}
         > 
         
          <View 
          style={{backgroundColor:(bg.color),height:'100%',width:'100%',top:30,borderRadius:30,padding:10,gap:30}}>

            {/* HEAD */}

            <Pressable onPress={togglemodel} style={{backgroundColor:'black',opacity:.47,height:10,width:95,top:10,borderRadius:10,left:'39.7%'}}></Pressable>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:40}}>
            <Text style={{fontSize:35,fontWeight:800,letterSpacing:1,opacity:.9,color:(bg.fontcolor)}}>{bg.name}</Text>
            <Text style={{fontSize:28,color:(bg.fontcolor),fontWeight:500}}>✎</Text>
            </View>
            
           

          {/* Task view will be here  */}
          { taskcolorwise.map((task:any)=>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20,marginTop:10,paddingLeft:8}}>
            {/* <Text style={{borderWidth:4,borderRadius:50,height:30,width:30,opacity:.3}}></Text> */}
            <View style={{borderBottomColor:(bg.fontcolor),borderBottomWidth:1,paddingBottom:15,width:'100%'}}>
            <Text style={{fontSize:25,fontWeight:500,color:(bg.fontcolor)}}>{task.title}</Text>
            <Text style={{color:(bg.fontcolor),opacity:.9}}>{task.time}</Text>
            </View>
            </View>)}

            

            


            
            
         </View>
      </Modal>
    </View>
  )
}

export default Categorydetails