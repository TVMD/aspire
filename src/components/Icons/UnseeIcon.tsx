import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  G,
} from "react-native-svg";

function UnseeLogo(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <G transform="translate(-16.588 -90.588)">
        <Path
          d="M0 0h16v16H0z"
          transform="translate(16.588 90.588)"
          fill="none"
        />
        <Path
          d="M8 12.999a7.822 7.822 0 01-4.484-1.4 7.9 7.9 0 01-2.849-3.6 7.879 7.879 0 0114.666 0 7.9 7.9 0 01-2.848 3.6A7.824 7.824 0 018 12.999zm0-8.334a3.333 3.333 0 103.334 3.334A3.337 3.337 0 008 4.667z"
          transform="translate(16.588 90.588)"
          stroke="transparent"
          strokeMiterlimit={10}
          fill="#01d167"
        />
        <Path
          d="M8 6a2 2 0 102 2 2 2 0 00-2-2z"
          transform="translate(16.588 90.588)"
          fill="#01d167"
        />
        <Path
          transform="translate(18.857 92.857)"
          d="M10.907 0L0 10.907"
          stroke="#01d167"
          strokeLinecap="round"
          strokeWidth="2px"
          fill="none"
        />
      </G>
    </Svg>
  );
}

export default UnseeLogo;
