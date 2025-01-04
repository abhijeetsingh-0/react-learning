# React Fundamentals Guide

## What is React?
React is a JavaScript library created by Facebook for building user interfaces. It uses a component-based architecture that helps create reusable UI elements.

Why use React?
- Virtual DOM for better performance
- Component-based architecture
- Large community and ecosystem
- Easy learning curve for JavaScript developers


## Components and Their Types

### Class Components
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

### Function Components
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


## Single Page Applications (SPAs)

### SPAs vs Multi-Page Applications

Single Page Applications:
- Load once, update content dynamically
- Faster subsequent page loads
- Smooth user experience
- Better state management

Multi-Page Applications:
- Traditional page reload model
- Better SEO (without extra configuration)
- Less complex JavaScript
- More suitable for content-heavy sites


## Real DOM vs Virtual DOM

Real DOM:
- Actual browser DOM
- Slow for frequent updates
- Updates entire tree
- Direct manipulation is expensive

Virtual DOM:
- Lightweight copy of the Real DOM
- Fast diffing algorithm
- Batch updates
- Only updates what changed

## NPM Basics

Installing packages:
```bash
npm install package-name        # Local install
npm install -g package-name     # Global install
npm install --save package-name # Save as dependency
npm install --save-dev package-name # Save as dev dependency
```

## React Updates and ES6+ Features

### How React Updates Work
1. State changes trigger re-render
2. Virtual DOM creates new tree
3. Differs with previous version
4. Updates only changed elements

### ES6+ Features
```javascript
// Import/Export
import React from 'react';
export default Component;
export const util = () => {};

// Destructuring
const { props } = this;
const [state, setState] = useState();

// Arrow Functions
const MyComponent = () => {
  return <div>Hello</div>;
};
```


## Basic Terminal Commands
```bash
pwd   # Print Working Directory
ls    # List directory contents
cd    # Change Directory
clear # Clear terminal screen
```

## Setting Up React Environment

1. Install Node.js from nodejs.org
2. Verify installation:
```bash
node --version
npm --version
```

## React-Vite Setup

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

## JSX (JavaScript XML)

```jsx
// JSX Example
const element = (
  <div className="greeting">
    <h1>Hello Abhijeet!</h1>
  </div>
);
```

### Fragments
```jsx
// Using Fragments
<>
  <ChildA />
  <ChildB />
</>
```

### Component Naming
- Use PascalCase: `UserProfile`
- Be descriptive: `NavigationBar`
- Avoid generic names: `Component`, `Page`

### Tools
- Webpack: Bundles code
- Babel: Transforms JSX
- ESLint: Code quality
- Prettier: Code formatting