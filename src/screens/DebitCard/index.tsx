import React, { ReactNode, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import { COLOR } from "../../theme";
import useStore from "../../stores";
import { CompositeNavigationProp, useRoute } from "@react-navigation/native";
import Screen from "../../components/Screen";
import DebitCardHeader from "./DebitCardHeader";
import { DebitCardStackType, HomeTabParams } from "../../navigator/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import MenuItem from "./MenuItem";
import TopupIcon from "../../components/Icons/TopupIcon";
import LimitIcon from "../../components/Icons/LimitIcon";
import SnowIcon from "../../components/Icons/SnowIcon";
import NewcardIcon from "../../components/Icons/NewcardIcon";
import LockIcon from "../../components/Icons/LockIcon";
import { toMoneyString } from "../../services/textServices";
import LimitProcess from "./LimitProcess";
import Card from "./Card";

interface Props {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<HomeTabParams, "Debit Card">,
    StackNavigationProp<DebitCardStackType, "DebitCard">
  >;
}

const DebitCardScreen = ({ navigation }: Props) => {
  const { debitCard, gettingDebitCard, getDebitCard, setSpendLimit } = useStore()
  useEffect(() => { getDebitCard() }, [])

  const onBack = undefined

  //Spending limit button
  ListMenu[1].subTitle = `Your weeky spending limit is ${toMoneyString(debitCard.limit, true)}`
  ListMenu[1].toggle = debitCard.isLimit
  ListMenu[1].onClick = () => navigation.navigate('SpendLimit')
  ListMenu[1].onToggleChange = (value: boolean) => {
    if (value) {
      navigation.navigate('SpendLimit')
    } else {
      setSpendLimit(value, 0)
    }
  }

  return (
    <Screen header={<DebitCardHeader onBack={onBack} title="Debit Card" balance={debitCard?.balance || 0} />}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card cardInfo={debitCard} />
        <View style={styles.buttonContainer}>
          <LimitProcess current={debitCard?.currentSpend || 0} limit={debitCard?.limit || 0} />
          {ListMenu.map(menu => <MenuItem key={menu.title} {...menu} />)}
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: COLOR.white,
  },
})

const ListMenu = [
  {
    title: 'Top-up account',
    subTitle: 'Deposit money to your account to use with cards',
    icon: <TopupIcon />,
    toggle: undefined,
    onClick: undefined
  },
  {
    title: 'Weeky spending limmit',
    subTitle: 'Your weeky spending limit is ',
    icon: <LimitIcon />,
    toggle: false,
    onClick: undefined
  },
  {
    title: 'Freeze card',
    subTitle: 'Your card is active',
    // Missing svg icon
    icon: <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: COLOR.primary.light, justifyContent: 'center', alignItems: 'center' }}><SnowIcon /></View>,
    toggle: false,
    onClick: undefined
  },
  {
    title: 'Get a new card',
    subTitle: 'This deactivates your curreent debit card',
    icon: <NewcardIcon />,
    toggle: undefined,
    onClick: undefined
  },
  {
    title: 'Deactivated cards',
    subTitle: 'Your previously deactivated cards',
    icon: <LockIcon />,
    toggle: undefined,
    onClick: undefined
  },
] as Array<{
  title: string
  subTitle: string
  icon: ReactNode
  toggle: boolean | undefined
  onClick: (() => any) | undefined
  onToggleChange: (value: boolean) => any | undefined
}>


export default DebitCardScreen;

