import { View, Text,Modal ,Pressable } from 'react-native'
import React from 'react'

const Categorydetails = ({setModalVisible,modalVisible,togglemodel,bg}) => {

  return (
    <View>
       <Modal
       animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(true)}
         > 
          <View 
          style={{backgroundColor:(bg.color),height:'100%',width:'100%',top:30,borderRadius:30,padding:10,gap:30}}>
            <Pressable onPress={togglemodel} style={{backgroundColor:'black',opacity:.47,height:10,width:95,top:10,borderRadius:10,left:'39.7%'}}></Pressable>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:40}}>
            <Text style={{fontSize:35,fontWeight:800,letterSpacing:1,opacity:.9,color:(bg.fontcolor)}}>{bg.name}</Text>
            <Text style={{fontSize:28,color:(bg.fontcolor),fontWeight:500}}>✎</Text>
            </View>

          </View>
      </Modal>
    </View>
  )
}

export default Categorydetails