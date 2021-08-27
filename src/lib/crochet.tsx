import React, { HTMLAttributes, FC, ReactNode, ButtonHTMLAttributes, ImgHTMLAttributes, TableHTMLAttributes, ThHTMLAttributes, TdHTMLAttributes, FormHTMLAttributes, OptionHTMLAttributes, ElementType, LiHTMLAttributes, OlHTMLAttributes } from "react"
import {
	AnchorHTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
	SelectHTMLAttributes,
} from "react"
import { createStitches, CSS, DefaultThemeMap } from "@stitches/react"
import { utilLibrary } from "./util-library"
import { Function as Func } from "@stitches/react/types/util"
import { ConfigType } from "@stitches/react/types/config"


export function configureCrochet<
	Prefix extends string = '',
	Media extends {} = {},
	Theme extends {} = {},
	ThemeMap extends {} = DefaultThemeMap,
	Utils extends {} = {}
>(
	crochetConfig: {
		prefix?: ConfigType.Prefix<Prefix>
		media?: ConfigType.Media<Media>
		theme?: ConfigType.Theme<Theme>
		themeMap?: ConfigType.ThemeMap<ThemeMap>
		utils?: ConfigType.Utils<Utils>
	}
) {
	const configWithUtils = {
		...crochetConfig, 
		utils: { ...utilLibrary, ...crochetConfig?.utils }
	}

	type StyleableElementFactory = <
		Element extends HTMLElement,
		HtmlProps extends HTMLAttributes<Element>,
	>(
		tag: React.ElementType,
		baseStyles?: CSS<typeof configWithUtils & { utils: typeof crochetConfig["utils"] & typeof utilLibrary}>
	) => 
		FC<
			CSS<typeof crochetConfig & { utils: typeof crochetConfig["utils"] & typeof utilLibrary}>
			& {
				children?: ReactNode
				variant?: { [variantKind: string]: string } | string
			}
			& (
				{
					props?: Omit<HtmlProps, "children">
					as?: undefined
				}
				| {
					props?: any
					as: string
						| React.ExoticComponent<any>
						| React.JSXElementConstructor<any>
						| Func	
				}
			)
		>
	
	const configuredStithces = createStitches(configWithUtils)
	
	const { styled } = configuredStithces
	
	const createStyleableElement = (<
		Element extends HTMLElement,
		HtmlProps extends HTMLAttributes<Element>,
	>(
		tag: React.ElementType,
		baseStyles?: CSS<typeof configWithUtils>
	) => {
		return (props => {
			const propStyles = { ...props } as CSS<typeof configWithUtils>
			delete propStyles.children
			delete propStyles.props
	
			const styles = {...baseStyles, ...propStyles}
	
			const StyledPrimitive = (
				(styled as any)(
					props.as || tag,
					styles
				) as unknown
			) as FC<HtmlProps & { variant?: string }>
	
			if (typeof props.variant === "string")
				return (
					<StyledPrimitive {...props.props as HtmlProps} main={props.variant}>
						{props.children}
					</StyledPrimitive>
				)
	
			return (
				<StyledPrimitive {...(props.props as HtmlProps)} {...props.variant}>
					{props.children}
				</StyledPrimitive>
			)
		}) as FC<
			CSS<typeof configWithUtils> & {
				children?: ReactNode
				props?: Omit<HtmlProps, "children">
			}
		>
	}) as StyleableElementFactory
	
	type DefaultElementProps = HTMLAttributes<HTMLElement>
	type DivProps = HTMLAttributes<HTMLDivElement>
	type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>
	type ParagraphProps = HTMLAttributes<HTMLParagraphElement>
	type LabelProps = LabelHTMLAttributes<HTMLLabelElement>
	type InputProps = InputHTMLAttributes<HTMLInputElement>
	type SelectProps = SelectHTMLAttributes<HTMLSelectElement>
	type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
	type ImgProps = ImgHTMLAttributes<HTMLImageElement>
	type HrProps = HTMLAttributes<HTMLHRElement>
	type TableProps = TableHTMLAttributes<HTMLTableElement>
	type TrProps = HTMLAttributes<HTMLTableRowElement>
	type ThProps = ThHTMLAttributes<HTMLTableCellElement>
	type TdProps = TdHTMLAttributes<HTMLTableDataCellElement>
	type FormProps = FormHTMLAttributes<HTMLFormElement>
	type OptionProps = OptionHTMLAttributes<HTMLOptionElement>
	type BoldProps = HTMLAttributes<HTMLElement>
	type SmallProps = HTMLAttributes<HTMLElement>
	type UnarticulatedAnnotationProps = HTMLAttributes<HTMLElement>
	type AreaProps = HTMLAttributes<HTMLAreaElement>
	type OlProps = OlHTMLAttributes<HTMLOListElement>
	type UlProps = HTMLAttributes<HTMLUListElement>
	type LiProps = LiHTMLAttributes<HTMLLIElement>
	
	const styleablePrimitives = {
		Div: createStyleableElement<HTMLDivElement, DivProps>("div"),
	
		Row: createStyleableElement<HTMLDivElement, DivProps>("div", {
			display: "flex",
			flexDirection: "row",
		} as CSS<typeof configWithUtils & { utils: typeof crochetConfig["utils"] & typeof utilLibrary}>),
	
		Col: createStyleableElement<HTMLDivElement, DivProps>("div", {
			display: "flex",
			flexDirection: "column",
		} as CSS<typeof configWithUtils & { utils: typeof crochetConfig["utils"] & typeof utilLibrary}>),
	
		H1: createStyleableElement<HTMLHeadingElement, DivProps>("h1"),
		H2: createStyleableElement<HTMLHeadingElement, DivProps>("h2"),
		H3: createStyleableElement<HTMLHeadingElement, DivProps>("h3"),
		H4: createStyleableElement<HTMLHeadingElement, DivProps>("h4"),
		H5: createStyleableElement<HTMLHeadingElement, DivProps>("h5"),
		H6: createStyleableElement<HTMLHeadingElement, DivProps>("h6"),
	
		A: createStyleableElement<HTMLAnchorElement, AnchorProps>("a"),
	
		P: createStyleableElement<HTMLParagraphElement, ParagraphProps>("p"),
	
		Label: createStyleableElement<HTMLLabelElement, LabelProps>("label"),
	
		Input: createStyleableElement<HTMLInputElement, InputProps>("input"),
	
		Select: createStyleableElement<HTMLSelectElement, SelectProps>("select"),
	
		Nav: createStyleableElement<HTMLElement, DefaultElementProps>("nav"),
	
		Span: createStyleableElement<HTMLSpanElement, DefaultElementProps>("span"),
	
		Main: createStyleableElement<HTMLElement, DefaultElementProps>("main"),
	
		Li: createStyleableElement<HTMLLIElement, LiProps>("li"),
	
		Section: createStyleableElement<HTMLElement, DefaultElementProps>("section"),
		
		Button: createStyleableElement<HTMLButtonElement, ButtonProps>("button"),

		Img: createStyleableElement<HTMLImageElement, ImgProps>("img"),
		
		Hr: createStyleableElement<HTMLHRElement, HrProps>("hr"),

		Table: createStyleableElement<HTMLTableElement, TableProps>("table"),

		Tr: createStyleableElement<HTMLTableRowElement, TrProps>("tr"),

		Th: createStyleableElement<HTMLTableCellElement, ThProps>("th"),

		Td: createStyleableElement<HTMLTableDataCellElement, TdProps>("td"),

		Form: createStyleableElement<HTMLFormElement, FormProps>("form"),

		Option: createStyleableElement<HTMLOptionElement, OptionProps>("option"),

		B: createStyleableElement<HTMLElement, BoldProps>("b"),

		Small: createStyleableElement<HTMLElement, SmallProps>("small"),

		U: createStyleableElement<HTMLElement, UnarticulatedAnnotationProps>("u"),

		Footer: createStyleableElement<HTMLElement, DefaultElementProps>("footer"),
		
		Adress: createStyleableElement<HTMLElement, DefaultElementProps>("adress" as unknown as ElementType<HTMLElement>),

		Article: createStyleableElement<HTMLElement, DefaultElementProps>("article"),

		Aside: createStyleableElement<HTMLElement, DefaultElementProps>("aside"),

		Area: createStyleableElement<HTMLAreaElement, AreaProps>("area"),
		
		Ol: createStyleableElement<HTMLOListElement, OlProps>("ol"),

		Ul: createStyleableElement<HTMLUListElement, UlProps>("ul"),
	}
	
	return { ...configuredStithces, createStyleableElement, styleablePrimitives }
}

export type CSSWithUtilLibrary<Config extends { utils?: any }> = 
	CSS<Config & { utils: Config["utils"] & typeof utilLibrary}>
