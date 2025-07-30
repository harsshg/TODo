import { View, Text, Pressable, TextInput  } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles'
import { ScrollView } from 'react-native';
// import Editmodel from './Editmodel'

interface Task {
  right:number,
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
}

interface AlltaskProps {
  toggleright:(id: number) => void;
  valsearch:string;
  tasks: Task[];
  edited: string;
  setedited: React.Dispatch<React.SetStateAction<string>>;
  toggleDone: (id: number) => void;
  toggleEdit: (id: number) => void;
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
  toggleEdit,
  deleteHandler,
  toggleTask
}) => { 
 
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
  if(horizontal == false){
     setTimeout(togglehorizontal, 100);
  }
},[horizontal])



  return( 
   <>
    {filterd.map((task:any) => (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={horizontal}  >
        <View key={task.id} style={[styles.taskContainer, { marginTop: task.id !== 1 ? 10 : 0 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Pressable style={styles.tick} onPress={() => toggleTask(task.id)}>
              {task.checked && <Text style={styles.tickText}>✔</Text>}
            </Pressable>
            <View >
              {/* Edit box */}

            {/* {task.editable && ''} */}

             {/* <Editmodel/> */}
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



              </View>
            </View>
          </View>



          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Pressable onPress={()=>toggleright(task.right)} style={[styles.dot, { backgroundColor: task.color,right:39 }]}></Pressable>
            {/* Edit&Del */}
            <View style={styles.editdel}>
              <Pressable onPress={()=>toggleEdit(task.id)}>
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
   
  </>
  )
}

export default Alltask