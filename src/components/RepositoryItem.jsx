import { View, StyleSheet } from "react-native";
import AvatarImage from "./AvatarImage";
import ItemDetails from "./ItemDetails";
import ItemFooter from "./ItemFooter";


const styles = StyleSheet.create({
  container:{
    display: 'flex',
    backgroundColor: 'white',
  },
  body: {
    display: 'flex',
    flexDirection: 'row'
  }
});

// const ItemFooter = () => {
//   return(
//     null
//   );
// };

const RepositoryItem = ({repository}) => {
  const {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage
  } = repository;
  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <AvatarImage imageUrl={ownerAvatarUrl} />
        <ItemDetails
          name={fullName}
          description={description}
          language={language}
        />
      </View>
      <ItemFooter
        stars={stargazersCount}
        forks={forksCount}
        reviews={reviewCount}
        rating={ratingAverage}
      />
    </View>
  )
};

export default RepositoryItem;