import React from "react"
import { createStitches, css, DefaultThemeMap } from "@stitches/react"
import { ConfigType } from "@stitches/react/types/config"
import { StyleableComponentFactory } from "./styleable-component-factory.type"
import { StyleableComponent } from "./styleable-component.interface"
import { CSS } from "@stitches/react/types/css-util"


const styleableComponentSymbol = Symbol("stitches-crochet.styleable-component")

export function configureCrochet<
	Prefix extends string = '',
	Media extends {} = {},
	Theme extends {} = {},
	ThemeMap extends {} = DefaultThemeMap,
	Utils extends {} = {}
>(
	stitchesConfig: {
		prefix?: ConfigType.Prefix<Prefix>
		media?: ConfigType.Media<Media>
		theme?: ConfigType.Theme<Theme>
		themeMap?: ConfigType.ThemeMap<ThemeMap>
		utils?: ConfigType.Utils<Utils>
	}
) {
	const configuredStithces = createStitches(stitchesConfig)
	
	const { styled } = configuredStithces

	type ConfiguredCSS = CSS<
		Media,
		Theme,
		ThemeMap,
		Utils
	>
	const createStyleableComponent: StyleableComponentFactory<ConfiguredCSS> = (
		tag,
		...baseStyleExpressions
	) => {
		let className = ""
		let baseStyles = {}

		for (const styleExpression of baseStyleExpressions as any) {
			if (styleExpression.$$typeof === styleableComponentSymbol)
				for (const baseStyleObject of styleExpression.baseStyleObjects)
					className += ` ${css(baseStyleObject)()}`
				
			else if (typeof styleExpression === "string")
				className += ` ${styleExpression}`

			else if (typeof styleExpression === "function")
				className += ` ${css(styleExpression)()}`

			else if (styleExpression.className){
				if (styleExpression.$$typeof === Symbol.for("react.forward_ref"))
					css(styleExpression)()
					
				className += ` ${styleExpression.className}`
			}

			else baseStyles = { ...baseStyles, ...styleExpression }
		}

		const styleableComponent: any = props => {
			let propStyles = { ...props }
			delete propStyles.children
			delete propStyles.props
			delete propStyles.variants

			const forwardProps = props.props || {}
			if (!forwardProps.className) forwardProps.className = ""
			forwardProps.className += ` ${className}`

			if (props.boolVariants)
				for (const boolVariant of props.boolVariants) {
					const [ condition, ...styleExpressions ] = boolVariant
					
					if (condition)
						for (const styleExpression of styleExpressions) {
							if (styleExpression.$$typeof === styleableComponentSymbol) {
								forwardProps.className += ` ${styleExpression.className}`

								for (const baseStyleObject of styleExpression.baseStyleObjects)
									forwardProps.className += ` ${css(baseStyleObject)()}`
							}
								
							else if (typeof styleExpression === "string")
								forwardProps.className += ` ${styleExpression}`

							else if (typeof styleExpression === "function")
								forwardProps.className += ` ${css(styleExpression)()}`

							else if (styleExpression.className){
								if (styleExpression.$$typeof === Symbol.for("react.forward_ref"))
									css(styleExpression)()
									
								forwardProps.className += ` ${styleExpression.className}`
							}

							else propStyles = { ...propStyles, ...styleExpression  }
						}
				}
	
			const styles = { ...baseStyles, ...propStyles }

			const StyledPrimitive = styled(tag, styles)
	
			return (
				<StyledPrimitive {...(forwardProps)}>
					{props.children}
				</StyledPrimitive>
			)
		}

		styleableComponent.$$typeof = styleableComponentSymbol
		styleableComponent.baseStyleObjects = baseStyleExpressions
		styleableComponent.className = className
		
		return styleableComponent
	}
      
    type StylePrimitives = { 
        [ Element in keyof JSX.IntrinsicElements ]: StyleableComponent<Element>
    }

    const StyledPrimitives = (new Proxy(
        {},
        { get: (_, prop) => createStyleableComponent(prop as any) }
    )) as StylePrimitives

	return { ...configuredStithces, createStyleableComponent, StyledPrimitives }
}
