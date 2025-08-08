import { View, Text,Modal ,Pressable, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import {Modals, Texts} from './index'

interface Task {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
  rightd: number;
}

interface CategoryDetailsProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  togglemodel: () => void;
  bg: { color: string; name: string; fontcolor: string } | null;
  taskcolorwise: Task[];
  onEditTask?: (taskId: number, newTitle: string) => void;
}

const Categorydetails: React.FC<CategoryDetailsProps> = ({setModalVisible,modalVisible,togglemodel,bg,taskcolorwise,onEditTask}) => {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editText, setEditText] = useState('');

  const startEdit = (task: Task) => {
    setEditingTask(task);
    setEditText(task.title);
  };

  const saveEdit = () => {
    if (editingTask && onEditTask) {
      onEditTask(editingTask.id, editText);
      setEditingTask(null);
      setEditText('');
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditText('');
  };

  return (
    <View>
       <Modals
       animationType={"slide"}
        transparent={true}
        visible={modalVisible} //here add modalVisible
        onRequestClose={() => setModalVisible(true)}
        Value={<View 
          style={{backgroundColor:(bg?.color || '#dadada'),height:'100%',width:'100%',top:30,borderRadius:30,padding:10,gap:30}}>

            {/* HEAD */}

            <Pressable onPress={togglemodel} style={{backgroundColor:'black',opacity:.47,height:10,width:95,top:10,borderRadius:10,left:'39.7%'}}></Pressable>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:40}}>
            <Text style={{fontSize:35,fontWeight:800,letterSpacing:1,opacity:.9,color:(bg?.fontcolor || 'black')}}>{bg?.name || 'Category'}</Text>
            <Text style={{fontSize:28,color:(bg?.fontcolor || 'black'),fontWeight:500}}>✎</Text>
            </View>
    
          {/* Task view will be here  */}
          { taskcolorwise.map((task:any)=>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20,marginTop:10,paddingLeft:8}}>
            <View style={{borderBottomColor:(bg?.fontcolor || 'black'),borderBottomWidth:1,paddingBottom:15,width:'100%'}}>
            <Texts style={{fontSize:25,fontWeight:500,color:(bg?.fontcolor || 'black')}} Value={`${task.title}`}/>
            <Texts style={{color:(bg?.fontcolor || 'black'),opacity:.9}} Value={`${task.time}`}/>
            </View>
            </View>)}
         </View>}
         /> 
    </View>
  )
}

export default Categorydetails