import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  G,
  Circle,
} from "react-native-svg";

function LimitOutLineIcon(props: SvgProps & { color?: string }) {
  const color = props?.color || '#ddd'
  return (
    <Svg
      width={16.001}
      height={16}
      viewBox="0 0 16.001 16"
      {...props}
    >
      <G transform="translate(-4.286 -10.004)">
        <Path
          transform="translate(4.286 10.004)"
          d="M0 0H16V16H0z"
          fill="transparent"
        />
        <Path
          d="M4.602 3.869a.2.2 0 00-.048-.141L3.008 1.97a.2.2 0 00-.275-.018A8.041 8.041 0 00.981 4.14a.2.2 0 00.078.265l2.054 1.123a.195.195 0 00.265-.078 5.316 5.316 0 011.159-1.447.194.194 0 00.065-.134zM5.267 3.228a.195.195 0 00.264.081 5.254 5.254 0 011.761-.566.2.2 0 00.167-.22L7.144.203a.2.2 0 00-.22-.167 7.975 7.975 0 00-2.673.86.2.2 0 00-.081.264zM2.779 6.339l-2.26-.613a.2.2 0 00-.239.137A8.059 8.059 0 000 7.97c0 .122 0 .245.009.375a.2.2 0 00.195.186h.009l2.339-.108a.2.2 0 00.186-.2c0-.088-.006-.169-.006-.249a5.326 5.326 0 01.185-1.394.2.2 0 00-.138-.241zM11.475.757a7.979 7.979 0 00-2.7-.756.2.2 0 00-.213.175l-.226 2.33a.2.2 0 00.175.213 5.256 5.256 0 011.781.5.2.2 0 00.26-.091l1.012-2.11a.2.2 0 00-.089-.261zM14.888 4.02a.2.2 0 00-.022-.148 8.045 8.045 0 00-1.835-2.119.195.195 0 00-.274.028L11.28 3.597a.2.2 0 00.028.274 5.318 5.318 0 011.214 1.4.2.2 0 00.268.067l2.01-1.2a.2.2 0 00.088-.118zM15.633 5.566a.2.2 0 00-.245-.128l-2.234.7a.2.2 0 00-.128.244 5.31 5.31 0 01.242 1.589c0 .08 0 .161-.006.249a.2.2 0 00.186.2l2.339.108h.009a.2.2 0 00.195-.186c.006-.13.009-.253.009-.375a8.038 8.038 0 00-.367-2.401zM9.028 9.477l-.099-.017-2.8-2.391a.2.2 0 00-.32.22l1.14 3.492a1.863 1.863 0 00-.043.184 1.83 1.83 0 102.121-1.484z"
          transform="translate(4.287 -79.618) translate(0 90.922)"
          fill="#25345f"
        />
      </G>
    </Svg>
  );
}

export default LimitOutLineIcon;
