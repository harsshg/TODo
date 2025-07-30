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
import styles from './styles';
import Addtodo from './Components/Addtodo';
import Category from './Components/Category';
import Alltask from './Components/Alltask';
import obj from './Components/initialtasks';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';

// import { Icon1 } from 'react-native-elements';





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
  const [mainview,setmainview]=useState(true);
  const [selectedCity,setSelectedCity]=useState('null');
  const [valsearch,setvalsearch]=useState('');

  

  const deleteHandler = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleSearch = (prev: boolean) => setsearch(!prev);

  const toggleDone = (id: number) => {
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
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, editable: !task.editable } : task,
      ),
    );
    setedited('');
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };
  const addTask = () => {
    if (
      newTaskTitle.trim() === '' ||
      newTaskTime.trim() === '' ||
      newColor.trim() === ''
    ) {
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
      editable: false,
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
    setmainview(true)
  }
  const toggleCatogryview=()=>{
    setlistcat(false);
    setmainview(false);

  }
  
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Box */}
      <View style={styles.viewbox}>
        <Text style={styles.TextStyle}>
          Today
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 6,
            alignItems: 'center',
          }}
        >
          {searching ? (
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
              onPress={() => toggleSearch(searching)}
            >
              <Icon name="search" size={21} style={{bottom:.5}} color='#006CFF' />
              {/* <Text
                
                style={{ fontSize: 26, bottom: 3 }}
              >
                🔍
              </Text> */}
            </Pressable>
          ) : (
            <View style={{alignItems:'center'}}>
              <View style={{borderRadius:10,backgroundColor:'red',borderWidth:1.5,borderColor:'red',width:22,alignItems:'center',zIndex:1,position:'absolute',bottom:35,left:184
              }}>
              <Icon name='close' size={18} color="white" style={{bottom:1}}
              onPress={() => toggleSearch(searching)}/></View>
              <TextInput
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
              ></TextInput>
              {/* <Pressable  
                style={{
                  backgroundColor: '#dadada',
                  marginLeft: 142,
                  paddingHorizontal: 6,
                  borderRadius: 8,
                  paddingBottom: 1,
                  marginTop: 2,
                  borderColor: 'black',
                  borderWidth: 1.4,
                }}
              >
                <Text style={{ color: 'black' }}>Search</Text>
              </Pressable> */}
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
              {/* <Text
                style={{ fontSize: 35, bottom: 10 }}
              >
                +
              </Text> */}
            </Pressable>
          {/* <Text onPress={() => setModalVisible(true)} style={styles.ADD}>
            +
          </Text> */}
          
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Render tasks with toggle */}
        {mainview?(<Alltask
        valsearch={valsearch}
          tasks={tasks}
          edited={edited}
          setedited={setedited}
          toggleDone={toggleDone}
          toggleEdit={toggleEdit}
          deleteHandler={deleteHandler}
          toggleTask={toggleTask}
        />):<Category/>}
        

         {/* Here i will add category */}
         

        {/* Modal for Add Todo */}

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

       {listcat?(<View style={{position:'absolute',top:750,height:90,width:170,backgroundColor:'rgba(107, 106, 106, 0.16)',padding:2,bottom:130,left:250,borderRadius:12,zIndex:0.5,alignItems:'center',justifyContent:'center',gap:1,borderWidth:1,borderColor:"#dadada"}}>
        <Pressable onPress={toggleListview}  style={{backgroundColor:'rgb(238, 238, 238)',width:"100%",height:"50%",paddingVertical:4,borderRadius:10,}}><Text style={{color:'#006CFF',fontSize:25,fontWeight:500}}> ✔︎ List</Text></Pressable>
        <Pressable onPress={toggleCatogryview} style={{backgroundColor:'rgb(238, 238, 238)',width:"100%",height:"50%",paddingVertical:4,borderRadius:10}}><Text style={{color:'#006CFF',fontSize:25,fontWeight:500}}> ⎅ Category</Text></Pressable>
        </View>):""}
        


    </SafeAreaView>
  );
};

export default App;
