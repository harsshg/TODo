import {
  View,
  Text,
  SafeAreaView,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {styles} from './app/constants/index';
// import Addtodo from './components/Addtodo';
import {Addtodo,Category,Alltask,obj,Buttons,Icons,Texts,TextInputs} from './app/components/index';
import Icon from 'react-native-vector-icons/FontAwesome';




const initialTasks = obj;

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [newColor, setNewColor] = useState('');
  const [edited, setedited] = useState('');
  const [searching, setsearch] = useState(true);
  const [listcat, setlistcat] = useState(false);
  const [mainview,setmainview]=useState(true);//Main screen default:-true
  const [valsearch,setvalsearch]=useState('');

  

  const deleteHandler = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    togglehorizontal()
    
  };

  const toggleSearch = (prev: boolean) => {
    setvalsearch('');
    setsearch(!prev);}

  const toggleDone = (id: number) => {
    togglehorizontal()
    if (edited.trim() === '') {
      Alert.alert('Please enter a Task');
      return;
    }
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, title: edited, editable: !task.editable }
          : task,
      ),
    );
   
   
  };

  const toggleEdit = (id: number) => {
     togglehorizontal()
     setTimeout(togglehorizontal, 1000);
     setTasks(prev =>
     prev.map(task =>
        task.id === id ? { ...task, editable: !task.editable } : task,
      ),
    );
    setedited('');
  };

  const[horizontal,sethorizontal]=useState(true)
  const togglehorizontal = ()=>{
    sethorizontal(!horizontal);
  }

 const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

const[righdist,setright]=useState(0)
const toggleright=(right:any)=>{
    if(right==0){
      setright(150);
    }else{
      setright(0);
    }
}

  const addTask = () => {
    if (newTaskTitle.trim() === '') {
      Alert.alert('Please enter a task title');
      return;
    }
    if (newTaskTime.trim() === '') {
      Alert.alert('Please enter a task time');
      return;
    }
    if (newColor.trim() === '') {
      Alert.alert('Please select a category');
      return;
    }

    // Create new task with unique id and default color & unchecked status
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title: newTaskTitle,
      time: newTaskTime,
      color: newColor, // default dot color, change as needed
      checked: false,
      editable: false,
      rightd: righdist,
    };

    setTasks(prev => [...prev, newTask]);
    setNewTaskTitle('');
    setNewTaskTime('');
    setNewColor('');
    setModalVisible(false);
  };

  const togglelistcat=()=>{
    setlistcat(!listcat);
  }
  const toggleListview=()=>{
    setlistcat(false);
    setmainview(true);
    togglelistcat;
  }
  const toggleCatogryview=()=>{
    setlistcat(true);
    setmainview(false);
    togglelistcat;
  }
  
  

  return (
   <SafeAreaView>
      {/* Search Box */}
      <View style={{backgroundColor:'rgba(0, 0, 0, 0.41)',height:45,width:'100%'}}></View>
       <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Texts style={styles.TextStyle} Value={"Today"}/>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 6,
            alignItems: 'center',
          }}
        >
          {searching ? (
            <Buttons style={{
                width: 40,
                alignItems: 'center',
                height: 40,
                borderRadius: 40,
                padding: 6,
                borderWidth: 3,
                borderColor: '#006CFF',
              }} onPress={() => toggleSearch(searching)} Value={<Icons name={"search"} size={21} style={{bottom:.5}} color={'#006CFF'} />}/>  // <Icon name="search" size={21} style={{bottom:.5}} color='#006CFF' />
          ) : (
            <View style={{alignItems:'center'}}>
              <View style={{borderRadius:10,backgroundColor:'red',borderWidth:1.5,borderColor:'red',width:22,alignItems:'center',zIndex:1,position:'absolute',bottom:35,left:184
              }}>
              <Icons name={'close'} size={18} color={"white"} style={{bottom:1}} onPress={() => toggleSearch(searching)}/>
              </View>
              {/* <TextInput
                 placeholder="Enter your Searches Here"
                 value={valsearch}
                 onChangeText={setvalsearch}
                 style={{
                 zIndex:.9,
                 width: 200,
                 fontSize: 16,
                 borderColor: '#b3b3b3',
                 borderWidth: 3,
                 borderRadius: 10,
                }}
              /> */}
              <TextInputs placeholder={"Enter your Searches Here"} value={valsearch} style={{
                 zIndex:.9,
                 width: 200,
                 fontSize: 16,
                 borderColor: '#b3b3b3',
                 borderWidth: 3,
                 borderRadius: 10,
                }} onChangeText={setvalsearch}/>
              
            </View>
          )}

          {/* Task Add */}
           
            <Pressable
              style={{
                width: 40,
                alignItems: 'center',
                height: 40,
                borderRadius: 40,
                padding: 6,
                borderWidth: 3,
                borderColor: '#006CFF',
              }}
             onPress={() => setModalVisible(true)}
            >
              <Icon name="plus" size={25} color="#006CFF" style={{bottom:1}} />
             
            </Pressable>
        {/* <Button /> */}
          
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Render tasks with toggle */}
        {mainview?(<Alltask
        horizontal={horizontal}
        togglehorizontal={togglehorizontal}
        toggleright={toggleright}
          valsearch={valsearch}
          tasks={tasks}
          edited={edited}
          setedited={setedited}
          toggleDone={toggleDone}
          toggleEdit={toggleEdit}
          deleteHandler={deleteHandler}
          toggleTask={toggleTask}
        />):<Category tasks={tasks}/>}
        

     

        <Addtodo
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          newTaskTitle={newTaskTitle}
          setNewTaskTitle={setNewTaskTitle}
          newTaskTime={newTaskTime}
          setNewTaskTime={setNewTaskTime}
          newColor={newColor}
          setNewColor={setNewColor}
          addTask={addTask}
        />

        {/* category toggle button */}
      </ScrollView>
      <Pressable
          style={{
            backgroundColor: '#006CFF',
            height: 65,
            width: 64,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 32,
            left: 360,
            position:'absolute',
            top:850,
            zIndex:1,
          }}
          onPress={togglelistcat}
        >
          <Text
            style={{
              fontSize: 45,
              fontWeight: 300,
              color: 'white',
              bottom: 1.5,
            }}
          >
            +
          </Text>
        </Pressable>

       {listcat?(<View style={{position:'absolute',top:750,height:90,width:170,backgroundColor:'rgb(250, 250, 250)',padding:2,bottom:130,left:250,borderRadius:12,zIndex:0.5,alignItems:'center',justifyContent:'center',gap:1,borderWidth:1,borderColor:"#dadada"}}>
        <Buttons onPress={toggleListview} style={{backgroundColor:'rgba(0, 0, 0, 0.05)',width:"100%",height:"50%",paddingVertical:4,borderRadius:10,}} Value={<Text style={{color:'#006CFF',fontSize:25,fontWeight:500}}> ✔︎ List</Text>}/>
        {/* <Pressable onPress={toggleListview}  style={{backgroundColor:'rgba(0, 0, 0, 0.05)',width:"100%",height:"50%",paddingVertical:4,borderRadius:10,}}><Text style={{color:'#006CFF',fontSize:25,fontWeight:500}}> ✔︎ List</Text></Pressable> */}
        <Pressable onPress={toggleCatogryview} style={{backgroundColor:'rgba(0, 0, 0,0.05)',width:"100%",height:"50%",paddingVertical:4,borderRadius:10}}><Text style={{color:'#006CFF',fontSize:25,fontWeight:500}}> ⎅ Category</Text></Pressable>
        </View>):""}
        


    </SafeAreaView>
    </SafeAreaView>
  );
};

export default App;
