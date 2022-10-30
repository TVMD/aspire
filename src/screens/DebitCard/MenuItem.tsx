import React, { ReactNode } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch
} from "react-native";

import { COLOR, generalTextStyle } from "../../theme";
import useStore from "../../stores";
import Screen from "../../components/Screen";

const MenuItem = ({ toggle, onClick, title, subTitle, icon, onToggleChange }: { onToggleChange?: (value: boolean) => any, toggle?: boolean, onClick?: () => any, title: string, subTitle: string, icon: ReactNode }) => {

  const showToggle = typeof toggle == 'boolean'

  return (
    <TouchableOpacity key={title} onPress={() => {
      if (!!onClick) {
        onClick()
      }
    }} style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View >

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View >

      {showToggle && <View style={styles.toggleContainer}>
        <Switch style={styles.toggle} value={toggle} onValueChange={onToggleChange} />
      </View >}
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: "row",
  },
  iconContainer: {
    flex: 50,
  },
  titleContainer: {
    flex: 282

  },
  title: {
    ...generalTextStyle({ fontWeight: '500', color: COLOR.primary.main, fontSize: 14 })
  },
  subTitle: {
    ...generalTextStyle({ fontWeight: 'normal', color: COLOR.opacityBack, fontSize: 13 })
  },
  toggleContainer: {
    flex: 50,
  },
  toggle: {
    transform: [{ scaleX: .8 }, { scaleY: .8 }]
  }
})

export default MenuItem

