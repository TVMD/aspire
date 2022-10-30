import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLOR } from "../theme";
import { HomeTabParams } from "./types";
import Temp from "../screens/Temp";
import DebitCardStack from './DebitCardStack'
import { CardIcon } from "../components/Icons";
import HomeIcon from "../components/Icons/HomeIcon";
import DebitIcon from "../components/Icons/DebitIcon";
import PaymentIcon from "../components/Icons/PaymentIcon";
import CreditIcon from "../components/Icons/CreditIcon";
import ProfileIcon from "../components/Icons/ProfileIcon";

const Tab = createBottomTabNavigator<HomeTabParams>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          switch (route.name) {
            case "Home":
              return <HomeIcon color={focused ? COLOR.secondary : "#ddd"} />
            case "Debit Card":
              return <DebitIcon color={focused ? COLOR.secondary : "#ddd"} />
            case "Payment":
              return <PaymentIcon color={focused ? COLOR.secondary : "#ddd"} />
            case "Credit":
              return <CreditIcon color={focused ? COLOR.secondary : "#ddd"} />
            case "Profile":
              return <ProfileIcon color={focused ? COLOR.secondary : "#ddd"} />
          }
          return <HomeIcon />
        },
        headerShown: false,
        tabBarActiveTintColor: COLOR.secondary,
        tabBarInactiveTintColor: '#ddd'
      })}
      initialRouteName="Debit Card"
    >
      <Tab.Screen name="Home" component={Temp} />
      <Tab.Screen name="Debit Card" component={DebitCardStack} />
      <Tab.Screen name="Payment" component={Temp} />
      <Tab.Screen name="Credit" component={Temp} />
      <Tab.Screen name="Profile" component={Temp} />
    </Tab.Navigator>
  );
}
