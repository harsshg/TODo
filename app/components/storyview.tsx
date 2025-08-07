import { View, ScrollView } from 'react-native';
import React from 'react';
import { styles } from '../constants';

const Storyview = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.storyContainer}
    >
      <View style={[styles.storyItem, styles.storyPink]} />
      <View style={[styles.storyItem, styles.storyCyan]} />
      <View style={[styles.storyItem, styles.storyPink]} />
      <View style={[styles.storyItem, styles.storyCyan]} />
      <View style={[styles.storyItem, styles.storyPink]} />
      <View style={[styles.storyItem, styles.storyCyan]} />
      <View style={[styles.storyItem, styles.storyPink]} />
      <View style={[styles.storyItem, styles.storyCyan]} />
      <View style={[styles.storyItem, styles.storyPink]} />
      <View style={[styles.storyItem, styles.storyCyan]} />
      <View style={[styles.storyItem, styles.storyPink]} />
      <View style={[styles.storyItem, styles.storyCyan]} />
      <View style={[styles.storyItem, styles.storyPink]} />
      <View style={[styles.storyItem, styles.storyCyan]} />
    </ScrollView>
  );
};

export default Storyview;