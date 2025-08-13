export interface Taskeditmodel {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
  rightd: number;
}

export interface EditModelProps {
  seteditModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  editModalVisible: boolean;
  toggleCancelinedit: () => void;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  task: Taskeditmodel;
  toggleDone: (id: number) => void;
}
