# Custom Elements Using TeddyTags

TeddyTags was introduces wholly for just this purpose - to keep aside the predefined ones and let programmers own the world!!

# API

## class Tag

The class used for instantaniation of TeddyTags Custom Elements.

## Class properties

- `elementName`: The name of the custom element, acquired from the `constructor`. (`string`)
- `selector`: The `querySelectorAll` which will be mutated from the `constructor` of this class. (`NodeList`)

## constructor

Initialize TeddyTags

### Parameters

`selector`:The custom element's tag name (`string`)

### Example

```javascript
new Tag("customTag");
```

Will refer to

```html
<customTag></customTag>
```

## set()

Declaration: `set: (tagName: string) => void;`

Magically change your custom element to the desired valid HTML5 one.

### Parameters

`tagName` The tag name of the custom element (`string`)

### Example

- Your custom element

```html
<customTag>Hello, World!</customTag>
```

- Using the function

```javascript
new Tag("customTag").set("h1");
```

- The result

```html
<h1 id="customTag">Hello, World!</h1>
```

## fromComponent()

Declaration: `fromComponent: (component: typeof Component) => void;`

A function that transpiles HTML elements into dynamic components on the go.

### Parameters

`component`: Any TeddyTags class Component (`typeof Component`)

### Example

- A component

```javascript
class Greeter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return h("h1", null, "Hello, ", this.props.name);
  }
}
```

- The HTML tag

  ```html
  <Greeter name="Yoda"></Greeter>
  ```

- Code to convert it into element

  ```javascript
  new Tag({ name: "Greeter", from: Greeter });
  ```

- The rendered HTML
  ```html
  <div id="Greeter" name="Yoda">
    <p>Hello, Yoda</p>
  </div>
  ```

# Usage

## HTML

1. Import the TeddyTags module from the package:
   ```js
   import { Tag } from "teddytags";
   ```
2. Use the imported module to define custom elements:
   ```js
   new Tag("myElement").set("h1");
   //       ^^^^^^^^^        ^^
   //       can be any name    html tag
   ```
3. Use the element in your HTML, no other thing
   ```html
   <myElement>Hello, Custom Elements Rock!</myElement>
   ```
4. Go in your browser and see the compiled HTML
   ```html
   <h1 id="myElement">Hello, Custom Elements Rock!</h1>
   ```
5. Spice up the mix with some other attributes you like:
   ```html
   <myElement class="you-decide" data-foo="bar"></myElement>
   ```

## TSX

If you want to use cutom tags in TSX(TypeScript React), then you need to add the entry of your tag in the `JSX.IntrinsicElements` interface.

### Example

If you want to use a custom element in TSX, declare it like this:

```ts
import { HTMLProps } from "teddytags";
interface fooBarProps {
  someattr: string;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      fooBar: HTMLProps<fooBarProps>;
    }
  }
}
```

## Componental Custom Elements

If you want to directly use class Components in HTML, you need to use the `Tag.fromComponent` function.

### Example

If you have a component named Clock

```jsx
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
    this.setState({ time: Date.now() });
  }
  render() {
    return <span>{this.state.time}</span>;
  }
}
```

And want to use it in a HTML Element named `MyClock`,

The code will be:

```js
new Tag("MyClock").fromComponent(Clock);
//       ^^^^^^^                 ^^^^^
//    name of HTML tag        the Component
```
