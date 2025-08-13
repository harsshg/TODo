// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   SafeAreaView,
//   Alert,
//   TextInput,
//   ScrollView,
// } from 'react-native';

// import {
//   Addtodo,
//   Category,
//   Alltask,
//   obj,
//   Buttons,
//   Icons,
//   Texts,
//   TextInputs,
//   Header,
// } from './app/components/index';

// import { styles } from './app/constants/index';

// const initialTasks = obj;

// const App = () => {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [newTaskTitle, setNewTaskTitle] = useState('');
//   const [newTaskTime, setNewTaskTime] = useState('');
//   const [newColor, setNewColor] = useState('');
//   const [edited, setedited] = useState('');
//   const [searching, setsearch] = useState(true);
//   const [listcat, setlistcat] = useState(false);
//   const [mainview, setmainview] = useState(true);
//   const [valsearch, setvalsearch] = useState('');
//   const [horizontal, sethorizontal] = useState(true);

//   const deleteHandler = (id: number) => {
//     setTasks(tasks.filter(task => task.id !== id));
//     togglehorizontal();
//   };

//   const toggleSearch = (prev: boolean) => {
//     setvalsearch('');
//     setsearch(!prev);
//   };

//   const toggleDone = (id: number) => {
//     togglehorizontal();
//     if (edited.trim() === '') {
//       Alert.alert('Please enter a Task');
//       return;
//     }
//     setTasks(prev =>
//       prev.map(task =>
//         task.id === id
//           ? { ...task, title: edited, editable: !task.editable }
//           : task,
//       ),
//     );
//   };

//   const toggleEdit = (id: number) => {
//     togglehorizontal();
//     setTimeout(togglehorizontal, 1000);
//     setTasks(prev =>
//       prev.map(task =>
//         task.id === id ? { ...task, editable: !task.editable } : task,
//       ),
//     );
//     setedited('');
//   };

//   const togglehorizontal = () => {
//     sethorizontal(!horizontal);
//   };

//   const toggleTask = (id: number) => {
//     setTasks(prev =>
//       prev.map(task =>
//         task.id === id ? { ...task, checked: !task.checked } : task,
//       ),
//     );
//   };

//   const [righdist, setright] = useState(0);
//   const toggleright = (right: any) => {
//     if (right == 0) {
//       setright(150);
//     } else {
//       setright(0);
//     }
//   };

//   const addTask = () => {
//     if (newTaskTitle.trim() === '') {
//       Alert.alert('Please enter a task title');
//       return;
//     }
//     if (newTaskTime.trim() === '') {
//       Alert.alert('Please enter a task time');
//       return;
//     }
//     if (newColor.trim() === '') {
//       Alert.alert('Please select a category');
//       return;
//     }

//     // Create new task with unique id and default color & unchecked status
//     const newTask = {
//       id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
//       title: newTaskTitle,
//       time: newTaskTime,
//       color: newColor, // default dot color, change as needed
//       checked: false,
//       editable: false,
//       rightd: righdist,
//     };

//     setTasks(prev => [...prev, newTask]);
//     setNewTaskTitle('');
//     setNewTaskTime('');
//     setNewColor('');
//     setModalVisible(false);
//   };

//   const togglelistcat = () => {
//     setlistcat(!listcat);
//   };
//   const toggleListview = () => {
//     setlistcat(false);
//     setmainview(true);
//     togglelistcat;
//   };
//   const toggleCatogryview = () => {
//     setlistcat(true);
//     setmainview(false);
//     togglelistcat;
//   };

//   return (
//     <SafeAreaView>
//       {/* Top View */}
//       <View style={styles.topBarfortimeandbattery}></View>
//       <View style={styles.container}>
//         <Header
//           searching={searching}
//           toggleSearch={toggleSearch}
//           valsearch={valsearch}
//           setvalsearch={setvalsearch}
//           setModalVisible={setModalVisible}
//         />

//         <ScrollView showsVerticalScrollIndicator={false}>
//           {/* Render tasks with toggle */}
//           {mainview ? (
//             <View>
//               <Alltask
//                 horizontal={horizontal}
//                 togglehorizontal={togglehorizontal}
//                 toggleright={toggleright}
//                 valsearch={valsearch}
//                 tasks={tasks}
//                 edited={edited}
//                 setedited={setedited}
//                 toggleDone={toggleDone}
//                 toggleEdit={toggleEdit}
//                 deleteHandler={deleteHandler}
//                 toggleTask={toggleTask}
//               />
//             </View>
//           ) : (
//             <Category tasks={tasks} />
//           )}

