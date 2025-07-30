import {   
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform, } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from '../styles';
import { SelectList } from 'react-native-dropdown-select-list'
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
// import { Dropdown } from 'react-native-element-dropdown';
interface AddtodoProps {
  
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  newTaskTitle: string;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  newTaskTime: string;
  setNewTaskTime: React.Dispatch<React.SetStateAction<string>>;
  newColor: string;
  setNewColor: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

const Addtodo: React.FC<AddtodoProps> = ({
  modalVisible,
  setModalVisible,
  newTaskTitle,
  setNewTaskTitle,
  newTaskTime,
  setNewTaskTime,
  newColor,
  setNewColor,
  addTask,
}) => {
    let obj =[
  { id: 1, color:'#dadada',name:'Inbox',fontcolor:'black',colorname:'grey' },
  { id: 2, color:'#61DEA4',name:'Work',fontcolor:'white',colorname:'green' },
  { id: 3, color:'#F45E6D',name:'Shopping',fontcolor:'white',colorname:'red'  },
  { id: 4, color:'#FFE761',name:'Family',fontcolor:'black',colorname:'yellow'  },
  { id: 5, color:'#B678FF',name:'Personal',fontcolor:'white',colorname:'violet' }, 
];
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");
  const handleCategorySelection = (val: string) => {
    setSelectedCategory(val);
    // Optionally, you can setNewColor here if you want to update color in parent
    setNewColor(val);
  };


  return (
    <SafeAreaView>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} 
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.Addtasktext}>Add Todo ☇</Text>

            <TextInput
              placeholder="Task Title"
              style={styles.Addtaskmsgbx}
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />
            <TextInput
              placeholder="Task Time (e.g. 8:00 AM)"
              style={styles.AddtaskTimeInput}
              value={newTaskTime}
              onChangeText={setNewTaskTime}
            />
            
      <SelectList
        data={obj.map(item => ({ key: item.id.toString(), value: item.color }))}
        setSelected={handleCategorySelection}
        placeholder="Select Category"
        boxStyles={{height:50,width:370,marginBottom:20}}
        dropdownStyles={{height:150,position:'absolute',backgroundColor:'white',width:370,top:40,zIndex:3}}
        defaultOption={
          selectedCategory
            ? { key: obj.find(item => item.name === selectedCategory)?.id?.toString() || "", value: selectedCategory }
            : undefined
        }
        
      />

            

            <View style={styles.Addtaskcd}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.AddtaskCreate}>Cancel</Text>
              </Pressable>
              <Pressable onPress={addTask}>
                <Text style={styles.AddtaskDone}>Done</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      </SafeAreaView>
  );
};

export default Addtodo;
