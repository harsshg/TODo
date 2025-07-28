import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  Pressable,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

const initialTasks = [
  { id: 1, title: "Pay for rent 💸", time: "8:00 AM", color: "red", checked: false , editable:false },
  { id: 2, title: "Buy a milk 🥛", time: "9:30 AM", color: "#B6F500", checked: false ,editable:false  },
  { id: 3, title: "Pickup Mickael 📍", time: "5:30 PM", color: "#56DFCF", checked: false,editable:false  },
  { id: 4, title: "Buy a chocolate 🍫", time: "6:00 PM", color: "#C68EFD", checked: false,editable:false  },
  { id: 5, title: "Go to Office 🏢", time: "10:00 AM", color: "#0011ff", checked: false , editable:false },
  { id: 6, title: "Music 🎶", time: "8:30 PM", color: "#ff00ff", checked: false ,editable:false  },
  { id: 7, title: "Travel ✈️", time: "4:30 AM", color: "#15ff00", checked: false,editable:false  },
  { id: 8, title: "Coding 🆘", time: "12:00 PM", color: "#ff8000", checked: false,editable:false  },
  
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [newColor, setNewColor] = useState('');
  const [edited,setedited]= useState("");

  const deleteHandler = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
}

const toggleDone=(id)=>{
  if (edited.trim() === '') {
      Alert.alert('Please enter a Task');
      return;
    }
  setTasks((prev)=>
  prev.map((task)=>
  task.id === id ? { ...task, title: edited, editable: !task.editable } : task
  )
  );
}

const toggleEdit = (id) => {
  
    
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, editable: !task.editable } : task
      )
    );
    setedited('');
  };

  const toggleTask=(id)=>{
     setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }
  const addTask = () => {
    if (newTaskTitle.trim() === '' || newTaskTime.trim() === '' || newColor.trim()==='') {
      Alert.alert('Please enter both task title and time and color');
      return;
    }

    // Create new task with unique id and default color & unchecked status
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title: newTaskTitle,
      time: newTaskTime,
      color: newColor, // default dot color, change as needed
      checked: false,
      editable:false,
    };

    setTasks((prev) => [...prev, newTask]);
    setNewTaskTitle('');
    setNewTaskTime('');
    setNewColor('');
    setModalVisible(false);
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Text style={styles.TextStyle}>Today's <Text style={{color:"#ff0037"}}>Task</Text> ⛅<Text style={{color:"#ff0037"}}>☣︎</Text></Text>
        <Text
          onPress={() => setModalVisible(true)}
          style={styles.ADD}
        >
          +
        </Text>
      </View>
       <ScrollView
       showsVerticalScrollIndicator={false}>
        
       {/* <Storyview/> */}

      {/* Render tasks with toggle */}
      {tasks.map((task) => (
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
              <Text>⏰ {task.time}</Text>
              <View style={styles.editdel}>
              <Pressable
              onPress={()=>toggleEdit(task.id)}
              ><Text style={styles.edit}>Edit</Text>
              </Pressable>
              <Pressable 
              onPress={()=>deleteHandler(task.id)}
               >
                <Text 
                
                style={styles.delete}>Delete</Text>
                </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.dot, { backgroundColor: task.color }]}></View>
        </View>
      ))}

      {/* Modal for Add Todo */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Android back handler
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.Addtasktext}>Add Todo ☇</Text>

            <TextInput
              placeholder="Task Title"
              style={styles.Addtaskmsgbx}
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />
            <TextInput
              placeholder="Task Time (e.g. 8:00 AM)"
              style={styles.AddtaskTimeInput}
              value={newTaskTime}
              onChangeText={setNewTaskTime}
            />
            <TextInput
              placeholder="Enter color here('green')"
              style={styles.AddtaskTimeInput}
              value={newColor}
              onChangeText={setNewColor}
            />

            <View style={styles.Addtaskcd}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.AddtaskCreate}>Cancel</Text>
              </Pressable>
              <Pressable onPress={addTask}>
                <Text style={styles.AddtaskDone}>Done</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;