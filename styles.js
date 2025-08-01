import{StyleSheet}from'react-native';

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 50,
      padding: 10,
      fontFamily: 'SFProDisplay-Regular',
    },
    viewbox: {
      borderBottomColor: '#ff0037',
      // borderBottomWidth: 2,
      borderStyle:'dashed',
      borderRadius:18,
      marginBottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding:8,
      height:90,
    },
    TextStyle: {
      fontWeight: '500',
      letterSpacing: 0,
      fontSize: 30,
      color: 'black',
    },
    ADD: {
      backgroundColor:'#f7f7f7',
      position:'sticky',
      fontSize: 30,
      fontWeight: '400',
      height:50,
      borderWidth: 3,
      color: '#006CFF',
      paddingHorizontal: 14,
      paddingVertical: 0,
      borderColor: '#006CFF',
      borderRadius: 50,
    },
    taskContainer: {
      padding: 15,
      paddingBottom: 18,
      borderRadius:15,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#a6a6a6',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tick: {
      height: 30,
      width: 30,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#006CFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tickText: {
      fontSize: 20,
      color: 'red',
      textAlign: 'center',
    },
    texttodo: {
      fontSize: 20,
      letterSpacing: 1,
      
      fontWeight: '400',
    },
    dot: {
      height: 13,
      width: 13,
      borderRadius: 50,
      backgroundColor: 'red',
      marginLeft: 10,
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(100,100,100,0.5)',
      padding: 20,
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      marginBottom:430
    },
    Addtasktext: {
      fontSize: 29,
      fontWeight: '700',
      letterSpacing: 1,
      color: 'black',
      marginBottom: 15,
    },
    Addtaskmsgbx: {
      height: 100,
      width: '100%',
      borderColor: '#a6a6a6',
      borderWidth: 0.9,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 18,
      marginBottom: 15,
    },
    AddtaskTimeInput: {
      height: 40,
      width: '100%',
      borderColor: '#a6a6a6',
      borderWidth: 0.9,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 18,
      marginBottom: 25,
    },
    Addtaskcd: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    AddtaskDone: {
      fontSize: 20,
      color: '#006CFF',
      fontWeight: '600',
      marginHorizontal: 10,
    },
    AddtaskCreate: {
      fontSize: 20,
      fontWeight: '400',
      color: '#006CFF',
      marginHorizontal: 10,
    },
    TexttodoView:{
      display:'flex',
      flexDirection:"row",
      gap:20,
      
    },

    delete:{
      backgroundColor:"#ff0000",
      borderRadius:10,
      paddingHorizontal:7,
      paddingVertical:2,
      color:'white',
    },
    timediv:{
      width:120
    },
    edit:{
      backgroundColor:"#3d3d3d",
      paddingHorizontal:7,
      paddingVertical:2,
      borderRadius:10,
      color:"white"
    },
    editdel:{
      display:"flex",
      flexDirection:'row',
      gap:6,
    },
    editBox:{
      height: 45,  
      width: 320,
      color:'black',
      borderColor: '#a6a6a6',
      borderWidth: 0.9,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 18,
    },
    doneBtn:{
      
      paddingHorizontal:8,
      paddingVertical:3,
      borderRadius:12,
      backgroundColor:"#ff002f",
    }
    
  });
  export default styles;