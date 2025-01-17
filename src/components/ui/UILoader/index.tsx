/**
 * Implements a UI loader icon
 * This should be required as an icon
 * Uses primary color from theme
 */
import React from 'react'
import { connect } from 'react-redux'

const UILoader = ({ colors, width, height, fill }: any) => {
	const { primary } = colors
	const color = fill || primary
	return (
		<svg
			style={{
				margin: 'auto',
				background: 'rgba(0, 0, 0, 0)',
				display: 'block',
				shapeRendering: 'auto',
			}}
			width={width || '200px'}
			height={height || '200px'}
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<g transform="rotate(0 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.9166666666666666s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(30 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.8333333333333334s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(60 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.75s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(90 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.6666666666666666s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(120 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.5833333333333334s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(150 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.5s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(180 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.4166666666666667s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(210 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.3333333333333333s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(240 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.25s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(270 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.16666666666666666s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(300 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="-0.08333333333333333s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
			<g transform="rotate(330 50 50)">
				<rect
					x="47"
					y="24"
					rx="3"
					ry="4.08"
					width="6"
					height="12"
					fill={color}
				>
					<animate
						attributeName="opacity"
						values="1;0"
						keyTimes="0;1"
						dur="1s"
						begin="0s"
						repeatCount="indefinite"
					></animate>
				</rect>
			</g>
		</svg>
	)
}

export default connect((state: any) => ({ colors: state.theme }))(UILoader)
