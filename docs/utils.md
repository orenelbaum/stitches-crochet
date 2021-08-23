# Utils

## Size utils

#### size
Set width and/or height.

Type:
```
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
```

Examples:
```tsx
<Div size="4rem">
<Div size={["4rem", "5rem"]}>
<Div size={{ w: "4rem", h: "5rem" }}}>
```

#### w, h
Shortcuts fpr width and height.

#### fullSize
Set width and height to 100%

Type: boolean

Example:
```tsx
<Div fullsize>
```

#### fullWidth, fullHeight
Set width or height to 100%

Type: boolean

Example:
```tsx
<Div fullWidth>
```

#### screenSize
Set width to 100vw and height to 100vh

type: boolean

example:
```tsx
<Div screensize>
```

#### screenWidth, screenHeight
Set width to 100vw or height to 100vh

Type: boolean

Example:
```tsx
<Div screenWidth>
```

## Display Utils

### block, inlineBlock, inline, hidden
Set display to block, inlineBlock, inline or hidden

Type: boolean

Example:
```tsx
<Div hidden>
```

## Flex Utils

#### dFlex
Set display to flex and optionally add some flex options: direction, wrap, flow, justify-content, align-content and align-items.

Type:
```
{
	direction?: "column" | "column-reverse" | "row" | "row-reverse"
	wrap?: "nowrap" | "wrap" | "wrap-reverse"
	flow?: string
	justifyContent?: string
	alignContent?: string
	alignItems?: string
}
```

Examples:
```tsx
<Div dFlex>
<Div dFlex={{ direction: "column", wrap: "wrap" }}>
```

#### inlineFlex
Set display to inline flex.

Type: boolean

Example:
```tsx
<Div inlineFlex>
```

#### row, column, rowReverse, columnReverse
Set display to flex and flex direction to row, column, rowReverse or columnReverse

Example:
```tsx
<Div row>
```

Note: this can also be achieved with the `Row` and `Column` styleable primitives.
The above example is equivilent to `<Row>`


## Spacing

### Padding 

#### padding, p
Set the padding.

Type:
```
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
```

Examples:
```tsx
<Div p="5rem">
<Div p={{ top: "5rem", x: "3rem }}>
```

#### pt, pr, pb, pl
Shortcuts for padding-top, padding-right, padding-bottom, padding-left

#### paddingX, px, paddingY, py
Set horizontal or vertical padding.

Type: string | number

Example:
```tsx
<Div px="5rem">
```

#### noPadding
Set padding to 0

Type: boolean

Example:
```tsx
<Div noPadding>
```
### Margin

#### margin, m
Set the margin.

Type:
```
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
```

Examples:
```tsx
<Div m="5rem">
<Div m={{ top: "5rem", x: "3rem }}>
```

#### mt, mr, mb, ml
Shortcuts for margin-top, margin-right, margin-bottom, margin-left

#### marginX, mx, marginY, my
Set horizontal or vertical margin.

Type: string | number

Example:
```tsx
<Div mx="5rem">
```

#### noMargin
Set margin to 0

Type: boolean

Example:
```tsx
<Div noMargin>
```
