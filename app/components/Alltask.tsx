import { View, Text, Pressable, TextInput, Modal, KeyboardAvoidingView, Platform, Alert  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../constants'
import { ScrollView } from 'react-native';

interface Task {
  rightd: number,
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
}
interface AlltaskProps {
  horizontal:boolean,
  togglehorizontal:React.Dispatch<React.SetStateAction<boolean>>;
  toggleright:(id: number) => void;
  valsearch:string;
  tasks: Task[];
  edited: string;
  setedited: React.Dispatch<React.SetStateAction<string>>;
  toggleDone: (id: number) => void;
  _toggleEdit: (id: number) => void;
  deleteHandler: (id: number) => void;
  toggleTask: (id: number) => void;
}
const Alltask: React.FC<AlltaskProps> = ({
  
  horizontal,
  togglehorizontal,
  toggleright,
  valsearch,
  tasks,
  edited,
  setedited,
  toggleDone,
  _toggleEdit,
  deleteHandler,
  toggleTask
}) => { 
const[modeltask,setmodeltask]=useState<Task | null>(null)

const[editModalVisible,seteditModalVisible]=useState(false)

const toggleCancelinedit = ()=>{
        seteditModalVisible(false)
        setedited('')
        setmodeltask(null)
}
 
const toggledoneformodel=(id: number)=>{
       if (edited.trim() === '') {
         Alert.alert('Please enter a task title');
         return;
       }
       toggleDone(id)
       toggleCancelinedit()
}

 const toggleCancelinedit1 = (task: Task)=>{
        setedited(task.title) // Set the current task title as initial value
        setmodeltask(task)
        seteditModalVisible(true)
}


 
const[filterd,setfilterd]=useState(tasks)
    
useEffect(() => {
  if (valsearch === "") {
    setfilterd(tasks); // Show all tasks if search is empty
  } else {
    const filtered = tasks.filter(task =>
      task.title.toLowerCase().includes(valsearch.toLowerCase())
    );
    setfilterd(filtered); // Show filtered tasks
  }
}, [valsearch, tasks]);

useEffect(()=>{
  if(horizontal === false){
     setTimeout(() => togglehorizontal(true), 100);
  }
},[horizontal, togglehorizontal])






  return( 
   <>
    {filterd.map((task:any) => (
      <ScrollView key={task.id} showsHorizontalScrollIndicator={false} horizontal={horizontal}  >
        <View style={[styles.taskContainer, { marginTop: task.id !== 1 ? 10 : 0 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Pressable style={styles.tick} onPress={() => toggleTask(task.id)}>
              {task.checked && <Text style={styles.tickText}>✔</Text>}
            </Pressable>
            <View >
              {/* Edit box */}
{/* Here+++++++++++++++++++++++ */}
            {/* {task.editable && ''} */}

              {/* <Editmodel editModalVisible={editModalVisible} seteditModalVisible={seteditModalVisible} toggleCancelinedit={toggleCancelinedit} placeholder={task.title} value={edited} onChangeText={setedited} task={task} toggleDone ={toggleDone} /> */}

      

      {/* EDIT BOX DESIGN */}

                {/* <View>
            <TextInput 
            placeholder={task.title} 
            style={styles.editBox} 
            value={edited} 
            onChangeText={setedited} />
            <View style={{display:'flex',flexDirection:'row',gap:6,marginLeft:210}}>
            <Pressable 
            onPress={()=>toggleDone(task.id)}
            style={styles.doneBtn}><Text style={{color:"white"}} >Done</Text>
            </Pressable>
            <Pressable 
            onPress={()=>toggleEdit(task.id)}
            style={[styles.doneBtn,{backgroundColor:'#3d3d3d'}]}><Text style={{color:"white"}} >Cancel</Text>
            </Pressable>
            </View>
            </View>  */}


      {/* Here+++++++++++++++++++++++ */}

              <Text style={styles.texttodo}>{task.title}</Text>
              <View style ={styles.TexttodoView}>
              <Text style ={styles.timediv}> ⏰ {task.time}</Text>
              
              {/* Edit&Del */}
              {/* <View style={styles.editdel}>
              <Pressable onPress={()=>toggleEdit(task.id)}>
                <Text style={styles.edit}>Edit</Text>
              </Pressable>
              <Pressable onPress={()=>deleteHandler(task.id)} >
                <Text style={styles.delete}>Delete</Text>
                </Pressable>
                </View> */}
              </View>
            </View>
          </View>



          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Pressable onPress={()=>toggleright(task.right)} style={[styles.dot, { backgroundColor: task.color,right:39 }]}></Pressable>
            {/* Edit&Del */}
            <View style={styles.editdel}>
              <Pressable onPress={()=>toggleCancelinedit1(task)}>
                <Text style={styles.edit}>Edit</Text>
              </Pressable>
              <Pressable onPress={()=>deleteHandler(task.id)} >
                <Text style={styles.delete}>Delete</Text>
                </Pressable>
                </View>
                </View>
                
        </View>
        </ScrollView>
      ))}


   <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={toggleCancelinedit}>
     <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(104, 104, 104, 0.05)',
      padding: 20,}}
        >
          <View style={styles.modalContent}>
            <Text style={styles.Addtasktext}>Edit Todo ☇</Text>

            <TextInput
              placeholder= {modeltask?.title || ''}
              style={styles.Addtaskmsgbx}
              value={edited}
              onChangeText={setedited}
            />
            <View style={styles.Addtaskcd}>
              <Pressable onPress={toggleCancelinedit} >
                <Text style={styles.AddtaskCreate}>Cancel</Text>
              </Pressable>
              <Pressable  >
                <Text onPress={()=>modeltask && toggledoneformodel(modeltask.id)} style={styles.AddtaskDone}>Done</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
  </>
  )
}

export default Alltask