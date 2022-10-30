import React, { PropsWithChildren, ReactNode } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { COLOR } from "../../theme";

interface Props {
  children?: ReactNode
  header?: ReactNode
}

const Screen: React.FC<
  PropsWithChildren<{
    header: ReactNode
    fixed?: boolean
  }>
> = ({ children, header, fixed }) => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header} onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
      }} >
        {header}
      </View>
      <View style={[styles.body, !fixed && styles.absolute]}>
        {children}
      </View>
    </View >
  )

};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0C365A",
  },
  absolute: {
    position: 'absolute',
    top: 0, left: 0,
  },
  body: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
});

export default Screen;
