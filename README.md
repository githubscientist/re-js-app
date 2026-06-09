# React

- React is a JavaScript library or Framework for building user interfaces. 
- It was developed by Facebook and is widely used for building web applications.
- React allows developers to create reusable UI components, making it easier to manage and maintain code.

## Component

- A component is a self-contained piece of code that represents a part of the user interface.
or
- A component is a reusable piece of user interface that can be used to build complex UIs.

## Features of React

- Component-Based Architecture: React allows developers to build UIs using reusable components, which can be easily maintained and updated.

- Virtual DOM: React uses a virtual DOM to optimize rendering performance. It updates only the parts of the DOM that have changed, resulting in faster updates.

- JSX: React uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript. This makes it easier to create and manage UI components. JSX is Javascript XML, which allows you to write HTML in React.

- Single Page Application (SPA) Support: React is well-suited for building SPAs, where the entire application runs on a single page and dynamically updates content without requiring a full page reload.

### Class Components Vs Functional Components

- Class Components: These are traditional React components defined as ES6 classes. They have access to lifecycle methods and can manage their own state using the `this.state` object.

- Functional Components: These are simpler components defined as JavaScript functions. They can use React hooks to manage state and lifecycle events, making them more concise and easier to read.

Note: Initially, React only supported class components, but with the introduction of hooks in React 16.8 (in the year of 2019), functional components have become more popular and are now the recommended way to create components in React.

### Exercise: Props Passing from Parent to Child Component

## React Hands-on Exercise: Student Profile Card

Create a React application to display student details using **components and props**.

### Requirements

1. Create a parent component named `App`.

2. Create a child component named `StudentCard`.

3. In the `App` component, create the following student details:

```jsx
const studentName = "Arun";
const course = "React JS";
const age = 21;
const city = "Coimbatore";
```

4. Pass all four values from the `App` component to the `StudentCard` component using props.

5. In the `StudentCard` component, receive the props and display the details in the following format:

```text
Student Name: Arun
Course: React JS
Age: 21
City: Coimbatore
```

6. Add basic CSS to display the student details inside a card.

7. Change the student details in the parent component and verify that the updated values are displayed in the child component.

### Rules

* Data must be passed only from parent to child.
* Do not write the student details directly inside `StudentCard`.
* Do not use state, events, list rendering, or `map()`.
