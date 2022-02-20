import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";

import Main from "./src/components/Main";
import theme from "./src/theme";

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
        <Main style={styles.text}/>
      </NativeRouter>
      <StatusBar style="auto"/>
    </>
  )
};
export default App;