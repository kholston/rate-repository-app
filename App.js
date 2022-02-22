import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from '@apollo/client'; 

import Main from "./src/components/Main";
import  createApolloClient from './src/utils/apolloClient';
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import theme from "./src/theme";

const authStorage = new AuthStorage();

const apolloClient = createApolloClient(authStorage);

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.main
    })
  }
})

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main style={styles.text}/>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto"/>
    </>
  )
};
export default App;