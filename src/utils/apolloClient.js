import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';

const {apolloUri} = Constants.manifest.extra

const httpLink = createHttpLink({
  uri: apolloUri, 
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async(_, {headers}) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}`: ''
        },
      }
    } catch (error) {
      console.log(error);
      return { headers, }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;