import { Text, View, Alert, Pressable, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.appBarText
  },
})

const AppBarTab = ({title}) => {
  return(
    <Pressable
      onPress={() => Alert.alert('Tab Pressed')}
    >
      <View style={styles.container}>
       <Text style={styles.title}>{title}</Text>
     </View>
    </Pressable>
  );
};

export default AppBarTab;
