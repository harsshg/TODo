import { useWindowDimensions } from 'react-native';
 const dimensions = useWindowDimensions();
const dstyle = {
  drawerActiveTintColor: 'green',
  drawerInactiveTintColor: 'rgb(194,194,194)',
  drawerActiveBackgroundColor: '#e6f0ff',
  drawerLabelStyle: {
    // fontWeight:900,
    fontSize: 19,
  },
  drawerStyle: {
    backgroundColor: 'rgba(0,0,0,0.81)',
    width: 280,
  },
  //  drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
};

export default dstyle;
