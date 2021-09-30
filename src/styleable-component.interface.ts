import type * as React from 'react'
import Stitches from '@stitches/react'
import { RemoveIndex } from '@stitches/react/types/stitches';
import { CssComponent, IntrinsicElementsKeys, StyledComponent } from '@stitches/react/types/styled-component'


export interface StyleableComponent<
	Type = 'span',
	CSS = Stitches.CSS
> extends React.ForwardRefExoticComponent<
    React.ComponentPropsWithRef<
        React.FC<{
            props:
                Type extends IntrinsicElementsKeys | React.ComponentType<any>
                    ? React.ComponentPropsWithRef<Type>
                    : never
        }>
    >
> {
	<Composer extends { [name: string]: unknown }>(
		props:
            & (
                Type extends IntrinsicElementsKeys | React.ComponentType<any>
                    ? { [index: string]: null } extends React.ComponentPropsWithRef<Type>
                        ? {
                            /** The **props** prop lets you pass props to the underlying element. */
                            props?: React.ComponentPropsWithRef<Type>
                        }
                        : {
                            /** The **props** prop lets you pass props to the underlying element. */
                            props: React.ComponentPropsWithRef<Type>
                        }
                    : { 
                        /** The **props** prop lets you pass props to the underlying element. */
                        props?: {}
                    }
            )
            & RemoveIndex<CSS>
            & {
                /** The **boolVariants** prop lets you conditionally set subclasses of styles. */
                boolVariants?: [condition: any, ...styleExpressions: (CSS | string | CssComponent | StyledComponent<any> | StyleableComponent<any, CSS>)[]][]
            } 
            & CSS 
            & {
                [K2 in keyof Composer]: 
                    K2 extends 'boolVariants' | 'props'
                    ? unknown
                    : K2 extends keyof CSS
                        ? CSS[K2]
                        : unknown
            }
	): React.ReactElement | null

	className: string
	selector: string
}
