import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const App = () => {
  let styles = StyleSheet.create({
    container: {
      backgroundColor:"",
      height: '100%',
      width: '100%',
      marginTop: 50,
      padding: 10,
      fontFamily: 'SFProDisplay-Regular',
    },
    viewbox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      height: 100,
    },
    TextStyle: {
      
      fontWeight: '500',
      letterSpacing: 0,
      fontSize: 30,
      color: 'black',
    },
    ADD: {
      fontSize: 30,
      fontWeight: '400',
      borderWidth: 3,
      color: '#006CFF',
      paddingHorizontal: 12,
      paddingVertical: 0,
      borderColor: '#006CFF',
      borderRadius: 50,
    },
    taskContainer: {
      padding: 20,
      display: 'flex',
      flexDirection: 'row',
      borderBottomWidth:1,
      borderBottomColor: '#a6a6a6',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tick:{
      height:30,
      width:30,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#006CFF',
    },
    texttodo:{
      fontSize: 20,
      letterSpacing: 1,
      color: 'black',
      fontWeight: '400',
     
    },
    dot:{
      height: 18,
      width: 18,
      borderRadius: 50,
      backgroundColor: 'red',
      marginLeft: 10,
    },

    // Here View starts
    AddTask:{
      shadowOffset: { width: 0, height: 2 },
      shadowColor : 'black',
      
      borderWidth: 1,
      borderRadius: 20,
      padding: 20,
      borderColor: '#a6a6a6',
      marginHorizontal: "auto",
     marginTop: 50,
     display: 'flex',
     flexDirection: 'column',
     gap: 10,
    },
     Addtasktext:{
        fontSize: 30,
        fontWeight: '700',
        letterSpacing: 1,
        color: 'black',
        
      },
      Addtaskmsgbx:{
       height: 250,
       width: 350,
       borderColor: '#a6a6a6',
       borderWidth: 1,
       borderRadius: 20,
      },
      Addtaskcd:{
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginHorizontal: 10,
      },
      AddtaskDone:{
        fontSize: 25,
        
        color: '#006CFF',
        fontWeight: 800,
        marginRight: 10,
      },
      AddtaskCreate:{
        fontSize: 25,
        fontWeight: '500',

        color: '#006CFF',
      }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewbox}>
        <Text style={styles.TextStyle}>Today's Tasks ⛅︎</Text>
        <Text style={styles.ADD}>+</Text>
      </View>
      
      <View style = {[styles.taskContainer]}>
       <View style={{flexDirection: 'row', alignItems: 'center',gap: 10}}>
        <View style={styles.tick}></View>
        <Text style={styles.texttodo}>Pay for rent 💸</Text>
       </View>
       <View style={styles.dot}></View>
      </View>

      <View style = {[styles.taskContainer,{marginTop: 20}]}>
       <View style={{flexDirection: 'row', alignItems: 'center',gap: 10}}>
        <View style={styles.tick}></View>
        <Text style={styles.texttodo}>Buy a milk 🥛</Text>
       </View>
       <View style={[styles.dot,{backgroundColor:"#B6F500"}]}></View>
      </View>

      <View style = {[styles.taskContainer,{marginTop: 20}]}>
       <View style={{flexDirection: 'row', alignItems: 'center',gap: 10}}>
        <View style={styles.tick}></View>
        <Text style={styles.texttodo}>Pickup Mickael 📍</Text>
       </View>
       <View style={[styles.dot,{backgroundColor:"#56DFCF"}]}></View>
      </View>

      <View style = {[styles.taskContainer,{marginTop: 20}]}>
       <View style={{flexDirection: 'row', alignItems: 'center',gap: 10}}>
        <View style={styles.tick}></View>
        <Text style={styles.texttodo}>Buy a chocolate 🍫 for Charlotte</Text>
       </View>
       <View style={[styles.dot,{backgroundColor:"#C68EFD"}]}></View>
      </View>


     {/* ADD TODO */}

     <View style={styles.AddTask}>
      <Text style={styles.Addtasktext}>Add Todo ☇</Text>
      <View style={styles.Addtaskmsgbx}></View>
      <View style={styles.Addtaskcd}>
        <Text style={styles.AddtaskCreate}>Cancel</Text>
        <Text style={styles.AddtaskDone}>Done</Text>
      </View>
     </View>
      


    </SafeAreaView>
  );
};

export default App;
