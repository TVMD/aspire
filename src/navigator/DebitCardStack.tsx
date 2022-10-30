import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DebitCardStackType } from "./types";

// Screen
import DebitCard from "../screens/DebitCard";
import SpendingLimit from "../screens/SpendingLimit";

const Stack = createStackNavigator<DebitCardStackType>();

const DebitCardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="DebitCard" >
      <Stack.Screen name="DebitCard" component={DebitCard} />
      <Stack.Screen name="SpendLimit" component={SpendingLimit} />
    </Stack.Navigator>
  );
}

export default DebitCardStack;
