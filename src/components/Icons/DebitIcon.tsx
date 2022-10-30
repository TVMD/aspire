import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  G
} from "react-native-svg";

function DebitIcon(props: SvgProps & { color?: string }) {
  const color = props?.color || '#ddd'
  return (
    <Svg
      width={24}
      height={18.075}
      viewBox="0 0 24 18.075"
      {...props}
    >
      <Defs></Defs>
      <Path
        fill={color}
        d="M23.5 0H.5a.474.474 0 00-.5.5v7.053a2.485 2.485 0 002.5 2.519h19A2.485 2.485 0 0024 7.553V.5a.474.474 0 00-.5-.5zm-20 4.03h4a.504.504 0 010 1.008h-4a.504.504 0 010-1.008zm7 3.023h-7a.504.504 0 010-1.008h7a.504.504 0 010 1.008zm8.5 0a1.68 1.68 0 01-1-.3 1.68 1.68 0 01-1 .3 2.015 2.015 0 010-4.03 1.68 1.68 0 011 .3 1.68 1.68 0 011-.3 2.015 2.015 0 010 4.03z"
        transform="translate(0 -90.333) translate(0 98.333)"
      />
      <Path
        fill={color}
        d="M21.5 0h-19C1.1 0 0 1.378 0 3.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626V3.132C24 1.378 22.9 0 21.5 0z"
        transform="translate(0 -90.333) translate(0 90.333)"
      />
    </Svg>
  );
}

export default DebitIcon;
