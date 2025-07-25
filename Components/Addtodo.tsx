import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from '../styles'


const Addtodo = () => {
  return (
    <SafeAreaView style={{position:"absolute", marginLeft:"5%",backgroundColor:'rgba(0, 0, 0, 0.82)' , borderRadius:20}}>
    <View style={styles.AddTask}>
        <Text style={styles.Addtasktext}>Add Todo ☇</Text>
        <View style={styles.Addtaskmsgbx}></View>
        <View style={styles.Addtaskcd}>
        <Text style={styles.AddtaskCreate}>Cancel</Text>
        <Text style={styles.AddtaskDone}>Done</Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Addtodo