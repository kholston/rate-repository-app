import {View, ScrollView, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.darkBackground
  },
  scrollView: {
    flexDirection: 'row',
  }
});

const AppBar = () => {
  return( 
  <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <AppBarTab title='Repositories' path='/'/>
      <AppBarTab title='Sign In' path='/signin'/>
    </ScrollView>
  </View>);
};

export default AppBar;