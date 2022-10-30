import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const FONT = {
  family: "Avenir Next",
};

export const COLOR = {
  primary: {
    main: "#25345F",
    light: "#325BAF",
    dark: "#0C365A",
    contrastText: "#FFFFFF"
  },
  secondary: "#01D167",
  black: "#000",
  white: "#fff",
  opacityBack: "rgba(34, 34, 34, .4)",
  opacitySecondary: "rgba(1, 209, 103, .4)",
  getOpacitySecondary: (opacity: number) => `rgba(1, 209, 103, ${opacity})`,
  gray1: "#22222233",
  gray2: "#22222266",
  red: "#E5573A",
};

export type ColorTheme = typeof COLOR;

// https://reactnavigation.org/docs/themes/
export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.primary.main,
    secondary: COLOR.secondary,
    background: COLOR.primary.dark,
    card: COLOR.white,
    text: COLOR.primary.contrastText,
    border: COLOR.gray2,
    notification: COLOR.primary.main,
  },
};

interface TextStyleProps {
  fontWeight?:
  | "900"
  | "700"
  | "500"
  | "400"
  | "300"
  | "100"
  | "normal"
  | "bold"
  | "200"
  | "600"
  | "800";
  fontSize?: number;
  color?: string;
}

export const generalTextStyle = ({
  fontWeight = "400",
  fontSize = 14,
  color = COLOR.primary.contrastText,
}: TextStyleProps) => {
  return StyleSheet.create({
    general: {
      fontFamily: FONT.family,
      fontWeight: fontWeight,
      color: color,
      fontSize,
    },
  }).general;
};

