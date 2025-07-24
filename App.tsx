import { View, Text, SafeAreaView, StyleSheet, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';

const initialTasks = [
  { id: 1, title: "Pay for rent 💸", time: "8:00 AM", color: "red", checked: true },
  { id: 2, title: "Buy a milk 🥛", time: "9:30 AM", color: "#B6F500", checked: false },
  { id: 3, title: "Pickup Mickael 📍", time: "5:30 PM", color: "#56DFCF", checked: false },
  { id: 4, title: "Buy a chocolate 🍫 for Charlotte", time: "6:00 PM", color: "#C68EFD", checked: false },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 0,
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
      display: 'flex',
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
      color: '#006CFF',
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
    AddTask: {
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'black',
      borderWidth: 0.9,
      borderRadius: 20,
      padding: 20,
      borderColor: '#a6a6a6',
      marginHorizontal: 'auto',
      marginTop: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
    Addtasktext: {
      fontSize: 30,
      fontWeight: '700',
      letterSpacing: 1,
      color: 'black',
    },
    Addtaskmsgbx: {
      height: 250,
      width: 350,
      borderColor: '#a6a6a6',
      borderWidth: 0.9,
      borderRadius: 20,
    },
    Addtaskcd: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
    },
    AddtaskDone: {
      fontSize: 25,
      color: '#006CFF',
      fontWeight: '600',
      marginRight: 10,
    },
    AddtaskCreate: {
      fontSize: 25,
      fontWeight: '400',
      color: '#006CFF',
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
          onPress={() => {
            Alert.alert("Here you can add a new task");
          }}
          style={styles.ADD}
        >
          +
        </Text>
      </View>

      {/* Render tasks with toggleable tick */}
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

      {/* ADD TODO */}
      <View style={styles.AddTask}>
        <Text style={styles.Addtasktext}>Add Todo ☇</Text>
        <View style={styles.Addtaskmsgbx}></View>
        <View style={styles.Addtaskcd}>
          <Text style={styles.AddtaskCreate}>Cancel</Text>
          <Text style={styles.AddtaskDone}>Done</Text>
        </View>
      </View>

      <Text style={[styles.lastone,{textDecorationLine:"underline"}]}>Created By <Text style={{color:"red"}}>Harsh</Text></Text>
    </SafeAreaView>
  );
};

export default App;

