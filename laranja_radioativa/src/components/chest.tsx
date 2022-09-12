import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox={'0 0 512 512'}
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M436.38 138c-21.53-46-67.93-74.16-118-76a21.68 21.68 0 0 0-2.17-.12H213.29c-46.31 0-89.6 10-120.79 47.4C66.08 140.99 61.16 177.57 61.16 217v215.42a17.9 17.9 0 0 0 17.64 17.64h352.83a17.9 17.9 0 0 0 17.64-17.64V290.93c0-48.41 8.21-107.78-12.89-152.93Zm-332.8 20c18.17-44.52 60-60.76 104.72-60.76h107.9c41 .85 78.47 25.82 92.24 65.11 6.28 17.94 5.55 36.12 5.55 54.72v21.3H96.42c-.19-26.37-2.93-55.66 7.16-80.37Zm114.81 115.65H292v33h-73.61ZM123.2 414.77H96.44V273.64h86.67v50.67A17.9 17.9 0 0 0 200.75 342h108.93a17.67 17.67 0 0 0 17.64-17.64v-50.72H414v141.13Z" />
  </Svg>
)

export default SvgComponent
