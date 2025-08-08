// import { View, Text } from 'react-native'
// import React from 'react'
// import {
//   Addtodo,
//   Category,
//   Alltask,
//   obj,
//   Buttons,
//   Icons,
//   Texts,
//   TextInputs,
//   Header,
// } from './index';
// import {styles} from '../constants/index'


// const ListnCatView = ({togglelistcat,listcat,toggleListview,toggleCatogryview}) => {
//   return (
//     <View>
     
//           <Buttons
//         style={styles.togglecatnlist}
//         onPress={togglelistcat}
//         Value={
//           <Texts
//             style={{
//               fontSize: 45,
//               fontWeight: '300', // must be string in RN
//               color: 'white',
//               bottom: 1.5,
//             }}
//             Value="+"
//           />
//         }
//       />

//       {listcat && (
//         <View style={styles.listcat}>
//           <Buttons
//             onPress={toggleListview}
//             style={styles.listcatbtn}
//             Value={<Texts style={styles.liscatbtntxt} Value="✔︎ List" />}
//           />
//           <Buttons
//             onPress={toggleCatogryview}
//             style={styles.catview}
//             Value={<Texts style={styles.catviewtxt} Value="⎅ Category" />}
//           />
//         </View>
//       )}
//     </View>
//   )
// }

// export default ListnCatView