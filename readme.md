# stitches-crochet
Stitches Crochet is a wrapper around [Stitches](https://stitches.dev/) (CSS in JS library) and a library of tailwind inspired Stitches utils.
The wrapper and the utils can be used individually.
The wrapper is React only but the utils can be used with every Stitches project. A Solid version of the wrapper is probably coming soon.

The wrapper lets use define components with stitches CSS rules as props. You can still pass props into the underlying element through the `props` prop.

The utils are general styling utilities which are heavily insipred by tailwind. This makes this wrapper look a little bit like [WindiCSS](https://windicss.org/) (a dynamic layer on top of tailwind using a compiler).

The way you would normally use Stitches without the wrapper is with the `styled` function:
```jsx
const ButtonWithPadding = styled('button', { paddingTop: "2rem" });

<ButtonWithPadding onClick={doStuff}>
    Hi I'm a button with paddingTop!
</ButtonWithPadding>
```

The way you would achieve the same result with Stitches Crochet is:
```tsx
import { Button } from "src/styling/crochet";

<Button props={{ onClick: doStuff }} pt="2rem">
    I'm also a button with paddingTop.
</Button>
```

Have a look at the [docs](https://github.com/orenelbaum/stitches-crochet/tree/master/docs) or at the [example](https://github.com/orenelbaum/stitches-crochet/tree/master/src/example) for more in depth usage.

This is very early in development but it's already useable since right now it's only a thin wrapper around Stitches and some utils. The main problem right now is that there's no tree shaking or purging. Tree shaking for "styleables primitives" (Div, Button, etc.) is going to come very soon. Purging of Stitches Utils is something that has no solution yet, this problem is not specific to this wrapper, however I'm planning to create a babel plugin for that. For now you can manually comment them off if you want to. This package also has not been throughly tested.

Right now the way to use this wrapper is by copy-pasting two files into your project. It's not on npm yet because it's a bit challenging to make this work as an npm package and not make typescript crush. This is probably going to change soon, it will either be on npm or there will be a CLI.



## Roadmap:

### Very soon:
- A lot more utils
- Tree shaking for styleable primitives (Div, Button, etc.)
- More styleable primitives (support for more HTML elements, 38 common elements are supported right now)
- Better types

### Probably soon:
- An npm package and/or a CLI
- Even more utils
- Better typescript support for the 'as' prop
- A SolidJS version of the wrapper (the utils can already be used with Solid)
- All HTML elements as styled primitives
- An option to make it be even more Tailwind like by default
- Documentation website

### Probably at some point:
- Automated testing
- Util purging (can be used for every Stitches project)

### Maybe at some point:
- An API similar to Styled System
- An integration with some headless UI library
- Some random Stitches helpers
- Some random CSS in JS utilities similar to Polished
- A version of the wrapper for other front end frameworks
- Integration with other popular libraries (not required for usage with other libraries but can make it easier)
- Stricter types on top of Stitches types
- A plugin that lets you put the CSS prop on any element (Emotion style)
- Slots or something similar to slots

Ideas / feature requests / contributions are welcome!
