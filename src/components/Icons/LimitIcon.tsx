import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  G,
  Circle,
} from "react-native-svg";

function LimitIcon(props: SvgProps & { color?: string }) {
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
          d="M5.173 4.349a.219.219 0 00-.054-.159L3.382 2.213a.219.219 0 00-.31-.02 9.039 9.039 0 00-1.97 2.46.219.219 0 00.087.3l2.309 1.262a.219.219 0 00.3-.087 5.976 5.976 0 011.3-1.626.219.219 0 00.075-.153zM5.926 3.629a.219.219 0 00.3.091 5.905 5.905 0 011.979-.637.219.219 0 00.188-.247L8.039.228A.22.22 0 007.792.04a8.964 8.964 0 00-3 .967.219.219 0 00-.091.3zM3.123 7.124l-2.54-.689a.219.219 0 00-.269.154A9.059 9.059 0 000 8.96c0 .138 0 .275.01.422a.219.219 0 00.219.209h.01l2.629-.121a.219.219 0 00.209-.229c0-.1-.007-.19-.007-.28a5.986 5.986 0 01.208-1.567.219.219 0 00-.155-.27zM12.907.851a8.969 8.969 0 00-3.039-.85.219.219 0 00-.239.2L9.375 2.82a.219.219 0 00.2.239 5.908 5.908 0 012 .56.219.219 0 00.293-.1l1.143-2.371a.219.219 0 00-.104-.297zM16.75 4.519a.219.219 0 00-.024-.166 9.042 9.042 0 00-2.062-2.382.219.219 0 00-.308.032l-1.661 2.042a.219.219 0 00.032.309 5.978 5.978 0 011.364 1.576.219.219 0 00.3.076l2.259-1.35a.22.22 0 00.1-.137zM17.588 6.257a.219.219 0 00-.275-.144l-2.511.787a.219.219 0 00-.144.275 5.968 5.968 0 01.272 1.786c0 .09 0 .181-.007.28a.219.219 0 00.209.229l2.629.121h.01a.219.219 0 00.219-.209c.007-.146.01-.284.01-.422a9.035 9.035 0 00-.412-2.703z"
          transform="translate(-206 222.078) translate(0 90.922)"
          fill="#9ac0fa"
          stroke="#325baf"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".25px"
        />
        <Path
          d="M10.079 10.784l-.111-.02-3.144-2.688a.226.226 0 00-.361.241l1.28 3.926a2.094 2.094 0 00-.048.207 2.058 2.058 0 102.384-1.669z"
          transform="translate(-206 222.078) translate(0 90.922)"
          fill="#f1f3f4"
        />
      </G>
    </Svg>
  );
}

export default LimitIcon;