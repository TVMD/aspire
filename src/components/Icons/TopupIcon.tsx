import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  G,
  Circle,
} from "react-native-svg";

function TopupIcon(props: SvgProps & { color?: string }) {
  const color = props?.color || '#ddd'
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <G transform="translate(-.094)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(.094)"
          fill="#325baf"
        />
        <Path
          d="M3.954 5.246l1.431-1.4v6.394a1.15 1.15 0 002.3 0V3.844l1.43 1.4a1.166 1.166 0 001.625 0 1.11 1.11 0 000-1.592L7.346.33a1.166 1.166 0 00-1.625 0L2.329 3.653a1.11 1.11 0 000 1.592 1.167 1.167 0 001.625.001z"
          transform="translate(9.596 7.899)"
          stroke="#325baf"
          strokeWidth=".1px"
          fill="#9ac0fa"
        />
        <Path
          d="M13.067 13.522a2.757 2.757 0 01-2.773 2.734H2.773A2.757 2.757 0 010 13.522a1.142 1.142 0 012.284 0 .487.487 0 00.489.482h7.521a.487.487 0 00.489-.482 1.142 1.142 0 012.284 0z"
          transform="translate(9.596 7.899)"
          fill="#f1f3f4"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#325baf"
          strokeWidth=".1px"
        />
      </G>
    </Svg>
  );
}

export default TopupIcon;
