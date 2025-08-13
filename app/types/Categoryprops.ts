export interface Taskcat {
  id: number;
  title: string;
  time: string;
  color: string;
  editable: boolean;
  checked: boolean;
  rightd: number;
}

export interface CategoryProps {
  tasks: Taskcat[];
  onEditTask?: (taskId: number, newTitle: string) => void;
}
