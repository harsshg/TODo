// import { View, Text, Pressable, TextInput, Modal, KeyboardAvoidingView, Platform, Alert  } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { styles } from '../constants/index';
// import { ScrollView } from 'react-native';


// interface Task {
//   rightd: number,
//   id: number;
//   title: string;
//   time: string;
//   color: string;
//   editable: boolean;
//   checked: boolean;
// }
// interface AlltaskProps {
//   horizontal:boolean,
//   togglehorizontal:React.Dispatch<React.SetStateAction<boolean>>;
//   toggleright:(id: number) => void;
//   valsearch:string;
//   tasks: Task[];
//   edited: string;
//   setedited: React.Dispatch<React.SetStateAction<string>>;
//   toggleDone: (id: number) => void;
//   toggleEdit: (id: number) => void;
//   deleteHandler: (id: number) => void;
//   toggleTask: (id: number) => void;
// }
// const Alltask: React.FC<AlltaskProps> = ({
  
//   horizontal,
//   togglehorizontal,
//   toggleright,
//   valsearch,
//   tasks,
//   edited,
//   setedited,
//   toggleDone,
//   toggleEdit,
//   deleteHandler,
//   toggleTask
// }) => { 
// const[modeltask,setmodeltask]=useState<Task | null>(null)

// const[editModalVisible,seteditModalVisible]=useState(false)

// const toggleCancelinedit = ()=>{
//         seteditModalVisible(false)
//         setedited('')
//         setmodeltask(null)
// }
 
// const toggledoneformodel=(id: number)=>{
//        if (edited.trim() === '') {
//          Alert.alert('Please enter a task title');
//          return;
//        }
//        toggleDone(id)
//        toggleCancelinedit()
// }

//  const toggleCancelinedit1 = (task: Task)=>{
//         setedited(task.title) // Set the current task title as initial value
//         setmodeltask(task)
//         seteditModalVisible(true)
// }


 
// const[filterd,setfilterd]=useState(tasks)
    
// useEffect(() => {
//   if (valsearch === "") {
//     setfilterd(tasks); // Show all tasks if search is empty
//   } else {
//     const tasks = tasks.filter(task =>
//       task.title.toLowerCase().includes(valsearch.toLowerCase())
//     );
//     setfilterd(tasks); // Show tasks tasks
//   }
// }, [valsearch, tasks]);

// useEffect(()=>{
//   if(horizontal == false){
//      setTimeout(() => togglehorizontal(true), 100);
//   }
// },[horizontal])






//   return( 
//    <>
//     {filterd.map((task:any) => (
//       <ScrollView showsHorizontalScrollIndicator={false} horizontal={horizontal}  >
//         <View key={task.id} style={[styles.taskContainer]}>
//           <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
//             <Pressable style={styles.tick} onPress={() => toggleTask(task.id)}>
//               {task.checked && <Text style={styles.tickText}>✔</Text>}
//             </Pressable>
//             <View >
//               <Text style={styles.texttodo}>{task.title}</Text>
//               <View style ={styles.TexttodoView}>
//               <Text style ={styles.timediv}> ⏰ {task.time}</Text>
//               </View>
//             </View>
//           </View>



//           <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
//           <Pressable onPress={()=>toggleright(task.right)} style={[styles.dot, { backgroundColor: task.color,right:39 }]}></Pressable>
//             {/* Edit&Del */}
//             <View style={styles.editdel}>
//               <Pressable onPress={()=>toggleCancelinedit1(task)}>
//                 <Text style={styles.edit}>Edit</Text>
//               </Pressable>
//               <Pressable onPress={()=>deleteHandler(task.id)} >
//                 <Text style={styles.delete}>Delete</Text>
//                 </Pressable>
//                 </View>
//                 </View>
                
//         </View>
//         </ScrollView>
//       ))}

//     <View style={styles.togglepagescontainer}>
//       <Pressable style={styles.togglePages}> <Text style={styles.togglePagestxt}>All</Text></Pressable>
//       <Pressable style={styles.togglePages}> <Text style={styles.togglePagestxt}>Pending</Text></Pressable>
//       <Pressable style={styles.togglePages}> <Text style={styles.togglePagestxt}>Done</Text></Pressable>
//     </View>


//    <Modal
//         animationType="slide"
//         transparent={true}
//         visible={editModalVisible}
//         onRequestClose={toggleCancelinedit}>
//      <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//           style={styles.keyboardavoiding}
//         >
//           <View style={styles.modalContent}>
//             <Text style={styles.Addtasktext}>Edit Todo ☇</Text>

