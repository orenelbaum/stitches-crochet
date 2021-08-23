import { configureCrochet, CSSWithUtilLibrary } from '../lib/crochet'


const crochetConfig = {
    theme: {
        colors: {
            blue500: 'hsl(206,100%,50%)',
            green500: 'hsl(148,60%,60%)',
            red500: 'hsl(352,100%,62%)'
        },
        space: {
            1: '5px ',
            2: '10px',
            3: '15px'
        }
    },
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)'
    },
    utils: {
        red: (_value: boolean) => ({
            color: "red",
            bg: "#622"
        }),
        green: (_value: boolean) => ({
            color: "#3d3",
            bg: "#262"
        })
    },
    prefix: 'prefix-',
    themeMap: {
        width: 'space',
        height: 'space'
    }
} as const

const crochet = configureCrochet(crochetConfig)

export const { createStyleableElement } = crochet

export const { Div, P } = crochet.styleablePrimitives

export type CSS = CSSWithUtilLibrary<typeof crochetConfig>
