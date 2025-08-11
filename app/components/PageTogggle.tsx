import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../constants'
import {Buttons,Texts} from './index'

const PageTogggle = ({onPressHome,onPressDone,onPressPending}:any) => {
  return (
         <View style={styles.togglepagescontainer}>
           <Buttons onPress={onPressHome} style ={styles.togglePages} Value={<Texts style={styles.togglePagestxt} Value={'All'}/>}/>
           <Buttons onPress={onPressPending} style ={styles.togglePages} Value={<Texts style={styles.togglePagestxt} Value={'Pending'}/>}/>
            <Buttons onPress={onPressDone} style ={styles.togglePages} Value={<Texts style={styles.togglePagestxt} Value={'Done'}/>}/>
         </View>
  )
}

export default PageTogggle