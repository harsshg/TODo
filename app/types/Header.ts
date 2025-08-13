export interface HeaderProps {
  searching: boolean;
  toggleSearch: (current: boolean) => void;
  valsearch: string;
  setvalsearch: (value: string) => void;
  setModalVisible: (visible: boolean) => void;
}
