import {View, Text, StyleSheet} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  badge:{
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  badgeText: {
    color: theme.colors.lightText
  }
})

const ItemBadge = ({language}) => {
  return(
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{language}</Text>
    </View>
  )
};

export default ItemBadge;