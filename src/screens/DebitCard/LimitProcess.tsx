import React, { ReactNode, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { COLOR, generalTextStyle } from "../../theme";
import { textStyles } from "../../components/Button/styles";
import { toMoneyString } from "../../services/textServices";

const LimitProcess = ({ current, limit }: { current: number, limit: number }) => {

  const getProcessStyle = useMemo(() => {
    const p = current * 100 / limit
    return {
      ...styles.process,
      width: p + "%"
    }
  }, [current, limit])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}> Debit card spending limit </Text>
        <Text>
          <Text style={styles.current}>{`${toMoneyString(current, true)}`}</Text>
          <Text style={styles.limit}>{` | ${toMoneyString(limit, true)}`}</Text>
        </Text>
      </View >
      <View style={styles.processContainer}>
        <View style={getProcessStyle} />
        <View style={styles.processEdgle} />
      </View >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...generalTextStyle({ fontSize: 13, fontWeight: '400', color: COLOR.black })
  },
  current: {
    ...generalTextStyle({ fontSize: 13, fontWeight: 'bold', color: COLOR.secondary })
  },
  limit: {
    ...generalTextStyle({ fontSize: 13, fontWeight: 'bold', color: COLOR.gray1 })
  },
  processContainer: {
    overflow: 'hidden',
    width: '100%',
    height: 15,
    backgroundColor: COLOR.opacitySecondary,
    borderRadius: 6,
    marginTop: 6,
    flexDirection: 'row'
  },
  process: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    height: 15,
    backgroundColor: COLOR.secondary,
    width: 100
  },
  processEdgle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderLeftWidth: 15,
    borderTopColor: COLOR.secondary,
    borderLeftColor: COLOR.secondary,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },

})

export default LimitProcess