//             <TextInput
//               placeholder= {modeltask?.title || ''}
//               style={styles.Addtaskmsgbx}
//               value={edited}
//               onChangeText={setedited}
//             />
//             <View style={styles.Addtaskcd}>
//               <Pressable onPress={toggleCancelinedit} >
//                 <Text style={styles.AddtaskCreate}>Cancel</Text>
//               </Pressable>
//               <Pressable  >
//                 <Text onPress={()=>modeltask && toggledoneformodel(modeltask.id)} style={styles.AddtaskDone}>Done</Text>
//               </Pressable>
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </Modal>
//   </>
//   )
// }

// export default Alltask


//+++++++++++++++++++++++++++++++
//BOttom Tab

// import {
//   View,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   ScrollView,
// } from 'react-native';

// import React, { useEffect, useState } from 'react';
// import { styles } from '../constants/index';
// import { Task, AlltaskProps } from '../types/index';
// import {Buttons,Texts,Modals,TextInputs,PageTogggle} from './index';



// const Alltask: React.FC<AlltaskProps> = ({
//   horizontal,
//   togglehorizontal,
//   toggleright,
//   valsearch,
//   tasks,
//   edited,
//   setedited,
//   toggleDone,
//   toggleEdit,
//   deleteHandler,
//   toggleTask,
//   onPressHome,
//   onPressDone,
//   onPressPending,
// }) => {
//   const [modeltask, setmodeltask] = useState<Task | null>(null);
//   const [editModalVisible, seteditModalVisible] = useState(false);
//   const [filterd, setfilterd] = useState<Task[]>(tasks);

//   const toggleCancelinedit = () => {
//     seteditModalVisible(false);
//     setedited('');
//     setmodeltask(null);
//   };

//   const toggledoneformodel = (id: number) => {
//     if (edited.trim() === '') {
//       Alert.alert('Please enter a task title');
//       return;
//     }
//     toggleDone(id);
//     toggleCancelinedit();
//   };

//   const toggleCancelinedit1 = (task: Task) => {
//     setedited(task.title);
//     setmodeltask(task);
//     seteditModalVisible(!editModalVisible);
//   };

//   useEffect(() => {
//     if (valsearch === '') {
//       setfilterd(tasks);
//     } else {
//        tasks = tasks.filter((task:any) =>
//         task.title.toLowerCase().includes(valsearch.toLowerCase())
//       );
//       setfilterd(tasks);
//     }
//   }, [valsearch, tasks]);

//   useEffect(() => {
//     if (!horizontal) {
//       setTimeout(() => togglehorizontal(false), 100);
//     }
//   }, [horizontal]);

//   return (
//     <>
//       {filterd.map(task => (
//         <ScrollView
//           key={task.id}
//           showsHorizontalScrollIndicator={false}
//           horizontal={horizontal}>
//           <View style={styles.taskContainer}>
//             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
//               <Buttons style={styles.tick} onPress={()=> toggleTask(task.id)} Value={task.checked && <Text style={styles.tickText}>✔</Text>}/>
//               <View>
//                 <Text style={styles.texttodo}>{task.title}</Text>
//                 <View style={styles.TexttodoView}>
//                   <Texts style={styles.timediv} Value={`⏰ ${task.time}`}/>
//                 </View>
//               </View>
//             </View>

//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Buttons
//                onPress={() => toggleright(task.right)}
//                style={[styles.dot, { backgroundColor: task.color, right: 39 }]}
//                Value={''}
//               />

//               <View style={styles.editdel}>
//                 <Buttons onPress={() => toggleCancelinedit1(task)} Value={<Texts style={styles.edit} Value={'Edit'}/>}/>
                   
//                 <Buttons onPress={() => deleteHandler(task.id)} Value={<Texts style={styles.delete} Value={'Delete'}/>}/>
              
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       ))}


// {/* <PageTogggle onPressHome = {onPressHome} onPressDone = {onPressDone} onPressPending ={onPressPending} /> */}


