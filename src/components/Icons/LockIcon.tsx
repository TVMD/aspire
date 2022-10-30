import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  G,
  Circle,
} from "react-native-svg";

function LockIcon(props: SvgProps & { color?: string }) {
  const color = props?.color || '#ddd'
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <G transform="translate(213 -305)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(-213 305)"
          fill="#325baf"
        />
        <Path
          d="M-197 313a8 8 0 108 8 8.009 8.009 0 00-8-8zm-6 8a5.961 5.961 0 011.115-3.471l8.356 8.356A5.99 5.99 0 01-203 321zm10.885 3.471l-8.356-8.356a5.991 5.991 0 018.356 8.356z"
          fill="#9ac0fa"
        />
        <Path
          transform="rotate(45 -481.81 -83.958)"
          d="M0 0H11.8V2H0z"
          fill="#f1f3f4"
        />
      </G>
    </Svg>
  );
}

export default LockIcon;
