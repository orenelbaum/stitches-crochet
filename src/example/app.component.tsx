import React, { FC } from "react"
import { createStyleableElement, CSS, Div, P } from "./crochet-configured"

	
const buttonStyles: CSS = { fontSize: "1.4rem" }
const MyButton = createStyleableElement("button", buttonStyles)

const variants = { 
	main: { yellow: { color: "#bb2" }, red: { color: "#b22" } }, 
	size: { small: { fontSize: "0.6rem" }, large: { fontSize: "1.4rem" } } 
}

const PStyles1: CSS = { variants, variant: "yellow" }

const InnerComponent: FC<{ text: string, className: string }> = 
	({ text, className }) => 
		<div {...{ className }}>{text}</div>
const StyleableComponent = createStyleableElement(InnerComponent, { border: "solid 1px" })


export const App: FC = () => {
	return (
		<>
			<p>
				This div uses the 'Div' import with two utils: 'p' from the util library and 'red' which is
				a custom util we defined in the crochet configuration.
			</p>
			<Div p="5rem" red >{`<Div p="5rem" red >`}</Div>

			<p>
				This button is a custom styleable element created with the 'createStyleableElement' function.
				It also uses another custom util, 'green', and the 'props' prop which passes everything you
				give it into the underlying element.
				The font size (1.4rem) is already encapsulated within the 'MyButton' component, since we passed
				it into the 'createStyleableElement' function when creating 'MyButton'.
			</p>
			<MyButton green props={{ onClick: () => window.alert("hi") }}>
				{`<MyButton green props={{onClick: () => window.alert("hi")}}>`}
			</MyButton>

			<p>
				This button demonstrates the use of the 'as' prop so we can reuse the styles of an existing
				styleable element but change the underlying element.
			</p>
			<MyButton as="a" red props={{href: "/hi"}}>
				{`<MyButton as="a" red props={{href: "/hi"}}>`}
			</MyButton>

			<p>
				This Paragraph demonstrates the use of variants when we only want to use the main variant
				category.
			</p>
			<P variants={variants} variant="red">
				{`<P variants={variants} variant="red">`}
			</P>

			<p>
				This Paragraph demonstrates the use of variants when we only want to use the a variant
				category which is not the main one (in this case size).
			</p>
			<P variants={variants} size="large">
				{`<P variants={variants} size="large">`}
			</P>

			<p>
				This Paragraph demonstrates the use of variants with variant multiple categories.
			</p>
			<P variants={variants} variant={{ main: "red", size: "small" }}>
				{`<P variants={variants} variant={{ main: "red", size: "small" }}>`}
			</P>

			<p>
				This paragraph demonstrates how we can use an already existing style object within a styleable
				element.
			</p>
			<P {...PStyles1}>{`<P {...{ PStyles1 }}>`}</P>

			<p>
				This React component demonstrates how to use a React component as a styleable element.
			</p>
			<StyleableComponent
				color="blue" 
				props={{ text: `<StyleableComponent color="blue" props={{ text: code }} />` }} 
			/>
		</>
	)
}
