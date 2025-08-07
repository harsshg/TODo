import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';

// Import components
import { Addtodo, Alltask, Category } from '../../components';
import { styles } from '../../constants';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updatedTask } : task
    ));
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.screenScrollView}>
        <View style={styles.screenHeader}>
          <Text style={styles.screenTitle}>Todo App</Text>
        </View>
        
        <Category 
          categories={categories}
          onAddCategory={addCategory}
        />
        
        <Addtodo onAddTask={addTask} />
        
        <Alltask 
          tasks={tasks}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
