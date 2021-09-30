import Stitches from '@stitches/react'
import type * as Util from '@stitches/react/types/util'
import { StyleableComponent } from './styleable-component.interface'
import { CssComponent, StyledComponent } from '@stitches/react/types/styled-component'


export type StyleableComponentFactory<
    CSS = Stitches.CSS
> = <
    Type extends (
        | keyof JSX.IntrinsicElements
        | React.ComponentType<any>
        | Util.Function
    )
>(
    type: Type,
    ...baseStyles: (CSS | string | CssComponent | StyledComponent<any> | StyleableComponent<any,any>)[]
) =>
    StyleableComponent<Type, CSS>
