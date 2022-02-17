import {View, StyleSheet} from 'react-native';

import Count from './Count';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const ItemFooter = ({stars, forks, reviews, rating}) => {
  return(
    <View style={styles.container}>
      <Count count={stars} label={'Stars'}/>
      <Count count={forks} label={'Forks'}/>
      <Count count={reviews} label={'Reviews'}/>
      <Count count={rating} label={'Rating'}/>
    </View>
  )
}

export default ItemFooter;