import {useState, useEffect} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRespositories from '../hooks/useRespositories';

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
  const { repositories } = useRespositories()

  const repositoryNodes = repositories 
  ? repositories.edges.map(edge => edge.node)
  : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;