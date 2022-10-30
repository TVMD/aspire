import React, { ReactNode, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { COLOR, generalTextStyle } from "../../theme";
import { toMoneyString } from "../../services/textServices";


const defaultPreset = [5000, 10000, 20000] as Array<number>

const PreSetButton = ({ preset = defaultPreset, onChange }: { preset?: Array<number>, onChange: (num: number) => any }) => {
  return (
    <View style={styles.preSelectContainer}>{
      preset.map(num => (
        <TouchableOpacity key={num} onPress={() => onChange(num)} style={styles.container}>
          <Text style={styles.text}>{'S$ ' + toMoneyString(num)}</Text>
        </TouchableOpacity>
      ))
    }</View>
  )
};

const styles = StyleSheet.create({
  preSelectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    borderRadius: 4,
    padding: 12,
    width: '30%',
    height: 40,
    backgroundColor: COLOR.getOpacitySecondary(0.07),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...generalTextStyle({ fontSize: 12, fontWeight: 'bold', color: COLOR.secondary }),
  }
})

export default PreSetButton;

