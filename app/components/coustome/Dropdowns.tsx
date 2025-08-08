import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../../constants/index';

// Props interface in the same file
interface DropdownsProps {
  obj: { name: string }[]; // array of objects with 'name'
  selectedCategory: string;
  handleCategorySelection: (item: { name: string }) => void;
}

const Dropdowns: React.FC<DropdownsProps> = ({
  obj,
  selectedCategory,
  handleCategorySelection,
}) => {
  return (
    <Dropdown
      data={obj}
      labelField="name"
      valueField="name"
      placeholder="Select Category"
      value={selectedCategory}
      onChange={handleCategorySelection}
      style={styles.Dropdown}
      containerStyle={styles.DropdownContainer}
      itemTextStyle={styles.DropdownItemtextstyle}
      placeholderStyle={styles.DDplaceholde}
      selectedTextStyle={styles.DDselectedtxt}
    />
  );
};

export default Dropdowns;
