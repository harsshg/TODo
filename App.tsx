import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Addtodo from './Components/Addtodo';
import { ScrollView } from 'react-native';

const initialTasks = [
  {
    id: 1,
    title: 'Pay for rent 💸',
    time: '8:00 AM',
    color: '#F6416C',
    checked: true,
  },
  {
    id: 2,
    title: 'Buy a milk 🥛',
    time: '9:30 AM',
    color: '#B6F500',
    checked: false,
  },
  {
    id: 3,
    title: 'Pickup Mickael 📍',
    time: '5:30 PM',
    color: '#56DFCF',
    checked: false,
  },
  {
    id: 4,
    title: 'Buy a chocolate 🍫 for Charlotte',
    time: '6:00 PM',
    color: '#C68EFD',
    checked: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = e => {
    setTasks(prev =>
      prev.map(task =>
        task.id === e ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Text style={styles.TextStyle}>
          Tasks ↯ <Text style={{ color: '#F21368' }}>☀︎₊⁺⋆.˚</Text>
        </Text>
        <Text
          onPress={() => {
            Alert.alert('Here you can add a new task');
          }}
          style={styles.ADD}
        >
          +
        </Text>
      </View>
     <ScrollView>
      {/* Render tasks with toggleable tick */}
      {tasks.map(task => (
        <View
          key={task.id}
          style={[styles.taskContainer, { marginTop: task.id !== 1 ? 10 : 0 }]}
        >
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

      {/* ADD TODO */}
      <Addtodo/>
      <Text style={[styles.lastone, { textDecorationLine: 'underline' }]}>
        Created By <Text style={{ color: 'red' }}>Harsh</Text>
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
