import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../constants';
import { Modals, Texts, TextInputs, Buttons } from './index';
import { EditModelProps,Taskeditmodel } from '../types';

const Editmodel: React.FC<EditModelProps> = ({
  seteditModalVisible,
  editModalVisible,
  toggleCancelinedit,
  placeholder,
  value,
  onChangeText,
  task,
  toggleDone
}) => {
  const [editText, setEditText] = useState(value);

  const handleSave = () => {
    onChangeText(editText);
    toggleDone(task.id);
    seteditModalVisible(false);
  };

  const handleCancel = () => {
    setEditText(value);
    toggleCancelinedit();
  };

  return (
    <Modals
      animationType="slide"
      transparent={true}
      visible={editModalVisible}
      onRequestClose={() => seteditModalVisible(false)}
      Value={
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 20
          }}
        >
          <View style={styles.modalContent}>
            <Texts style={styles.Addtasktext} Value={'Edit Todo ☇'} />

            <TextInputs
              placeholder={placeholder}
              style={styles.Addtaskmsgbx}
              value={editText}
              onChangeText={setEditText}
            />

            <View style={styles.Addtaskcd}>
              <Buttons
                onPress={handleCancel}
               Textstyle={styles.AddtaskCreate} TextValue={'Cancel'} />
              
              <Buttons
                onPress={handleSave}
               Textstyle={styles.AddtaskDone} TextValue={'Save'} />
              
            </View>
          </View>
        </KeyboardAvoidingView>
      }
    />
  );
};

export default Editmodel;
