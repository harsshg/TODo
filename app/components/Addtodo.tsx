import React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import obj from './initialtasks';
import { styles, colors } from '../constants';

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
  const [selectedCategory, setSelectedCategory] = React.useState('');

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

            {/* Color preview */}
            {selectedCategory && (
              <View style={styles.colorPreviewContainer}>
                <View style={[styles.colorPreviewDot, { backgroundColor: newColor }]} />
                <Text style={styles.colorPreviewText}>
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
              style={styles.dropdownContainer}
              containerStyle={{
                backgroundColor: colors.background,
                borderWidth: 1,
                borderColor: colors.borderLight,
                borderRadius: 8,
              }}
              itemTextStyle={styles.dropdownItemText}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.dropdownSelectedText}
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
