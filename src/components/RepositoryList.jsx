import { useQuery } from '@apollo/client';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator}/>

const renderItem = ({item}) => (
  <RepositoryItem repository={item}/>
);

const RepositoryList = () => {
const {data, error, loading} = useQuery(GET_REPOSITORIES,{
  fetchPolicy: 'cache-and-network',
})

const repositoryNodes = !loading 
  ? data.repositories.edges.map(edge => edge.node)
  : [];

if(error){
  console.log('Error: ', error)
  return(
    <Text>Problem Loading Repositories. Try again. . .</Text>
  )
}
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;