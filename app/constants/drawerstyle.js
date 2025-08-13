
import { useWindowDimensions } from 'react-native';
import {colors} from '../constants'
const dstyle = () => {
  const dimensions = useWindowDimensions();

  return {
    drawerActiveTintColor: 'green',
    drawerInactiveTintColor: 'rgb(255, 255, 255)',
    drawerActiveBackgroundColor: '#e6f0ff',
    drawerLabelStyle: {
      fontSize: 19,
    },
    drawerStyle: {
      backgroundColor: '#f4511e', 
      width: 280,
    },
    drawerType: dimensions.width >= 768 ? 'permanent' : 'slide', 

  
    headerStyle: {
      height: 135, 
      backgroundColor: '#f4511e', 
    },


    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30,
    },
  };
};

export default dstyle;

