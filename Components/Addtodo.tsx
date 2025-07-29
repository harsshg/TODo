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
  addTask
}) => {
  return (
    <SafeAreaView>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Android back handler
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
            <TextInput
              placeholder="Enter color here('green')"
              style={styles.AddtaskTimeInput}
              value={newColor}
              onChangeText={setNewColor}
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
