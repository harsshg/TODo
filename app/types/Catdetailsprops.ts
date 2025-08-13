export interface Taskcatdetail {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
  rightd: number;
}

export interface CategoryDetailsProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  togglemodel: () => void;
  bg: { color: string; name: string; fontcolor: string } | null;
  taskcolorwise: Taskcatdetail[];
  onEditTask?: (taskId: number, newTitle: string) => void;
}
