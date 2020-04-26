import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent({ fill, stroke }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 24 24">
        <G
        transform='translate(1 1)'
        stroke={stroke}
        strokeWidth={2}
        fill={fill}
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
        >
            <Path d="M3 12h18M3 6h18M3 18h18" />
        </G>
    </Svg>
  )
}

export default SvgComponent