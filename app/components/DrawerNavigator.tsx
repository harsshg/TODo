// DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator'; // adjust path if needed
import { View, Text } from 'react-native';

// Example extra screen for the drawer
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

export type DrawerParamList = {
  HomeTabs: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {/* This will contain your bottom tabs */}
      <Drawer.Screen name="HomeTabs" component={TabsNavigator} options={{ title: 'Home' }} />
      {/* You can add more drawer items here */}
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
