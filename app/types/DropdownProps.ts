export interface DropdownsProps {
  obj: { name: string }[]; // array of objects with 'name'
  selectedCategory: string;
  handleCategorySelection: (item: { name: string }) => void;
}
