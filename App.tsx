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
import Storyview from './Components/storyview';

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

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "",
      height: '100%',
      width: '100%',
      marginTop: 10,
      padding: 10,
      fontFamily: 'SFProDisplay-Regular',
    },
    viewbox: {
      borderBottomColor: '#006CFF',
      borderBottomWidth: 0.2,
      marginBottom: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      height: 100,
    },
    TextStyle: {
      fontWeight: '500',
      letterSpacing: 0,
      fontSize: 30,
      color: 'black',
    },
    ADD: {
      fontSize: 30,
      fontWeight: '400',
      borderWidth: 3,
      color: '#006CFF',
      paddingHorizontal: 12,
      paddingVertical: 0,
      borderColor: '#006CFF',
      borderRadius: 50,
    },
    taskContainer: {
      padding: 15,
      paddingBottom: 18,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#a6a6a6',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tick: {
      height: 30,
      width: 30,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#006CFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tickText: {
      fontSize: 20,
      color: 'red',
      textAlign: 'center',
    },
    texttodo: {
      fontSize: 20,
      letterSpacing: 1,
      color: 'black',
      fontWeight: '400',
    },
    dot: {
      height: 13,
      width: 13,
      borderRadius: 50,
      backgroundColor: 'red',
      marginLeft: 10,
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 20,
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
    },
    Addtasktext: {
      fontSize: 26,
      fontWeight: '700',
      letterSpacing: 1,
      color: 'black',
      marginBottom: 15,
    },
    Addtaskmsgbx: {
      height: 100,
      width: '100%',
      borderColor: '#a6a6a6',
      borderWidth: 0.9,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 18,
      marginBottom: 15,
    },
    AddtaskTimeInput: {
      height: 40,
      width: '100%',
      borderColor: '#a6a6a6',
      borderWidth: 0.9,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 18,
      marginBottom: 25,
    },
    Addtaskcd: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    AddtaskDone: {
      fontSize: 20,
      color: '#006CFF',
      fontWeight: '600',
      marginHorizontal: 10,
    },
    AddtaskCreate: {
      fontSize: 20,
      fontWeight: '400',
      color: '#006CFF',
      marginHorizontal: 10,
    },
    lastone: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 20,
      color: '#a6a6a6',
    },
  });

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
        
       <Storyview/>

      {/* Render tasks with toggle */}
      {tasks.map((task) => (
        <View key={task.id} style={[styles.taskContainer, { marginTop: task.id !== 1 ? 10 : 0 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Pressable style={styles.tick} onPress={() => toggleTask(task.id)}>
              {task.checked && <Text style={styles.tickText}>✔</Text>}
            </Pressable>
            <View>
              <Text style={styles.texttodo}>{task.title}</Text>
              <Text>⏰ {task.time}</Text>
            </View>
          </View>
          <View style={[styles.dot, { backgroundColor: task.color }]}></View>
        </View>
      ))}

      {/* Modal for Add Todo */}
      <Modal
        animationType="fade"
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

      <Text style={styles.lastone}>Created By Harsh</Text>
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;