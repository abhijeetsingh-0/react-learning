# JSX in React
## What is JSX?

- JSX stands for JavaScript XML.
- It allows you to write HTML-like code inside JavaScript.
- JSX is compiled into JavaScript code by React.

```jsx
const element = <h1>Hello, World!</h1>;
```
## Key points:

- JSX needs a single root element (can use a <div> or React.Fragment).
- You can embed JavaScript expressions in JSX using {}.


# Components and Their Types
## What are Components?

- Components are reusable building blocks of a React app.
- They can be either functional or class-based.

## Class Components
```jsx
// This is a class component
class MyComponent extends React.Component {
  render() {
    return <h1>Hello Abhijeet from Class Component!</h1>;
  }
}
```
- Written as a class with a render() method
- Uses this.state and lifecycle methods
- Uses this to access state and props
- Slightly more overhead
- Less used in modern React
- Slightly harder to reuse due to class syntax

## Function Components
```jsx
// This is a function component
function MyComponent() {
  return <h1>Hello Abhijeet from function component!</h1>;
}
```
- Simpler syntax, written as a function
- Uses React Hooks (useState, useEffect)
- No this keyword
- Slightly faster and simpler
- Current recommended approach
- Easier to reuse and test