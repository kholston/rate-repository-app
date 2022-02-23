import { View,Text, StyleSheet, Pressable } from 'react-native';
import { Link, useNavigate } from 'react-router-native';

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

export const  AppBarTabWithFunction = ({title, afterPress, path}) => {
  const navigate = useNavigate()

  const tabPressed = async () => {
    await afterPress()
    navigate(path, {replace: true})
  }
  return(
    <View style={styles.container}>
     <Pressable
      onPress={tabPressed}
     >
      <Text style={styles.title}>{title}</Text>
     </Pressable>
   </View>
);
}

export default AppBarTab;
