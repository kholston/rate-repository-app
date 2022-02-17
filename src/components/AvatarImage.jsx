import {Image, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  }
});

const AvatarImage = ({imageUrl}) => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={{
        uri: imageUrl
      }}
      />
    </View>
  )
}

export default AvatarImage;

