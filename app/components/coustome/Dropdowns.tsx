import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../../constants';
import { DropdownsProps } from '../../types';

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
