# This library is archived because Stitches entered maintnance mode.

# stitches-crochet

Stitches Crochet is a set of general utilities for [Stitches](https://stitches.dev/) (not to be confused with [Stitches utils](https://stitches.dev/docs/utils)).

Stitches Crochet is currently React only. A SolidJS version is coming soon.

Currently Stitches Crochet has 2 utilities:

- **Styleable Components**

  Stitches Crochet provides a function that creates styleable components.
  Styleable components are similar to styled components, however their API is a little bit different.

  Like styled components, styleable components can have base styles. However, the way you customize a styled comoponent is by choosing variants (defined in the base styles) and adding more styles through the `CSS` prop.

  The way you customize a styleable component is by adding the style rules directly as props to the component, and with the `boolVariants` prop which conditionally applies sets of styles.

	Example:

  ```tsx
	const StyleableComp = createStyleableComponent(Comp, { color: "Blue" })

	<StyleableComp
		props={{ text: "Wrapped React component" }}
		background="Red"
		margin="20px"
		boolVariants={[
			[someBool, css({ padding: "10px" }), styled("a", { fontWeight: "bold" }) ],
			[!someBool, { background: "Yellow" }]
		]}
	/>
  ```

- **Styled Primitives**

  `StyledPrimitives` is a proxy that lets you access automatically created styleable component wrappers for HTML elements.

	Example (using `C` as alias to `StyledPrimitives`):

	```tsx
	<C.div color="YellowGreen">
		Styleable primitive
	</C.div>
	```

[See usage example](https://github.com/orenelbaum/stitches-crochet-example)

This project is in early development. Don't use it in production.

## Installation and getting started

Install stitches Crochet with

```bash
npm i stitches-crochet
```

Replace `createStitches` with `configureCrochet`. It takes the same argument - a Stitches config, and returns the same object with two added properties: `createStyleableComponent` and `StyleablePrimitives`.

- Use `createStyleableComponent` to create custom styleable components.
- Use `StyleablePrimitives` for quick access to styleable HTML elements with no base styles.

It's recommended to alias `StyleablePrimitives` with a one letter name. You can use `C` for crochet (note that it needs to be a capital letter so you can use it inside a JSX tag, for example `<C.div>`).

## API

### `configureCrochet`

```js
const { createStyleableComponent, StyleablePrimitives, ...stitches } = configureCrochet(stitchesConfig)
```

This function is the same as createStitches, except the returned object also has `createStyleableComponent` and `StyleablePrimitives`.

### `createStyleableComponent`

```js
const styleableComponent = createStyleableComponent(componentOrElement, ...baseStyles)
```

Creates a new styleable component.

Arguments:

- `componentOrElement` - An HTML element or a React component to be wrapped with a styleable component.

- `baseStyles` (optional) - A collection of style objects, styled components, CSS components, functions returned from CSS components, and class names.

Returns: a styleable component

### Styleable components

```tsx
<MyStyleableComponent
	props={underlyingComponentProps}
	{...styleRules}
	boolVariants={arrayOfBoolVariants}
>
	{ someChildren }
</MyStyleableComponent>
```

A wrapper around an HTML element or a React component, similar to styled components except the API is a bit different. Styleable components give you a more concise way to add one off customizations.

Props:

- `props`: Props to be passed to the underlying component. This field is optional if the underlying component doesn't have any required props.

- `boolVariants` (optional): An array of boolean variants (a little bit different than normal Stitches boolean variants). Each boolean variants is itself an array in which the first value is a boolean expression (which is the condition for the variant to be applied) followed by a collection of style objects, other styleable components, styled components, CSS components, functions returned from CSS components, and class names.

  An example of a boolean variant:

  ``` js
  [someCondition, { color: "blue" }, css({ background: "green" })]
  ```

  In this example if `someCondition` is true, `color: Blue` and `background: Green` will be applied to the component.

  An example of `boolVariants` prop:

  ``` js
  [[someCondition, { color: "blue" }, css({ background: "green" })]]
  ```

  This is the same as the boolean variant example, except it's wrapped in an array.

- Any CSS property or util defined in your Stitches config is a valid prop.
  
  For example:

  ```jsx
  <MyStyleableComponent
	  color="Black"
	  p="3px"
  >
	  { someChildren }
  </MyStyleableComponent>
  ```

  The `p` prop represents a util in this example.


### `StyledPrimitives`

  A proxy that lets you access automatically created styleable component wrappers for HTML elements with no base styles.
  It's recommended to alias `StyledPrimitives` as one letter, in this example I'm going to use the alias `C` which stands for crochet.

  An example:

  ```tsx
	<C.div color="YellowGreen">
		Styleable primitive
	</C.div>
  ```
	
  You can access any HTML element this way.

## Roadmap:

- Better types
- A SolidJS version
- Add some missing features to styleable components
- More utility functions


Check out my other Stitches library - [stitches-purge-utils](https://github.com/orenelbaum/stitches-purge-utils) (also in early development).
More libraries coming soon (static extraction, Tailwind utils).
