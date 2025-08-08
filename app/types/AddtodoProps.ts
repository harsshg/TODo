import React from 'react';

export interface AddtodoProps {
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
