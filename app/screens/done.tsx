// // import React from 'react';
// // import { Alltask } from '../components/index';
// // import { useTodoApp } from '../components/UseTodo';

// // const Done = () => {
// //   const state = useTodoApp();

// //   // Filter only completed tasks


// //   return (
// //     <Alltask
// //       horizontal={state.horizontal}
// //       togglehorizontal={state.toggleHorizontal}
// //       toggleright={state.toggleRight}
// //       valsearch={state.valsearch}
// //       tasks={filtered} // Directly pass filtered tasks
// //       edited={state.edited}
// //       setedited={state.setEdited}
// //       toggleDone={state.toggleDone}
// //       toggleEdit={state.toggleEdit}
// //       deleteHandler={state.deleteHandler}
// //       toggleTask={state.toggleTask}
// //     />
// //   );
// // };

// // export default Done;
// import { View, Text, ScrollView, SafeAreaView } from 'react-native'
// import React from 'react'
// import { Addtodo, Alltask, Category, Header, ToggleListCategory } from '../components/index'
// import { useTodoApp } from '../components/UseTodo'
// import { styles } from '../constants'

// const Done = () => {
  
//   const state = useTodoApp();
//     const filtered = state.tasks.filter(task => task.checked === true);
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
//             // <Home/>
//             // <Done/>
//             // <Pending/>


//             <Alltask
//               horizontal={state.horizontal}
//               togglehorizontal={state.toggleHorizontal}
//               toggleright={state.toggleRight}
//               valsearch={state.valsearch}
//               tasks={filtered}
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

// export default Done


//++++++++++++++++++++++++++++++++++++++++

// import React from 'react';
// import { View, ScrollView, SafeAreaView } from 'react-native';
// import { Addtodo, Alltask, Category, Header, ToggleListCategory } from '../components';
// import { styles } from '../constants';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../App';
// import { useTodo } from '../components/TodoContext';

// type Props = NativeStackScreenProps<RootStackParamList, 'Done'>;

// export const Done = ({ navigation }: Props) => {
//   const state = useTodo();
//   const filtered = state.tasks.filter(task => task.checked === true);

//   return (
//     <SafeAreaView>
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
//               tasks={filtered}
//               edited={state.edited}
//               setedited={state.setEdited}
//               toggleDone={state.toggleDone}
//               toggleEdit={state.toggleEdit}
//               deleteHandler={state.deleteHandler}
//               toggleTask={state.toggleTask}
//               onPressHome={()=>navigation.popToTop()}
//               onPressDone={()=>{}}
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


//Bottom Tabs implementation
import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Addtodo, Alltask, Category, Header, Texts, ToggleListCategory } from '../components';
import { styles } from '../constants';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../components/TabsNavigator';
import { useTodo } from '../components/TodoContext';

type Props = BottomTabScreenProps<TabsParamList, 'Done'>;

export const Done = ({ navigation }: Props) => {
  const state = useTodo();
  const filtered = state.tasks.filter(task => task.checked === true);
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
      {filtered.length==0? (<Texts
        Value={' No Done Task'}
        style={styles.Notaskview}
        />): ""}
        
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
              tasks={filtered}
              edited={state.edited}
              setedited={state.setEdited}
              toggleDone={state.toggleDone}
              toggleEdit={state.toggleEdit}
              deleteHandler={state.deleteHandler}
              toggleTask={state.toggleTask}
              onPressHome={() => navigation.navigate('Home')}
              onPressDone={() => navigation.navigate('Done')}
              onPressPending={() => navigation.navigate('Pending')}
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
