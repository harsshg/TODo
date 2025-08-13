import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Modals, Texts } from './index';
import { Taskcatdetail, CategoryDetailsProps } from '../types';

const Categorydetails: React.FC<CategoryDetailsProps> = ({
  setModalVisible,
  modalVisible,
  togglemodel,
  bg,
  taskcolorwise,
  onEditTask,
}) => {
  const [editingTask, setEditingTask] = useState<Taskcatdetail | null>(null);
  const [editText, setEditText] = useState('');

  const startEdit = (task: Taskcatdetail) => {
    setEditingTask(task);
    setEditText(task.title);
  };

  const saveEdit = () => {
    if (editingTask && onEditTask) {
      onEditTask(editingTask.id, editText);
      setEditingTask(null);
      setEditText('');
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditText('');
  };

  return (
    <View>
      <Modals
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(true)}
        Value={
          <View
            style={{
              backgroundColor: bg?.color || '#dadada',
              height: '100%',
              width: '100%',
              top: 30,
              borderRadius: 30,
              padding: 10,
              gap: 30,
            }}
          >
            {/* Header */}
            <Pressable
              onPress={togglemodel}
              style={{
                backgroundColor: 'black',
                opacity: 0.47,
                height: 10,
                width: 95,
                top: 10,
                borderRadius: 10,
                left: '39.7%',
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: '800',
                  letterSpacing: 1,
                  opacity: 0.9,
                  color: bg?.fontcolor || 'black',
                }}
              >
                {bg?.name || 'Category'}
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  color: bg?.fontcolor || 'black',
                  fontWeight: '500',
                }}
              >
                ✎
              </Text>
            </View>

            {/* Task list */}
            {taskcolorwise.map((task) => (
              <View
                key={task.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 10,
                  paddingLeft: 8,
                }}
              >
                <View
                  style={{
                    borderBottomColor: bg?.fontcolor || 'black',
                    borderBottomWidth: 1,
                    paddingBottom: 15,
                    width: '100%',
                  }}
                >
                  <Texts
                    style={{
                      fontSize: 25,
                      fontWeight: '500',
                      color: bg?.fontcolor || 'black',
                    }}
                    Value={task.title}
                  />
                  <Texts
                    style={{
                      color: bg?.fontcolor || 'black',
                      opacity: 0.9,
                    }}
                    Value={task.time}
                  />
                </View>
              </View>
            ))}
          </View>
        }
      />
    </View>
  );
};

export default Categorydetails;
