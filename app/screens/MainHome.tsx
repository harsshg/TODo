
// import 'react-native-gesture-handler';
// import 'react-native-reanimated';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { TodoProvider } from '../components/TodoContext';
// // Screens
// import { Home } from './Home';
// import { Done } from './Done';
// import { Pending } from './Pending';
// import { dstyle } from '../constants';
// // ✅ Drawer param list type
// import { DrawerParamList } from '../types';

// const Drawer = createDrawerNavigator<DrawerParamList>();
// const Homename = 'Home';
// function MainHome() {
//   return (
//         <Drawer.Navigator initialRouteName={Homename} screenOptions={dstyle}>
//           <Drawer.Screen name={Homename} component={Home} />
//           <Drawer.Screen name="Done" component={Done} />
//           <Drawer.Screen name="Pending" component={Pending} />
//         </Drawer.Navigator>
    
//   );
// }

// export default MainHome;

import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TodoProvider } from '../components/TodoContext';
import { Home } from './Home';
import { Done } from './Done';
import { Pending } from './Pending';
import dstyle from '../constants/drawerstyle'; // import correctly—this is a hook, not an object
import { DrawerParamList } from '../types';


const Drawer = createDrawerNavigator<DrawerParamList>();
const Homename = 'Home';

function MainHome() {
  const drawerStyles = dstyle(); // ✅ call hook/function here

  return (
    <Drawer.Navigator initialRouteName={Homename} screenOptions={drawerStyles}>
      <Drawer.Screen name={Homename} component={Home} />
      <Drawer.Screen name="Done" component={Done} />
      <Drawer.Screen name="Pending" component={Pending} />
    </Drawer.Navigator>
  );
}

export default MainHome;
