import React, { ReactNode, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity
} from "react-native";

import { COLOR, generalTextStyle } from "../../theme";
import useStore from "../../stores";
import { CompositeNavigationProp, useRoute } from "@react-navigation/native";
import Screen from "../../components/Screen";
import DebitCardHeader from "../DebitCard/DebitCardHeader";
import { DebitCardStackType, HomeTabParams } from "../../navigator/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { toMoneyString } from "../../services/textServices";
import PreSetButton from "./PresetButton";
import MoneyInput from "./MoneyInput";
import LimitOutLineIcon from "../../components/Icons/LimitOutlineIcon";

interface Props {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<HomeTabParams, "Debit Card">,
    StackNavigationProp<DebitCardStackType, "SpendLimit">
  >;
}

const SpendLimitScreen = ({ navigation }: Props) => {

  const { debitCard, gettingDebitCard, getDebitCard, setSpendLimit } = useStore()
  useEffect(() => { getDebitCard() }, [])
  const [limit, setLimit] = useState(0)

  const onBack = () => navigation.goBack()
  const onSubmit = async () => {
    await setSpendLimit(true, limit)
    navigation.goBack()
  }

  return (
    <Screen fixed header={<DebitCardHeader onBack={onBack} title="Spending Limit" />}>
      <View
        style={styles.container}
      >
        <View>
          <View style={styles.titleContainer}>
            <LimitOutLineIcon />
            <Text style={styles.title}>Set a weeky debit card spending limit</Text>
          </View>

          <MoneyInput value={toMoneyString(limit)} onChangeText={(text: string) => {
            const number = (text as any).replaceAll(',', '') - 0
            if (typeof number == 'number' && number >= 0) {
              setLimit(number)
            } else {
              setLimit(0)
            }
          }} />

          <View style={styles.breaker} />

          <Text style={styles.note}>Here weeky mean last 7 days - not the calendar week</Text>

          <PreSetButton onChange={(newlimit) => setLimit(newlimit)} />
        </View>

        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    flex: 1,
    paddingBottom: '40%',
    backgroundColor: COLOR.white,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    ...generalTextStyle({ fontSize: 14, fontWeight: '400', color: COLOR.black }),
    marginLeft: 6
  },
  breaker: {
    width: '100%',
    height: 1,
    backgroundColor: COLOR.gray1
  },
  note: {
    ...generalTextStyle({ fontSize: 13, fontWeight: 'normal', color: COLOR.gray1 }),
    marginBottom: 32,
    marginTop: 12,
  },
  button: {
    height: 56,
    width: '80%',
    backgroundColor: COLOR.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
  },
  buttonText: {
    ...generalTextStyle({ fontSize: 16, fontWeight: 'bold', color: COLOR.white })
  }
})

export default SpendLimitScreen;

