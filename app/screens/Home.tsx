// import { View, Text, ScrollView, SafeAreaView } from 'react-native'
// import React from 'react'
// import { Addtodo, Alltask, Category, Header, ToggleListCategory } from '../components/index'
// import { useTodoApp } from '../components/UseTodo'
// import { styles } from '../constants'
// import { NativeStackScreenProps } from '@react-navigation/native-stack'
// import { RootStackParamList } from '../.././App'

// type Homeprops = NativeStackScreenProps<RootStackParamList,'Home'>

// const Home = ({navigation}:Homeprops) => {
//   const state = useTodoApp();
//   return (
    
//     <SafeAreaView>
//       <View style={styles.topBarfortimeandbattery}></View>
//       <View style={styles.container}>
//         <Header
//           searching={state.searching}
//           toggleSearch={state.toggleSearch}
//           valsearch={state.valsearch}
//           setvalsearch={state.setValsearch}
//           setModalVisible={state.setModalVisible}
//         />

//         <ScrollView showsVerticalScrollIndicator={false}>
//           {state.mainview ? (
//             <Alltask
//               horizontal={state.horizontal}
//               togglehorizontal={state.toggleHorizontal}
//               toggleright={state.toggleRight}
//               valsearch={state.valsearch}
//               tasks={state.tasks}
//               edited={state.edited}
//               setedited={state.setEdited}
//               toggleDone={state.toggleDone}
//               toggleEdit={state.toggleEdit}
//               deleteHandler={state.deleteHandler}
//               toggleTask={state.toggleTask}
//             />
//           ) : (
//             <Category tasks={state.tasks} />
//           )}

//           <Addtodo
//             modalVisible={state.modalVisible}
//             setModalVisible={state.setModalVisible}
//             newTaskTitle={state.newTaskTitle}
//             setNewTaskTitle={state.setNewTaskTitle}
//             newTaskTime={state.newTaskTime}
//             setNewTaskTime={state.setNewTaskTime}
//             newColor={state.newColor}
//             setNewColor={state.setNewColor}
//             addTask={state.addTask}
//           />
//         </ScrollView>

//         <ToggleListCategory
//           listcat={state.listcat}
//           toggleListcat={state.toggleListcat}
//           toggleListview={state.toggleListview}
//           toggleCategoryview={state.toggleCategoryview}
//         />

        
//       </View>
//     </SafeAreaView>
   
//   )
// }

// export default Home

//++++++++++++++++++++++++++++++++++++++++
// import React from 'react';
// import { View, ScrollView, SafeAreaView } from 'react-native';
// import { Addtodo, Alltask, Category, Header, ToggleListCategory } from '../components';
// import { useTodoApp } from '../components/UseTodo';
// import { styles } from '../constants';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../App';

// // ✅ Strongly typed props for Home
// type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// export const Home = ({ navigation }: Props) => {
//   const state = useTodoApp();

//   return (
//     <SafeAreaView>
//       {/* <View style={styles.topBarfortimeandbattery}></View> */}

//       <View style={styles.container}>
//         <Header
//           searching={state.searching}
//           toggleSearch={state.toggleSearch}
//           valsearch={state.valsearch}
//           setvalsearch={state.setValsearch}
//           setModalVisible={state.setModalVisible}
//         />

//         <ScrollView showsVerticalScrollIndicator={false}>
//           {state.mainview ? (
//             <Alltask
//               horizontal={state.horizontal}
//               togglehorizontal={state.toggleHorizontal}
//               toggleright={state.toggleRight}
//               valsearch={state.valsearch}
//               tasks={state.tasks}
//               edited={state.edited}
//               setedited={state.setEdited}
//               toggleDone={state.toggleDone}
//               toggleEdit={state.toggleEdit}
//               deleteHandler={state.deleteHandler}
//               toggleTask={state.toggleTask}
//               onPressHome={()=>{}}
//               onPressDone={()=>navigation.push('Done')}
//               onPressPending={()=>navigation.push('Pending')}
//             />
//           ) : (
//             <Category tasks={state.tasks} />
//           )}

//           <Addtodo
//             modalVisible={state.modalVisible}
//             setModalVisible={state.setModalVisible}
//             newTaskTitle={state.newTaskTitle}
//             setNewTaskTitle={state.setNewTaskTitle}
//             newTaskTime={state.newTaskTime}
//             setNewTaskTime={state.setNewTaskTime}
//             newColor={state.newColor}
//             setNewColor={state.setNewColor}
//             addTask={state.addTask}
//           />
//         </ScrollView>

//         <ToggleListCategory
//           listcat={state.listcat}
//           toggleListcat={state.toggleListcat}
//           toggleListview={state.toggleListview}
//           toggleCategoryview={state.toggleCategoryview}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

//++++++++++++++++++++++++++++++++++++++++

import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Addtodo, Alltask, Category, Header, ToggleListCategory } from '../components';
import { styles } from '../constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useTodo } from '../components/TodoContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: Props) => {
  const state = useTodo();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          searching={state.searching}
          toggleSearch={state.toggleSearch}
          valsearch={state.valsearch}
          setvalsearch={state.setValsearch}
          setModalVisible={state.setModalVisible}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {state.mainview ? (
            <Alltask
              horizontal={state.horizontal}
              togglehorizontal={state.toggleHorizontal}
              toggleright={state.toggleRight}
              valsearch={state.valsearch}
              tasks={state.tasks}
              edited={state.edited}
              setedited={state.setEdited}
              toggleDone={state.toggleDone}
              toggleEdit={state.toggleEdit}
              deleteHandler={state.deleteHandler}
              toggleTask={state.toggleTask}
              onPressHome={()=>{}}
              onPressDone={()=>navigation.push('Done')}
              onPressPending={()=>navigation.push('Pending')}
            />
          ) : (
            <Category tasks={state.tasks} />
          )}

          <Addtodo
            modalVisible={state.modalVisible}
            setModalVisible={state.setModalVisible}
            newTaskTitle={state.newTaskTitle}
            setNewTaskTitle={state.setNewTaskTitle}
            newTaskTime={state.newTaskTime}
            setNewTaskTime={state.setNewTaskTime}
            newColor={state.newColor}
            setNewColor={state.setNewColor}
            addTask={state.addTask}
          />
        </ScrollView>
        <ToggleListCategory
          listcat={state.listcat}
          toggleListcat={state.toggleListcat}
          toggleListview={state.toggleListview}
          toggleCategoryview={state.toggleCategoryview}
        />
      </View>
    </SafeAreaView>
  );
};
