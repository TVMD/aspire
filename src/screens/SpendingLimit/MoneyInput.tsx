import React, { ReactNode, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextInput
} from "react-native";

import { COLOR, generalTextStyle } from "../../theme";

const MoneyInput = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>S$</Text>
      </View>
      <TextInput keyboardType="numbers-and-punctuation" {...props} style={styles.inputStyle} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 13,
  },
  box: {
    borderRadius: 3,
    height: 24,
    width: 40,
    backgroundColor: COLOR.getOpacitySecondary(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6
  },
  boxText: {
    ...generalTextStyle({ fontSize: 13, fontWeight: 'bold', color: COLOR.white }),
  },
  inputStyle: {
    ...generalTextStyle({ fontSize: 24, fontWeight: 'bold', color: COLOR.black }),
  },
})

export default MoneyInput;

