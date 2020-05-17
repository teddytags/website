# TeddyTags Virtual DOM

## Motivation

Since the introduction of Web Components and Shadow DOM, people have focused on writing custom HTML tags which replace the need of writing a large, unmaintainable markup. So you can come up with fancy tags like `<paper-button />` of the MDC, which is itself quite expressive.

But one thing always bugs me a lot:

```html
<paper-button></paper-button>
<!--  ^              ^     -->
<!-- Why the hyphens!!  -->
```

The hyphens are required so that the tags don't conflict with the upcoming HTML tags of the HTML spec.

To solve this, we got the Virtual DOM, which is purely not a overkill at all.

## Components

An example of a most down-to-earth class component:

```jsx
class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello!!</h1>;
  }
}
```

And to render it,

```jsx
render(<MyComponent />, document.querySelector("#app-root"));
```

To find more information about the API, here are the links:

- [TeddyTags.h](./vdom/h)
- [TeddyTags.render](./vdom/render)
- [TeddyTags.Component](./vdom/Component)
