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
  { id: 5, title: "OFFICE 📌", time: "10:00 AM", color: "#0011ff", checked: false , editable:false },
  { id: 6, title: "Music 🎶", time: "8:30 PM", color: "#ff00ff", checked: false ,editable:false  },
  { id: 7, title: "Travel ✈️", time: "4:30 AM", color: "#15ff00", checked: false,editable:false  },
  { id: 8, title: "Coding 📲", time: "12:00 PM", color: "#ff8000", checked: false,editable:false  },
  
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [newColor, setNewColor] = useState('');
  const [edited,setedited]= useState("");
  const[searching,setsearch] = useState(true);
  const[categorytoggle,setcategorytoggle] = useState('false');


const catagory=()=>{

}


const deleteHandler = (id:number) => {
  setTasks(tasks.filter(task => task.id !== id));
}

const toggleSearch = (prev:boolean)=>setsearch(!prev)
    


const toggleDone=(id:number)=>{
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

const toggleEdit = (id:number) => {
  
    
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, editable: !task.editable } : task
      )
    );
    setedited('');
  };

  const toggleTask=(id:number)=>{
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
        <Text style={styles.TextStyle}>Task's <Text style={{color:"#ff0037"}}>☣︎</Text></Text>
        <View style={{display:'flex',flexDirection:'row',gap:6,alignItems:'center'}}>
        { searching  ?<Pressable style={{width:50,alignItems:'center',height:50,borderRadius:40,padding:6,borderWidth:3, borderColor: '#ff0033',backgroundColor:'#f7f7f7'}}><Text onPress={()=>toggleSearch(searching)} style={{fontSize:26,bottom:3}}>🔍</Text></Pressable> :<View>
        <TextInput placeholder='Enter your Searches Here'  style={{width:200,fontSize:16,borderColor:'#b3b3b3',borderWidth:3,borderRadius:10}}></TextInput>
       <Pressable onPress={()=>toggleSearch(searching)} style={{backgroundColor:'#dadada',marginLeft:142,paddingHorizontal:6,borderRadius:8,paddingBottom:1,marginTop:2,borderColor:'black',borderWidth:1.4}}><Text style={{color:'black'}}>Search</Text></Pressable>
        </View>}
        
        
        <Text
          onPress={() => setModalVisible(true)}
          style={styles.ADD}
        >
          +
        </Text>
        </View>
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
              <Text style ={styles.timediv}> {task.time}</Text>
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
      
      <View style={{backgroundColor:'#000000',height:65,width:64,borderRadius:50,alignItems:'center',justifyContent:'center',bottom:32,left:360}}>
        <Text style={{fontSize:45,fontWeight:300,color:'white',bottom:'1.5'}}>+</Text>
      </View>

      {/* Here i will add category */}
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
      
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;