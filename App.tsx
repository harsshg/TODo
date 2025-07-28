// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   Alert,
//   Pressable,
//   TextInput,
// } from 'react-native';
// import React, { useState } from 'react';
// import styles from './styles';

// import Addtodo from './Components/Addtodo';
// import { ScrollView } from 'react-native';
// import Storyview from './Components/storyview';



// // const initialTasks = [
// //   // {
// //   //   id: 1,
// //   //   title: 'Pay for rent 💸',
// //   //   time: '8:00 AM',
// //   //   color: '#F6416C',
// //   //   checked: true,
// //   // },
// //   // {
// //   //   id: 2,
// //   //   title: 'Buy a milk 🥛',
// //   //   time: '9:30 AM',
// //   //   color: '#B6F500',
// //   //   checked: false,
// //   // },
// //   // {
// //   //   id: 3,
// //   //   title: 'Pickup Mickael 📍',
// //   //   time: '5:30 PM',
// //   //   color: '#56DFCF',
// //   //   checked: false,
// //   // },
// //   // {
// //   //   id: 4,
// //   //   title: 'Buy a chocolate 🍫 for Charlotte',
// //   //   time: '6:00 PM',
// //   //   color: '#C68EFD',
// //   //   checked: false,
// //   // },
// // ];



// const App = () => {
//   const [initialTasks,setinitialTasks]=useState([]);
//   let addtask = <></>;
//    const [addTrue, setAddTrue] = useState(false); 
//    const toggleAddTask = () => {
//     setAddTrue(prev => !prev);  // toggle boolean state
// };
// if(addTrue == true){
//    addtask = <Addtodo toggleAddTask={toggleAddTask} setinitialTasks ={setinitialTasks} initialTasks={initialTasks}  />;
// }else{
//   addtask = <></>;
// }
//   const [tasks, setTasks] = useState(initialTasks);

//   const toggleTask = e => {
//     setTasks(prev =>
//       prev.map(task =>
//         task.id === e ? { ...task, checked: !task.checked } : task,
//       ),
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.viewbox}>
//         <Text style={styles.TextStyle}>
//           Tasks ↯ <Text style={{ color: '#F21368' }}>☀︎₊⁺⋆.˚</Text>
//         </Text>
//         <Text
//           onPress={
//            toggleAddTask
//           }
//           style={styles.ADD}
//         >
//           +
//         </Text>
//       </View>
//      <ScrollView showsVerticalScrollIndicator={false}>

//       {/* Storyscroll */}
//       <Storyview/>
//       {/* Render tasks with toggleable tick */}
//       {tasks.map(task => (
//         <View
//           key={task.id}
//           style={[styles.taskContainer, { marginTop: task.id !== 1 ? 10 : 0 }]}
//         >
//           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
//             <Pressable style={styles.tick} onPress={() => toggleTask(task.id)}>
//               {task.checked && <Text style={styles.tickText}>✔</Text>}
//             </Pressable>
//             <View>
//               <Text style={styles.texttodo}>{task.title}</Text>
//               <Text>⏰ {task.time}</Text>
//             </View>
//           </View>
//           <View style={[styles.dot, { backgroundColor: task.color }]}></View>
//         </View>
//       ))}

//       {/* ADD TODO */}
//       {addtask}
      
//       </ScrollView>
   
//     </SafeAreaView>
   
//   );
// };

// export default App;
 

//+++++++++++++++++++++++++++++++++

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
  { id: 1, title: "Pay for rent 💸", time: "8:00 AM", color: "red", checked: false },
  { id: 2, title: "Buy a milk 🥛", time: "9:30 AM", color: "#B6F500", checked: false },
  { id: 3, title: "Pickup Mickael 📍", time: "5:30 PM", color: "#56DFCF", checked: false },
  { id: 4, title: "Buy a chocolate 🍫 for Charlotte", time: "6:00 PM", color: "#C68EFD", checked: false },
  
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [newColor, setNewColor] = useState('');

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

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
        <Text style={styles.TextStyle}>Today's Tasks ⛅︎</Text>
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
            <View>
              <Text style={styles.texttodo}>{task.title}</Text>
              <View style ={styles.TexttodoView}>
              <Text>⏰ {task.time}</Text>
              <Pressable ><Text style={styles.edit}>Edit</Text></Pressable>
              <Pressable ><Text style={styles.delete}>Delete</Text></Pressable>
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