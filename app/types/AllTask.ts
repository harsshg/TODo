export interface Task {
  right: number; // corrected name from rightd → right
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
}

export interface AlltaskProps {
  horizontal: boolean;
  togglehorizontal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleright: (id: number) => void;
  valsearch: string;
  tasks: any;
  edited: string;
  setedited: React.Dispatch<React.SetStateAction<string>>;
  toggleDone: (id: number) => void;
  toggleEdit: (id: number) => void;
  deleteHandler: (id: number) => void;
  toggleTask: (id: number) => void;
    onPressHome: () => void;
  onPressDone: () => void;
  onPressPending: () => void;
}
