import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { Buttons, Texts } from './index';
import { styles } from '../constants';
import { ToggleListCategoryProps } from '../types';

export default function ToggleListCategory({
  listcat,
  toggleListcat,
  toggleListview,
  toggleCategoryview,
}: ToggleListCategoryProps) {
  return (
    <>
      <Buttons
        style={styles.togglecatnlist as StyleProp<ViewStyle>}
        onPress={toggleListcat}
        
            Textstyle={{
              fontSize: 45,
              fontWeight: '300',
              color: 'white',
              bottom: 1.5,
            }}
            TextValue="+"
          />

      {listcat && (
        <View style={styles.listcat}>
          <Buttons
            onPress={toggleListview}
            style={styles.listcatbtn as StyleProp<ViewStyle>}
            Textstyle={styles.liscatbtntxt} TextValue="✔︎ List" />
        
          <Buttons
            onPress={toggleCategoryview}
            style={styles.catview as StyleProp<ViewStyle>}
           Textstyle={styles.catviewtxt} TextValue="⎅ Category" />
        </View>
      )}
    </>
  );
}
