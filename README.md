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

## Data Passing

### Passing data from Parent to Child using Props

- Props (short for properties) are used to pass data from a parent component to a child component in React. Props are read-only and cannot be modified by the child component.

### Passing data from Child to Parent using Callbacks

Steps:

1. In the parent component, define a function that will handle the data received from the child component.

2. Pass this function as a prop to the child component.

3. In the child component, call the function passed as a prop and pass the data you want to send back to the parent component.

### Props Drilling

- Props drilling refers to the process of passing data through multiple levels of components in a React application. 

- In other words, passing data from a parent component to a deeply nested child component by passing props through intermediate components that do not need the data themselves is called props drilling.

Drawback of Props Drilling:

1. It can make the code more complex and harder to maintain, especially as the number of components increases.

2. It can lead to performance issues, as every time the parent component re-renders, all the intermediate components that receive the props will also re-render, even if they do not need to.

Solution to Props Drilling: To avoid props drilling, you can use state management libraries like Redux or Context API.

## State Management using hooks

Story: 

Initially, we had only class components in React, and later when we had functional components, we couldn't manage state in them. 

but of course functional components are simpler, concise, and easier to read than class components. but because of lack of state management in functional components, we had to use class components for stateful logic.

In 2019, React introduced hooks, which allowed us to manage state and side effects in functional components. hence, we started using functional components more widely, and they became the recommended way to create components in React.

Hooks:

- Hooks are functions that let you use state and other React features in functional components.
- The most commonly used hooks are `useState` for managing state and `useEffect` for handling side effects.
- Hooks will have a prefix of "use" and can only be called at the top level of a functional component or from within other hooks.
- Hooks cannot be used in class components.

Class Components are called as Stateful Components, because they can manage their own state using `this.state` and lifecycle methods.

Functional Components are called as Stateless Components, because they cannot manage their own state and do not have lifecycle methods. However, with the introduction of hooks, functional components can now manage state and side effects, making them more powerful and versatile than before.

State:

- State is a built-in object in React that allows components to manage and update their own data.
- State is mutable, meaning it can be changed over time, usually in response to user actions or other events.
- State is typically used to store data that affects the rendering of a component.

Rendering: 

- Rendering is the process of inserting the React elements into the DOM.

Re-Rendering:

- Re-rendering is the process of updating the DOM when the state or props of a component change. 

List Rendering:

- Given an array of data, we can use the `map()` function to iterate over the array and render a list of components based on that data. For example, generating a list of student cards from an array of student objects or list of items in a shopping cart.

Key Prop:

- When rendering a list of components, React requires a unique `key` prop to be assigned to each component in the list. This helps React identify which items have changed, been added, or removed, improving performance and ensuring that the UI updates correctly when the data changes. The `key` should be a stable and unique identifier for each item in the list, such as an ID or index.

[x] Applying CSS to React Components
[x] Setting up Tailwind CSS in React
[x] Conditional Rendering in React
[x] Forms and Controlled Components in React
[ ] Add icons to React Components
[ ] Add Toast Notifications, Modals, and Popups in React

## Conditional Rendering

- Conditional rendering in React allows you to render different components or elements based on certain conditions. 

## Controlled Inputs Vs Uncontrolled Inputs

Uncontrolled inputs are form elements that manage their own state internally, while controlled inputs are form elements that are controlled by React state.

[x] Side Effects and useEffect Hook in React
[x] Data Fetching with Axios
[x] Rendering API Datas

### Lifecycle Methods

- Lifecycle methods are special methods in React class components that allow you to run code at specific points in a component's lifecycle, such as when it mounts, updates, or unmounts.
- Lifecycle methods include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- We can execute side effects in lifecycle methods, such as fetching data from an API or setting up event listeners.
- By default, functional components do not have lifecycle methods, but with the introduction of hooks, we can use the `useEffect` hook to perform side effects in functional components as well.

## Web Application

- In web application, the most commonly used architecture is the client-server architecture, where the client (frontend) interacts with the server (backend) to fetch and manipulate data.

- In client-server architecture, the client sends requests to the server, and the server processes those requests and sends back responses.

- what type of requests? http requests.

- http request: type of request as defined by the HTTP protocol.

- protocol: a set of rules that govern how data is transmitted over a network.

- http protocol defines how the data is transmitted between the client and the server. it defines the structure of the request and response messages, as well as the methods (GET, POST, PUT, DELETE) that can be used to perform different operations on the server.

- http has different versions, such as HTTP/1.1 and HTTP/2, which have different features and performance characteristics.

- http/1.1 is the most widely used version of the HTTP protocol and it defines the request to have a method, a URL, headers, and a body. the response has a status code, headers, and a body.

- for making this communication effective, we use REST architecture, which is a set of principles for designing networked applications. REST stands for Representational State Transfer, and it defines how resources (data) can be accessed and manipulated using HTTP methods.

- http methods: 
    - GET: used to retrieve data from the server.
    - POST: used to send data to the server to create a new resource.
    - PUT: used to update an existing resource on the server.
    - DELETE: used to delete a resource from the server.

- Restful APIs are designed to follow the principles of REST architecture, making it easier for clients to interact with the server and perform CRUD (Create, Read, Update, Delete) operations on resources.
- They will use HTTP methods + RESTful endpoints to perform operations on resources, and they will typically return data in a format such as JSON.

For example:

API endpoint: `https://api.example.com/courses`

- GET /courses: retrieves a list of courses from the server.
- POST /courses: creates a new course on the server.
- PUT /courses/{id}: updates an existing course with the specified ID on the server.
- DELETE /courses/{id}: deletes the course with the specified ID from the server.

### Making API Requests in React

1. Using XHR (XMLHttpRequest): This is the traditional way of making HTTP requests in JavaScript.
2. Using Fetch API: This is a modern way of making HTTP requests in JavaScript, which returns a promise that resolves to the response of the request.
3. Using Axios: This is a popular third-party library for making HTTP requests in JavaScript, which provides a simpler and more powerful API than the Fetch API.

## Additional Hooks in React

[x] useRef for DOM access
[ ] useReducer for Complex State Management
[ ] useCallback and useMemo for Performance Optimization
[ ] React Router -- BrowserRouter, Routes, Route
[ ] Navigation
[ ] Nested and Dynamic Routes

### useRef Hook

- Two ways we can use useRef:
    1. To access DOM elements directly. Instead of using `document.getElementById()` or `document.querySelector()`, we can use the `useRef` hook to create a reference to a DOM element and access it directly in our React component.
    2. To store mutable values that persist across renders without causing re-renders.