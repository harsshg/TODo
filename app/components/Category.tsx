import { View, Text,Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Categorydetails} from './index';
import { styles } from '../constants/index';
import {Buttons} from './index';


interface Task {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
  rightd: number;
}

interface CategoryProps {
  tasks: Task[];
  onEditTask?: (taskId: number, newTitle: string) => void;
}

const Category: React.FC<CategoryProps> = ({tasks, onEditTask}) => {


  const [greytasks, setGreytasks] = useState<Task[]>([]);
  const [greentasks, setGreentasks] = useState<Task[]>([]);
  const [redtasks, setRedtasks] = useState<Task[]>([]);
  const [yellowtasks, setYellowtasks] = useState<Task[]>([]);
  const [violettasks, setViolettasks] = useState<Task[]>([]);

  const[taskcolorwise,settaskcolorwise]=useState<Task[]>([]);

  // Use useEffect to run this logic whenever 'tasks' changes
  useEffect(() => {
    // 1. Initialize temporary arrays to hold categorized tasks
    const tempGreyTasks: Task[] = [];
    const tempGreenTasks: Task[] = [];
    const tempRedTasks: Task[] = [];
    const tempYellowTasks: Task[] = [];
    const tempVioletTasks: Task[] = [];

    // 2. Iterate over the tasks ONCE and categorize them
    tasks.forEach((task: Task) => {
      switch (task.color) {
        case '#dadada':
          tempGreyTasks.push(task);
          break;
        case '#61DEA4':
          tempGreenTasks.push(task);
          break;
        case '#F45E6D':
          tempRedTasks.push(task);
          break;
        case '#FFE761':
          tempYellowTasks.push(task);
          break;
        case '#B678FF':
          tempVioletTasks.push(task);
          break;
        default:
          // Handle tasks with other colors or no color, if necessary
          break;
      }
    });

    // 3. Update state variables once after all tasks are categorized
    // This is more efficient as it causes only one re-render per state update (5 total, but done in one batch essentially)
    setGreytasks(tempGreyTasks);
    setGreentasks(tempGreenTasks);
    setRedtasks(tempRedTasks);
    setYellowtasks(tempYellowTasks);
    setViolettasks(tempVioletTasks);

  }, [tasks]);


  const[modalVisible,setModalVisible]=useState(false);

  

  const togglemodel=()=>{
    setModalVisible(!modalVisible);
  }
  
  const[bg,setbg]=useState<{color: string, name: string, fontcolor: string} | null>(null)
  
  const[title,settitle]=useState('')

  const togglemodelviatask=(task: {color: string, name: string, fontcolor: string})=>{
    switch(task.color){
      case '#dadada':
          settaskcolorwise(greytasks);
          break;
        case '#61DEA4':
          settaskcolorwise(greentasks);
          break;
        case '#F45E6D':
           settaskcolorwise(redtasks);
          break;
        case '#FFE761':
           settaskcolorwise(yellowtasks);
          break;
        case '#B678FF':
           settaskcolorwise(violettasks);
          break;
        default:
          // Handle tasks with other colors or no color, if necessary
          break;
    }
    setbg(task)
    settitle(task.name)
    setModalVisible(true)
  } 


  
  let obj =[
  { id: 1, color:'#dadada',name:'Inbox',fontcolor:'black' },
  { id: 2, color:'#61DEA4',name:'Work',fontcolor:'white' },
  { id: 3, color:'#F45E6D',name:'Shopping',fontcolor:'white' },
  { id: 4, color:'#FFE761',name:'Family',fontcolor:'black' },
  { id: 5, color:'#B678FF',name:'Personal',fontcolor:'white'}, 
];
  return (
      
     <View style={styles.categorypagecontainer} >
      <Text style={styles.catergorydetails}>Total <Text style={styles.catergorytext}>Pending</Text> task's :- {tasks.length}</Text>
      {obj.map((task)=>(
        <Buttons onPress={()=>togglemodelviatask(task)} style={{height:90,backgroundColor:(task.color),width:'100%',borderRadius:10,alignItems:'center',justifyContent:'center',marginBottom:20}} key ={task.id} Value={ <Text style={{color:(task.fontcolor),fontSize:30,fontWeight:500}}>{task.name}</Text>} />
      ))}
      
     <Categorydetails modalVisible={modalVisible} setModalVisible={setModalVisible} togglemodel={togglemodel} bg={bg} taskcolorwise={taskcolorwise} onEditTask={onEditTask}/>


     </View>
  )
}

export default Category