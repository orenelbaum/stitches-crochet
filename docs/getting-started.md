# Getting Started

Keep in mind that the first two steps are temporary and are probably going to be replaced soon by an npm package.

- Create a library called `crochet-lib` (or whatever name you want) somwhere in your code.
- Copy the files `crochet.tsx` and `util-library.ts` from `src/lib` in this repo into the library you just created.
- Create another file somewhere under your `src` folder and call it `crochet-configured.ts` (or whatever name you want). This is where we config crochet and export everything to be used in other files.

This is the file from the [example](https://github.com/orenelbaum/stitches-crochet/tree/master/src/example):

```tsx
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
        bp3: '(min-width: 1024px)',
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
```

Let's break it down:
```tsx
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
        bp3: '(min-width: 1024px)',
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
```

This is just a strandard Stitches config that would be used as the base config. Replace this with your own custom Stitches config. The only thing that Crochet changes about the config is that it adds the util library.

```tsx
import { configureCrochet } from '../lib/crochet'

//...

const crochet = configureCrochet(crochetConfig)
```

Here we import the entry function to crochet from the `crochet-lib` (or whatever you decided to call it) we created earlier.
Make sure to change the path of the import to point to your `crochet-lib` directory.

```tsx
export const { createStyleableElement } = crochet
```

Here we export functions from Crochet or Stitches to use in other folders.
In this example we only export the `createStyleableElement` function but the `crochet` object also contains all of the functions you would get from `createStitches`.

```tsx
export const { Div, P } = crochet.styleablePrimitives
```

Here we export the styleable primitives from Crochet. In the example we only export `Div` and `P` but there are more common HTML elements on the list. Support for all HTML elements is probably coming soon. In addition to HTML elements we have `Row` and `Col` which are like `Div` but with base styles of flex row and flex column.

```tsx
import { CSSWithUtilLibrary } from '../lib/crochet'

// ...

export type CSS = CSSWithUtilLibrary<typeof crochetConfig>
```

Here we import the `CSSWithUtilLibrary` helper from our `crochet` file in the `crochet-lib` folder.
Then we use it to export the `CSS` type configured with your custom config and the util library.