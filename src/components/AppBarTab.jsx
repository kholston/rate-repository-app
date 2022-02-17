import { View,Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.lightText
  },
})

const AppBarTab = ({title, path}) => {
  return(
      <View style={styles.container}>
        <Link to={path}>
          <Text style={styles.title}>{title}</Text>
        </Link>
     </View>
  );
};

export default AppBarTab;
