import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkBackground
  },
});

const AppBar = () => {
  return( 
  <View style={styles.container}>
    <AppBarTab title='Repositories' path='/'/>
    <AppBarTab title='Sign In' path='/signin'/>
  </View>);
};

export default AppBar;