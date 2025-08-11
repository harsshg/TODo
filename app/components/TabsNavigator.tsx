import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Pending } from '../screens/Pending';
import { Done } from '../screens/Done';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type TabsParamList = {
  Home: undefined;
  Pending: undefined;
  Done: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Pending') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Done') {
            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="Done" component={Done} />
    </Tab.Navigator>
  );
}
