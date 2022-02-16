import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import FlexboxExample from '../component examples/FlexBoxExample';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow:1,
    flexShrink: 1,
  }
});

const Main = () => {
  return(
    <View style={styles.container}>
      <RepositoryList/>
      <FlexboxExample/>
    </View>
  );
};

export default Main;