//           <Addtodo
//             modalVisible={modalVisible}
//             setModalVisible={setModalVisible}
//             newTaskTitle={newTaskTitle}
//             setNewTaskTitle={setNewTaskTitle}
//             newTaskTime={newTaskTime}
//             setNewTaskTime={setNewTaskTime}
//             newColor={newColor}
//             setNewColor={setNewColor}
//             addTask={addTask}
//           />

//           {/* category toggle button */}
//         </ScrollView>

//         <Buttons
//           style={styles.togglecatnlist}
//           onPress={togglelistcat}
//           Value={
//             <Texts
//               style={{
//                 fontSize: 45,
//                 fontWeight: '300', // must be string in RN
//                 color: 'white',
//                 bottom: 1.5,
//               }}
//               Value="+"
//             />
//           }
//         />

//         {listcat && (
//           <View style={styles.listcat}>
//             <Buttons
//               onPress={toggleListview}
//               style={styles.listcatbtn}
//               Value={<Texts style={styles.liscatbtntxt} Value="✔︎ List" />}
//             />
//             <Buttons
//               onPress={toggleCatogryview}
//               style={styles.catview}
//               Value={<Texts style={styles.catviewtxt} Value="⎅ Category" />}
//             />
//           </View>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;




// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Home } from './app/screens/Home'
// import { Done } from './app/screens/Done'
// import { Pending } from './app/screens/Pending'

// import { useTodoApp } from './app/components/UseTodo';
// import { View } from 'react-native';

// // Define the param list for navigation
// export type RootStackParamList = {
//   Home: undefined;
//   Done: undefined;
//   Pending: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   const state = useTodoApp();

//   return (
//     <View>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: 'Home Page',
//           }}
//         />
//         <Stack.Screen
//           name="Done"
//           component={Done}
//           options={{
//             title: 'Done tasks',
//           }}
//         />
//         <Stack.Screen
//           name="Pending"
//           component={Pending}
//           options={{
//             title: 'Pending Tasks',
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </View>
//   );
// }



// Here Native Stack implemented
//+++++++++++++++++++++++++++++++++++++++

// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { TodoProvider } from './app/components/TodoContext'
// import { Home } from './app/screens/Home'
// import { Pending } from './app/screens/Pending'
// import { Done } from './app/screens/Done'
// import { Text, View } from 'react-native'

// export type RootStackParamList = {
//   Home: undefined;
//   Done: undefined;
//   Pending: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>()

// function App() {
//   return (

//     <TodoProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Done" component={Done} />
//           <Stack.Screen name="Pending" component={Pending} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </TodoProvider>

//   )
// }
// export default App

//+++++++++++++++++++++++++++++++++++++++



//Bottom Tabs implementation started

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TodoProvider } from './app/components/TodoContext';
// import { TabsNavigator } from './app/components/TabsNavigator';


// export type RootStackParamList = {
//   MainTabs: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// function App() {
//   return (
//     <TodoProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           {/* Main tabs as the root for now */}
//           <Stack.Screen name="MainTabs" component={TabsNavigator} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </TodoProvider>
//   );
// }
// export default App;





//Drawer layout

// App.tsx
import 'react-native-gesture-handler'; 
import 'react-native-reanimated';     
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TodoProvider } from './app/components/TodoContext';
// Screens
import { Home } from './app/screens/Home';
import { Done } from './app/screens/Done';
import { Pending } from './app/screens/Pending';
import {dstyle} from './app/constants/index';
// ✅ Drawer param list type
import { DrawerParamList } from './app/types';



const Drawer = createDrawerNavigator<DrawerParamList>();
const Homename = ('Home');
function App() {
  return (
    <TodoProvider>
      <NavigationContainer >
        <Drawer.Navigator initialRouteName={Homename} 
           screenOptions={dstyle} >
          <Drawer.Screen name={Homename} component={Home} />
          <Drawer.Screen name="Done" component={Done} />
          <Drawer.Screen name="Pending" component={Pending} />
        </Drawer.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
}

export default App;
