import React, { useState } from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useStore from "./stores";
import AppStackNavigator from "./navigator";
import { NavigationTheme, COLOR } from "./theme";

const App = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: COLOR.primary.main }}>
      <NavigationContainer
        theme={NavigationTheme}
      >
        <AppStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
