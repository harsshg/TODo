import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Categorydetails, Buttons } from './index';
import { objCat, styles } from '../constants/index';
import { Taskcat, CategoryProps } from '../types';

const Category: React.FC<CategoryProps> = ({ tasks, onEditTask }) => {
  const [greytasks, setGreytasks] = useState<Taskcat[]>([]);
  const [greentasks, setGreentasks] = useState<Taskcat[]>([]);
  const [redtasks, setRedtasks] = useState<Taskcat[]>([]);
  const [yellowtasks, setYellowtasks] = useState<Taskcat[]>([]);
  const [violettasks, setViolettasks] = useState<Taskcat[]>([]);

  const [taskcolorwise, settaskcolorwise] = useState<Taskcat[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [bg, setbg] = useState<{ color: string; name: string; fontcolor: string } | null>(null);
  const [title, settitle] = useState('');

  useEffect(() => {
    const tempGreyTasks: Taskcat[] = [];
    const tempGreenTasks: Taskcat[] = [];
    const tempRedTasks: Taskcat[] = [];
    const tempYellowTasks: Taskcat[] = [];
    const tempVioletTasks: Taskcat[] = [];

    tasks.forEach((task: Taskcat) => {
      switch (task.color) {
        case '#dadada':
          tempGreyTasks.push(task);
          break;
        case '#61DEA4':
          tempGreenTasks.push(task);
          break;
        case '#F45E6D':
          tempRedTasks.push(task);
          break;
        case '#FFE761':
          tempYellowTasks.push(task);
          break;
        case '#B678FF':
          tempVioletTasks.push(task);
          break;
      }
    });

    setGreytasks(tempGreyTasks);
    setGreentasks(tempGreenTasks);
    setRedtasks(tempRedTasks);
    setYellowtasks(tempYellowTasks);
    setViolettasks(tempVioletTasks);
  }, [tasks]);

  const togglemodel = () => {
    setModalVisible(!modalVisible);
  };

  const togglemodelviatask = (task: { color: string; name: string; fontcolor: string }) => {
    switch (task.color) {
      case '#dadada':
        settaskcolorwise(greytasks);
        break;
      case '#61DEA4':
        settaskcolorwise(greentasks);
        break;
      case '#F45E6D':
        settaskcolorwise(redtasks);
        break;
      case '#FFE761':
        settaskcolorwise(yellowtasks);
        break;
      case '#B678FF':
        settaskcolorwise(violettasks);
        break;
    }
    setbg(task);
    settitle(task.name);
    setModalVisible(true);
  };

  return (
    <View style={styles.categorypagecontainer}>
      <Text style={styles.catergorydetails}>
        Total <Text style={styles.catergorytext}>Pending</Text> task's :- {tasks.length}
      </Text>

      {objCat.map((task) => (
        <Buttons
          key={task.id}
          onPress={() => togglemodelviatask(task)}
          style={{
            height: 90,
            backgroundColor: task.color,
            width: '100%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
          Value={
            <Text style={{ color: task.fontcolor, fontSize: 30, fontWeight: '500' }}>
              {task.name}
            </Text>
          }
        />
      ))}

      <Categorydetails
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        togglemodel={togglemodel}
        bg={bg}
        taskcolorwise={taskcolorwise}
        onEditTask={onEditTask}
      />
    </View>
  );
};

export default Category;
