import {
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from '../constants/index';
import { SelectList } from 'react-native-dropdown-select-list';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
// import { Dropdown } from 'react-native-element-dropdown';
import { AddtodoProps } from '../types/index';
import { Buttons, Icons, Texts, TextInputs, Modals, Dropdowns } from './index';

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
  let obj = [
    {
      id: 1,
      color: '#dadada',
      name: 'Inbox',
      fontcolor: 'black',
      colorname: 'grey',
    },
    {
      id: 2,
      color: '#61DEA4',
      name: 'Work',
      fontcolor: 'white',
      colorname: 'green',
    },
    {
      id: 3,
      color: '#F45E6D',
      name: 'Shopping',
      fontcolor: 'white',
      colorname: 'red',
    },
    {
      id: 4,
      color: '#FFE761',
      name: 'Family',
      fontcolor: 'black',
      colorname: 'yellow',
    },
    {
      id: 5,
      color: '#B678FF',
      name: 'Personal',
      fontcolor: 'white',
      colorname: 'violet',
    },
  ];
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');

  const handleCategorySelection = (item: any) => {
    setSelectedCategory(item.name);
    setNewColor(item.color);
  };

  return (
    <SafeAreaView>
      <Modals
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        Value={
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.modalContainer}
          >
            <View style={styles.modalContent}>
              <Texts style={styles.Addtasktext} Value={'Add Todo ☇'} />

              <TextInputs
                placeholder={'Task Title'}
                style={styles.Addtaskmsgbx}
                value={newTaskTitle}
                onChangeText={setNewTaskTitle}
              />
              <TextInputs
                placeholder={'Task Time (e.g. 8:00 AM)'}
                style={styles.AddtaskTimeInput}
                value={newTaskTime}
                onChangeText={setNewTaskTime}
              />

              {selectedCategory && (
                <View style={styles.Addtodocategory}>
                  <View style={styles.Addtodoselected} />
                  <Texts
                    style={styles.Addtodoselectedtxt}
                    Value={`Selected: ${selectedCategory}`}
                  />
                </View>
              )}

              <Dropdowns
                obj={obj}
                selectedCategory={selectedCategory}
                handleCategorySelection={handleCategorySelection}
              />

              <View style={styles.Addtaskcd}>
                <Buttons onPress={() => setModalVisible(false)} Value={<Texts style={styles.AddtaskCreate} Value={'Cancel'}/>}/>
                 <Buttons onPress={addTask} Value={<Texts style={styles.AddtaskDone} Value={'Done'}/>}/>
              </View>
            </View>
          </KeyboardAvoidingView>
        }
      />
    </SafeAreaView>
  );
};

export default Addtodo;
