import {View, Text, StyleSheet} from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    textAlign: 'center',
    flexGrow: 1,
    padding: 10
  },
  numberText:{
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary
  },
  labelText: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary
  }
})

const Count = ({count, label}) =>{
  const formatCount = (number) => {
    if(count >= 1000){
      const reduced = (count / 1000).toFixed(1).toString();
      return reduced + 'k'
    } else {
      return number.toString();
    }
  }
  return(
    <View style={styles.container}>
      <Text style={styles.numberText}>{formatCount(count)}</Text>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  )
};

export default Count;

