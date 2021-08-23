import { Property } from "@stitches/react/types/css";


type SizeUtilArg =
	string
	| number
	| [
		width: string | number,
		height: string | number
	]
	| {
		width?: string | number
		height?: string | number
		w?: string | number
		h? : string | number
	}

const sizeUtils = {
	size: (value: SizeUtilArg) => {
		if (typeof value === "string" || typeof value === "number")
			return {
				width: value,
				height: value
			}

		if (Array.isArray(value)){
			const [width, height] = value
			return { width, height }
		}

		const { width, height, w, h } = value
		return { width: width || w, height: height || h }
	},

	w: (value: string | number) => ({ width: value }),

	h: (value: string | number) => ({ height: value }),

	fullSize: (value: boolean) => value ? { width: "100%", height: "100%" } : {},

	fullWidth: (value: boolean) => value ? { width: "100%" } : {},
	
	fullHeight: (value: boolean) => value ? { height: "100%" } : {},

	screenSize: (value: boolean) => value ? { width: "100vw", height: "100vh" } : {},

	screenWidth: (value: boolean) => value ? { width: "100vw" } : {},

	screenHeight: (value: boolean) => value ? { height: "100vw" } : {}
}



const displayUtils = {
	block: (value: boolean) => value ? { display: "block" } : {},
	
	inlineBlock: (value: boolean) => value ? { display: "inline-block" } : {},
	
	inline: (value: boolean) => value ? { display: "inline" } : {},
	
	hidden	: (value: boolean) => value ? { display: "none" } : {}
}


export interface FlexOptions {
	direction?: Property.FlexDirection
	wrap?: Property.FlexWrap
	flow?: string
	justifyContent?: string
	alignContent?: string
	alignItems?: string
}

export const flexUtils = {
	dFlex: (value: boolean | FlexOptions) => {
		if (typeof value === "boolean")
			return value ? { display: "flex" } : {}
		
		const { 
			direction, 
			wrap,
			flow, 
			justifyContent, 
			alignContent, 
			alignItems
		} = value

		const styles = {} as {
			flexDirection?: Property.FlexDirection
			flexWrap?: Property.FlexWrap
			flexFlow?: string
			justfiyContent?: string
			alignContent?: string
			alignItems?: string
		}

		if (direction) styles.flexDirection = direction
		if (wrap) styles.flexWrap = wrap
		if (flow) styles.flexFlow = flow
		if (justifyContent) styles.justfiyContent = justifyContent
		if (alignContent) styles.alignContent = alignContent
		if (alignItems) styles.alignItems = alignItems

		return styles
	},
	
	inlineFlex	: (value: boolean) => value ? { display: "inline-flex" } as const : {},

	row: (value: boolean) => (
		value
			? { display: "flex", flexDirection: "row" } as const
			: {}
	),

	column: (value: boolean) => (
		value
			? { display: "flex", flexDirection: "column" } as const
			: {}
	),

	rowReverse: (value: boolean) => (
		value
			? { display: "flex", flexDirection: "row-reverse" } as const
			: {}
	),

	columnReverse: (value: boolean) => (
		value
			? { display: "flex", flexDirection: "column-reverse" } as const
			: {}
	)
}



export type Spacing =
	string 
	| number
	| {
		top?: string | number
		right?: string | number
		bottom?: string | number
		left?: string | number
		t?: string | number
		r?: string | number
		b?: string | number
		l?: string | number
		x?: string | number
		y?: string | number
	}

const paddingUtil = (value: Spacing) => {
	if (typeof value === "string" || typeof value === "number")
		return { padding: value }

	const { top, right, bottom, left, t, r, b, l, x, y } = value
	const styles = {} as {
		paddingTop?: string | number
		paddingRight?: string | number
		paddingBottom?: string | number
		paddingLeft?: string | number
	}

	if (x) styles.paddingLeft = styles.paddingRight = x
	if (y) styles.paddingTop = styles.paddingBottom = y

	if (top || t) styles.paddingTop = top || t
	if (right || r) styles.paddingRight = right || r
	if (bottom || b) styles.paddingBottom = bottom || b
	if (left || l) styles.paddingLeft = left || l

	return styles
}

const paddingXUtil = (value: string | number) => ({
	paddingLeft: value,
	paddingRight: value
})

const paddingYUtil = (value: string | number) => ({
	paddingTop: value,
	paddingBottom: value
})

const paddingUtils = {
	padding: paddingUtil,
	
	p: paddingUtil,

	noPadding: (value: boolean) => ({ padding: 0 }),

	pt: (value: string | number) => ({ paddingTop: value }),

	pr: (value: string | number) => ({ paddingRight: value }),

	pb: (value: string | number) => ({ paddingBottom: value }),

	pl: (value: string | number) => ({ paddingLeft: value }),

	paddingX: paddingXUtil,

	px: paddingXUtil,

	paddingY: paddingYUtil,

	py: paddingYUtil
}


const marginUtil = (value: Spacing) => {
	if (typeof value === "string" || typeof value === "number")
		return { margin: value }

	const { top, right, bottom, left, t, r, b, l, x, y } = value
	const styles = {} as {
		marginTop?: string | number
		marginRight?: string | number
		marginBottom?: string | number
		marginLeft?: string | number
	}

	if (x) styles.marginLeft = styles.marginRight = x
	if (y) styles.marginTop = styles.marginBottom = y

	if (top || t) styles.marginTop = top || t
	if (right || r) styles.marginRight = right || r
	if (bottom || b) styles.marginBottom = bottom || b
	if (left || l) styles.marginLeft = left || l

	return styles
}

const marginXUtil = (value: string | number) => ({
	marginLeft: value,
	marginRight: value
})

const marginYUtil = (value: string | number) => ({
	marginTop: value,
	marginBottom: value
})

const marginUtils = {
	margin: marginUtil,

	m: marginUtil,

	noMargin: (_value: boolean) => ({ margin: 0 }),

	mt: (value: string | number) => ({ marginTop: value }),

	mr: (value: string | number) => ({ marginRight: value }),

	mb: (value: string | number) => ({ marginBottom: value }),

	ml: (value: string | number) => ({ marginLeft: value }),

	marginX: marginXUtil,

	mx: marginXUtil,

	marginY: marginYUtil,

	my: marginYUtil
}



export const spacingUtils = { ...paddingUtils, ...marginUtils }



export const utilLibrary = {
	...spacingUtils,
	
	...sizeUtils,

	...flexUtils,

	...displayUtils,

	bg: (value: string) => ({ background: value }),

	textLeft: (value: boolean) => value? { textAlign: "left" } as const : {},

	textCenter: (value: boolean) => value? { textAlign: "center" } as const : {},
	
	textRight: (value: boolean) => value? { textAlign: "right" } as const : {},

	bold: (value: boolean) => value ? { fontWeight: "bold" } as const : {},

	noBorder: (value: boolean) => value? { border: "none" } as const : {},

	translateX: (value: string) => ({ transform: `translateY(${value})` }),

	translateY: (value: string) => ({ transform: `translateY(${value})` })
}
