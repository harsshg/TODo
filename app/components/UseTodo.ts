// useTodoApp.ts
import { useState } from "react";
import { Alert } from "react-native";
import { obj } from "./index"; // adjust path

export function useTodoApp() {
  const [tasks, setTasks] = useState(obj);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskTime, setNewTaskTime] = useState("");
  const [newColor, setNewColor] = useState("");
  const [edited, setEdited] = useState("");
  const [searching, setSearching] = useState(true);
  const [listcat, setListcat] = useState(false);
  const [mainview, setMainview] = useState(true);
  const [valsearch, setValsearch] = useState("");
  const [horizontal, setHorizontal] = useState(true);
  const [righdist, setRight] = useState(0);

  const deleteHandler = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toggleHorizontal();
  };

  const toggleSearch = (prev: boolean) => {
    setValsearch("");
    setSearching(!prev);
  };

  const toggleDone = (id: number) => {
    toggleHorizontal();
    if (edited.trim() === "") {
      Alert.alert("Please enter a Task");
      return;
    }
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, title: edited, editable: !task.editable }
          : task
      )
    );
  };

  const toggleEdit = (id: number) => {
    toggleHorizontal();
    setTimeout(toggleHorizontal, 1000);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, editable: !task.editable } : task
      )
    );
    setEdited("");
  };

  const toggleHorizontal = () => setHorizontal(!horizontal);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const toggleRight = (right: any) => setRight(right === 0 ? 150 : 0);

  const addTask = () => {
    if (newTaskTitle.trim() === "") {
      Alert.alert("Please enter a task title");
      return;
    }
    if (newTaskTime.trim() === "") {
      Alert.alert("Please enter a task time");
      return;
    }
    if (newColor.trim() === "") {
      Alert.alert("Please select a category");
      return;
    }

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title: newTaskTitle,
      time: newTaskTime,
      color: newColor,
      checked: false,
      editable: false,
      rightd: righdist,
    };

    setTasks((prev) => [...prev, newTask]);
    setNewTaskTitle("");
    setNewTaskTime("");
    setNewColor("");
    setModalVisible(false);
  };

  const toggleListcat = () => setListcat(!listcat);
  const toggleListview = () => {
    setListcat(false);
    setMainview(true);
  };
  const toggleCategoryview = () => {
    setListcat(true);
    setMainview(false);
  };

  return {
    tasks, setTasks,
    modalVisible, setModalVisible,
    newTaskTitle, setNewTaskTitle,
    newTaskTime, setNewTaskTime,
    newColor, setNewColor,
    edited, setEdited,
    searching, toggleSearch,
    listcat, toggleListcat,
    mainview, toggleListview, toggleCategoryview,
    valsearch, setValsearch,
    horizontal, toggleHorizontal,
    righdist, toggleRight,
    deleteHandler,
    toggleDone,
    toggleEdit,
    toggleTask,
    addTask,
  };
}
