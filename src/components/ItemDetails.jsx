import {Text, View, StyleSheet} from 'react-native';

import theme from '../theme';
import ItemBadge from './ItemBadge';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    padding: 10
  },
  heading: {
    flexGrow: 1,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary
  },
  description: {
    flexGrow: 1,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary
  },
})



const ItemDetails = ({name, description, language}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <ItemBadge language={language}/>
    </View>
  )
}

export default ItemDetails;