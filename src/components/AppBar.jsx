import {View, ScrollView, StyleSheet} from 'react-native';
import { useQuery, useApolloClient } from '@apollo/client';
import {useNavigate} from 'react'
import Constants from 'expo-constants';

import AppBarTab, { AppBarTabWithFunction } from './AppBarTab';
import {GET_CURRENT_USER} from '../graphql/queries.js';
import useAuthStorage from '../hooks/useAuthStorage';
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
  const {data} = useQuery(GET_CURRENT_USER);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore()
  }

  return( 
  <View style={styles.container}>
    <ScrollView horizontal style={styles.scrollView}>
      <AppBarTab title='Repositories' path='/'/>
      {
        data && data.me
        ? <AppBarTabWithFunction title='Sign Out' path='/' afterPress={signOut}/>
        : <AppBarTab title='Sign In' path='/signin'/>

      }
    </ScrollView>
  </View>);
};

export default AppBar;