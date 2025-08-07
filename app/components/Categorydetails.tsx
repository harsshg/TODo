import { View, Text, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../constants';

interface Task {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
  rightd: number;
}

interface CategoryDetailsProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  togglemodel: () => void;
  bg: { color: string; name: string; fontcolor: string } | null;
  taskcolorwise: Task[];
  _onEditTask?: (taskId: number, newTitle: string) => void;
}

const Categorydetails: React.FC<CategoryDetailsProps> = ({ setModalVisible, modalVisible, togglemodel, bg, taskcolorwise, _onEditTask }) => {
  const [_editingTask, _setEditingTask] = useState<Task | null>(null);
  const [_editText, _setEditText] = useState('');

  // These functions are not used in the current implementation
  // const startEdit = (task: Task) => {
  //   setEditingTask(task);
  //   setEditText(task.title);
  // };

  // const saveEdit = () => {
  //   if (editingTask && onEditTask) {
  //     onEditTask(editingTask.id, editText);
  //     setEditingTask(null);
  //     setEditText('');
  //   }
  // };

  // const cancelEdit = () => {
  //   setEditingTask(null);
  //   setEditText('');
  // };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(true)}
      >
        <View style={[styles.categoryModal, { backgroundColor: bg?.color || '#dadada' }]}>
          {/* Handle */}
          <Pressable onPress={togglemodel} style={styles.categoryHandle} />
          <View style={styles.categoryHeader}>
            <Text style={[styles.categoryTitle, { color: bg?.fontcolor || 'black' }]}>
              {bg?.name || 'Category'}
            </Text>
            <Text style={[styles.categoryEditIcon, { color: bg?.fontcolor || 'black' }]}>✎</Text>
          </View>

          {/* Tasks */}
          {taskcolorwise.map((task: any) => (
            <View key={task.id} style={styles.categoryTaskContainer}>
              <View style={[styles.categoryTaskItem, { borderBottomColor: bg?.fontcolor || 'black' }]}>
                <Text style={[styles.categoryTaskTitle, { color: bg?.fontcolor || 'black' }]}>
                  {task.title}
                </Text>
                <Text style={[styles.categoryTaskTime, { color: bg?.fontcolor || 'black' }]}>
                  {task.time}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default Categorydetails;