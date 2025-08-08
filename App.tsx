import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';

import {styles} from './app/constants/index'; 

import {
  Addtodo,
  Category,
  Alltask,
  obj,
  Buttons,
  Icons,
  Texts,
  TextInputs,
  Header,
} from './app/components/index';




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
  const [mainview, setmainview] = useState(true); //Main screen default:-true
  const [valsearch, setvalsearch] = useState('');

  const deleteHandler = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    togglehorizontal();
  };

  const toggleSearch = (prev: boolean) => {
    setvalsearch('');
    setsearch(!prev);
  };

  const toggleDone = (id: number) => {
    togglehorizontal();
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
    togglehorizontal();
    setTimeout(togglehorizontal, 1000);
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, editable: !task.editable } : task,
      ),
    );
    setedited('');
  };

  const [horizontal, sethorizontal] = useState(true);
  const togglehorizontal = () => {
    sethorizontal(!horizontal);
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  const [righdist, setright] = useState(0);
  const toggleright = (right: any) => {
    if (right == 0) {
      setright(150);
    } else {
      setright(0);
    }
  };

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

  const togglelistcat = () => {
    setlistcat(!listcat);
  };
  const toggleListview = () => {
    setlistcat(false);
    setmainview(true);
    togglelistcat;
  };
  const toggleCatogryview = () => {
    setlistcat(true);
    setmainview(false);
    togglelistcat;
  };

  return (
    <SafeAreaView>
      {/* Top View */}
      <View
        style={styles.topBarfortimeandbattery}
      ></View>
      <SafeAreaView style={styles.container}>
        
        <Header searching={searching} toggleSearch={toggleSearch} valsearch = {valsearch} setvalsearch={setvalsearch} setModalVisible={setModalVisible}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Render tasks with toggle */}
          {mainview ? (<View>
            <Alltask
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
            />
            </View>
          ) : (
            <Category tasks={tasks} />
          )}

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
        
         <Buttons
             style={styles.togglecatnlist}
             onPress={togglelistcat}
             Value={
               <Texts
                 style={{
                   fontSize: 45,
                   fontWeight: '300', // must be string in RN
                   color: 'white',
                   bottom: 1.5,
                 }}
                 Value="+"
               />
             }
           />
     
           {listcat && (
             <View style={styles.listcat}>
               <Buttons
                 onPress={toggleListview}
                 style={styles.listcatbtn}
                 Value={<Texts style={styles.liscatbtntxt} Value="✔︎ List" />}
               />
               <Buttons
                 onPress={toggleCatogryview}
                 style={styles.catview}
                 Value={<Texts style={styles.catviewtxt} Value="⎅ Category" />}
               />
             </View>
           )}

      </SafeAreaView>
    </SafeAreaView>
  );
};

export default App;


