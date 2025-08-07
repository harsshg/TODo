import {   
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform, } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from '../constants/index';
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

  const handleCategorySelection = (item: any) => {
    setSelectedCategory(item.name);
    setNewColor(item.color);
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
            
            {/* Color Preview */}
            {selectedCategory && (
              <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                marginBottom: 10,
                paddingHorizontal: 12,
                paddingVertical: 8,
                backgroundColor: '#f5f5f5',
                borderRadius: 8
              }}>
                <View style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: newColor,
                  marginRight: 10
                }} />
                <Text style={{ fontSize: 16, color: '#333' }}>
                  Selected: {selectedCategory}
                </Text>
              </View>
            )}
            
            <Dropdown
              data={obj}
              labelField="name"
              valueField="name"
              placeholder="Select Category"
              value={selectedCategory}
              onChange={handleCategorySelection}
              style={{
                height: 50,
                width: 370,
                marginBottom: 20,
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 8,
                paddingHorizontal: 12
              }}
              containerStyle={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 8
              }}
              itemTextStyle={{
                fontSize: 16,
                color: '#333'
              }}
              placeholderStyle={{
                fontSize: 16,
                color: '#999'
              }}
              selectedTextStyle={{
                fontSize: 16,
                color: '#333'
              }}
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
