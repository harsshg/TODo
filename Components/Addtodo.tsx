import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../styles';

const Addtodo = ({ toggleAddTask, setinitialTasks,initialTasks  }) => {
  let[id,setid]=useState(0);
  let [task, settask] = useState('');
   let [color, setcolor] = useState('');
   let [alarm, setalarm] = useState('');
   let toggletasks =(initialTasks)=>{
      setinitialTasks([...initialTasks,{id: id,title: task,time: alarm,color: color,checked: false,}])
      setid(id+1);
   }
   

  return (
    <SafeAreaView
      style={{
        position: 'absolute',
        marginLeft: '5%',
        backgroundColor: 'rgba(44, 23, 0, 0.77)',
        borderRadius: 20,
      }}
    >
      <View style={styles.AddTask}>
        <Text style={styles.Addtasktext}>Add Todo ☇</Text>
        {/* <View style={styles.Addtaskmsgbx}></View> */}
        <View style={styles.Addtaskmsgbx}>
          {/* For color */}
          <TextInput
            onChangeText={setcolor}
            value={color}
            style={styles.inputs}
            placeholder="Enter color Here"
          />

          {/* For Alarm */}
          <TextInput
            onChangeText={setalarm}
            value={alarm}
            style={styles.inputs}
            placeholder="Enter Alarm time"
          />
          {/* For task */}
          <TextInput
            onChangeText={settask}
            value={task}
            style={styles.inputs}
            placeholder="Enter your task"
          />
        </View>
        <View style={styles.Addtaskcd}>
          <Text onPress={toggleAddTask} style={styles.AddtaskCreate}>
            Cancel
          </Text>
          <Text
           onPress={toggletasks}
            style={styles.AddtaskDone}
          >
            Done
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Addtodo;
