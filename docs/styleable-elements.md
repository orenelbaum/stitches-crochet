# Styleable Elements

Styleable elements are a Stitches wrapper around DOM elements or React components (typescript support for React components is lacking but will be updated very soon).
The difference between them and normal Stitches components created with the `styled` function, is that they are CSS first, i.e. the CSS is written directly in the top level props of the component, and the non-styling props that need be passed into the underlying component go into the `props` prop.
Like the `styled` function, styleable elements allow you to add base styles when creating the styleable element.

## The `variant` prop

Another difference is that stylable elements give you a new way to use variants with the `variant` prop. Not to be confused with the `variants` prop which lets you define the available variant. Stitches allows you to define multiple categories of variants on your style objects (Stitches refers in the docs to each category of variants as a variant, but in the context of Crochet a variant is one option, for example size would be a variant category, small and big would be variants).
When styling styleable elements you can define a main variant category called `main`.
Styleable elements have a 'variant' prop that accepts either a string or an objects.
When passing a string you are actually choosing a variant from the `main` category. For example if your `main` variant category includes the variants `header` and `hero-section`, and you want to choose the `header` variant, you would pass `"header"` into the `variant` prop.
If you want to choose variants from multiple categories including the main category, you can pass an object into the `variant` prop. If you want for example to choose `header` from the main category and `small` from the size category, you would pass `{ main: "header", size: "small" }`.
This could be easier to understand by looking at the [example](https://github.com/orenelbaum/stitches-crochet/tree/master/src/example).


# Styleable Primitives

Styleable primitives are a set of predefined styleable elements. All of them except for 2 different HTML elements with no base styles. `Row` and `Column` are divs with a base style of flex row / flex column. Right now not all HTML elements are available but support for all HTML elements is probably coming soon.