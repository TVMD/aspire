import * as React from "react";
import Svg, {
  SvgProps,
  Path,
} from "react-native-svg";

function BackIcon(props: SvgProps & { color?: string }) {
  const color = props?.color || '#ddd'
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill={color} d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </Svg>
  );
}

export default BackIcon;
