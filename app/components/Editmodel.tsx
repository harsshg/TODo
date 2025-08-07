import { View, Text, KeyboardAvoidingView, Platform, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import styles from '../../styles';

interface Task {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
  rightd: number;
}

interface EditModelProps {
  seteditModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  editModalVisible: boolean;
  toggleCancelinedit: () => void;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  task: Task;
  toggleDone: (id: number) => void;
}

const Editmodel: React.FC<EditModelProps> = ({
  seteditModalVisible,
  editModalVisible,
  toggleCancelinedit,
  placeholder,
  value,
  onChangeText,
  task,
  toggleDone
}) => {
  const [editText, setEditText] = useState(value);

  const handleSave = () => {
    onChangeText(editText);
    toggleDone(task.id);
    seteditModalVisible(false);
  };

  const handleCancel = () => {
    setEditText(value);
    toggleCancelinedit();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={editModalVisible}
      onRequestClose={() => seteditModalVisible(false)}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: 20 }}
      >
        <View style={styles.modalContent}>
          <Text style={styles.Addtasktext}>Edit Todo ☇</Text>
          
          <TextInput
            placeholder={placeholder}
            style={styles.Addtaskmsgbx}
            value={editText}
            onChangeText={setEditText}
          />
          
          <View style={styles.Addtaskcd}>
            <Pressable onPress={handleCancel}>
              <Text style={styles.AddtaskCreate}>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleSave}>
              <Text style={styles.AddtaskDone}>Save</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default Editmodel