//       <Modals
//         animationType={"slide"}
//         transparent={true}
//         visible={editModalVisible}
//         onRequestClose={toggleCancelinedit} 
//         Value={<KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//           style={styles.keyboardavoiding}>
//           <View style={styles.modalContent}>
//             <Texts style={styles.Addtasktext} Value={'Edit Todo ☇'}/>
//             <TextInputs
//               placeholder={modeltask?.title || ''}
//               style={styles.Addtaskmsgbx}
//               value={edited}
//               onChangeText={setedited}
//             />
//             <View style={styles.Addtaskcd}>
//                <Buttons onPress={()=>toggleCancelinedit()} Value={<Texts style={styles.AddtaskCreate} Value={'Cancel'}/>}/>
//                <Buttons onPress={() => modeltask && toggledoneformodel(modeltask.id)} Value={<Texts style={styles.AddtaskCreate} Value={'Done'}/>}/>
//             </View>
//           </View>
//         </KeyboardAvoidingView>}/>
        
      
//     </>
//   );
// };

// export default Alltask;




import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';

import React, { useEffect, useState } from 'react';
import { styles } from '../constants/index';
import { Task, AlltaskProps } from '../types/index';
import {Buttons,Texts,Modals,TextInputs,PageTogggle} from './index';



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
  toggleTask,
  onPressHome,
  onPressDone,
  onPressPending,
}) => {
  const [modeltask, setmodeltask] = useState<Task | null>(null);
  const [editModalVisible, seteditModalVisible] = useState(false);
  const [filterd, setfilterd] = useState<Task[]>(tasks);

  const toggleCancelinedit = () => {
    seteditModalVisible(false);
    setedited('');
    setmodeltask(null);
  };

  const toggledoneformodel = (id: number) => {
    if (edited.trim() === '') {
      Alert.alert('Please enter a task title');
      return;
    }
    toggleDone(id);
    toggleCancelinedit();
  };

  const toggleCancelinedit1 = (task: Task) => {
    setedited(task.title);
    setmodeltask(task);
    seteditModalVisible(!editModalVisible);
  };

  useEffect(() => {
    if (valsearch === '') {
      setfilterd(tasks);
    } else {
       tasks = tasks.filter((task:any) =>
        task.title.toLowerCase().includes(valsearch.toLowerCase())
      );
      setfilterd(tasks);
    }
  }, [valsearch, tasks]);

  useEffect(() => {
    if (!horizontal) {
      setTimeout(() => togglehorizontal(false), 100);
    }
  }, [horizontal]);

  return (
    <>
      {filterd.map(task => (
        <ScrollView
          key={task.id}
          showsHorizontalScrollIndicator={false}
          horizontal={horizontal}>
          <View style={styles.taskContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Buttons style={styles.tick} onPress={()=> toggleTask(task.id)} Value={task.checked && <Text style={styles.tickText}>✔</Text>}/>
              <View>
                <Text style={styles.texttodo}>{task.title}</Text>
                <View style={styles.TexttodoView}>
                  <Texts style={styles.timediv} Value={`⏰ ${task.time}`}/>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Buttons
               onPress={() => toggleright(task.right)}
               style={[styles.dot, { backgroundColor: task.color, right: 39 }]}
               Value={''}
              />

              <View style={styles.editdel}>
                <Buttons onPress={() => toggleCancelinedit1(task)} Value={<Texts style={styles.edit} Value={'Edit'}/>}/>
                   
                <Buttons onPress={() => deleteHandler(task.id)} Value={<Texts style={styles.delete} Value={'Delete'}/>}/>
              
              </View>
            </View>
          </View>
        </ScrollView>
      ))}


{/* <PageTogggle onPressHome = {onPressHome} onPressDone = {onPressDone} onPressPending ={onPressPending} /> */}


      <Modals
        animationType={"slide"}
        transparent={true}
        visible={editModalVisible}
        onRequestClose={toggleCancelinedit} 
        Value={<KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardavoiding}>
          <View style={styles.modalContent}>
            <Texts style={styles.Addtasktext} Value={'Edit Todo ☇'}/>
            <TextInputs
              placeholder={modeltask?.title || ''}
              style={styles.Addtaskmsgbx}
              value={edited}
              onChangeText={setedited}
            />
            <View style={styles.Addtaskcd}>
               <Buttons onPress={()=>toggleCancelinedit()} Value={<Texts style={styles.AddtaskCreate} Value={'Cancel'}/>}/>
               <Buttons onPress={() => modeltask && toggledoneformodel(modeltask.id)} Value={<Texts style={styles.AddtaskCreate} Value={'Done'}/>}/>
            </View>
          </View>
        </KeyboardAvoidingView>}/>
        
      
    </>
  );
};

export default Alltask;
