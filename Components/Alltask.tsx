import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'
import { ScrollView } from 'react-native';

interface Task {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
}

interface AlltaskProps {
  tasks: Task[];
  edited: string;
  setedited: React.Dispatch<React.SetStateAction<string>>;
  toggleDone: (id: number) => void;
  toggleEdit: (id: number) => void;
  deleteHandler: (id: number) => void;
  toggleTask: (id: number) => void;
}
const Alltask: React.FC<AlltaskProps> = ({
  tasks,
  edited,
  setedited,
  toggleDone,
  toggleEdit,
  deleteHandler,
  toggleTask
}) => { return(
   <>
    {tasks.map((task:any) => (
        <View key={task.id} style={[styles.taskContainer, { marginTop: task.id !== 1 ? 10 : 0 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Pressable style={styles.tick} onPress={() => toggleTask(task.id)}>
              {task.checked && <Text style={styles.tickText}>✔</Text>}
            </Pressable>
            <View >
              {/* Edit box */}
              {task.editable && <View>
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
            </View> }
              <Text style={styles.texttodo}>{task.title}</Text>
              <View style ={styles.TexttodoView}>
              <Text style ={styles.timediv}> ⏰ {task.time}</Text>
              
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
          </View>
          <View style={[styles.dot, { backgroundColor: task.color }]}></View>
        </View>
      ))}
   
  </>
  )
}

export default Alltask