import {
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { objCat, styles } from '../constants';
import React, { useState } from 'react';
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
                obj={objCat}
                selectedCategory={selectedCategory}
                handleCategorySelection={handleCategorySelection}
              />

              <View style={styles.Addtaskcd}>
                <Buttons onPress={() => setModalVisible(false)} Textstyle={styles.AddtaskCreate} TextValue={'Cancel'}/>
                 <Buttons onPress={addTask}  Textstyle={styles.AddtaskDone} TextValue={'Done'}/>
              </View>
            </View>
          </KeyboardAvoidingView>
        }
      />
    </SafeAreaView>
  );
};

export default Addtodo;
