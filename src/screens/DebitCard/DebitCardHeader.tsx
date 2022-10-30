import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { COLOR, generalTextStyle } from "../../theme";
import { toMoneyString } from "../../services/textServices";
import LogoIcon from "../../components/Icons/LogoIcon";
import BackIcon from "../../components/Icons/BackIcon";

const DebitCardHeder = ({ onBack, title, balance }: { onBack?: () => any, title: string, balance?: number }) => {

  return (
    <View style={styles.container}>
      <View style={styles.headRow}>
        {onBack ? <TouchableOpacity onPress={onBack}>
          <BackIcon />
        </TouchableOpacity> : <View />}
        <LogoIcon />
      </View >
      <Text style={[styles.title, onBack && { marginTop: 15 }]}>{title}</Text >
      {typeof balance === 'number' && <View style={styles.balanceContainer}>
        <Text style={generalTextStyle({ fontWeight: '400', fontSize: 14 })}>Available balance</Text >
        <View style={styles.balanceNumber}>
          <View style={styles.box}>
            <Text style={generalTextStyle({ fontWeight: 'bold', fontSize: 12 })}>S$</Text >
          </View >
          <Text style={generalTextStyle({ fontWeight: 'bold', fontSize: 24 })}>{toMoneyString(balance)}</Text >
        </View >
      </View >}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  headRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  title: {
    ...generalTextStyle({ fontSize: 24, fontWeight: 'bold' })
  },
  balanceContainer: {
    height: 86,
    justifyContent: 'flex-end'
  },
  balanceNumber: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    padding: 3,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'green',
    marginRight: 10,
  },
})

export default DebitCardHeder

