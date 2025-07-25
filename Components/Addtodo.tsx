import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import styles from '../styles'


const Addtodo = () => {
  return (
    <SafeAreaView>
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