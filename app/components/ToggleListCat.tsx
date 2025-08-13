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
        Value={
          <Texts
            style={{
              fontSize: 45,
              fontWeight: '300',
              color: 'white',
              bottom: 1.5,
            }}
            Value="+"
          />
        }
      />

      {listcat && (
        <View style={styles.listcat}>
          <Buttons
            onPress={toggleListview}
            style={styles.listcatbtn as StyleProp<ViewStyle>}
            Value={<Texts style={styles.liscatbtntxt} Value="✔︎ List" />}
          />
          <Buttons
            onPress={toggleCategoryview}
            style={styles.catview as StyleProp<ViewStyle>}
            Value={<Texts style={styles.catviewtxt} Value="⎅ Category" />}
          />
        </View>
      )}
    </>
  );
}
