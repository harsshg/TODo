import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { TabsNavigator } from './TabsNavigator';
import { DrawerParamList } from '../types';

// Example extra screen for the drawer
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom tabs inside drawer */}
      <Drawer.Screen
        name="HomeTabs"
        component={TabsNavigator}
        options={{ title: 'Home' }}
      />
      {/* Additional drawer items */}
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
