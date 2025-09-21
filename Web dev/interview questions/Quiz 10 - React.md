# React Quiz - 10

1.  Which method in an Error Boundary allows you to update state after an error is caught?
    *   a) getDerivedStateFromError
    *   b) setErrorState
    *   c) updateStateOnError
    *   d) useErrorHandler

    **Answer:** a) getDerivedStateFromError

---

2.  What is the correct way to update state after fetching data in React?
    *   a) Call `setState` or `setData` inside `.then()` or after `await`
    *   b) Assign the data directly to the state variable
    *   c) Use a global variable
    *   d) Reload the page

    **Answer:** a) Call `setState` or `setData` inside `.then()` or after `await`

---

3.  Which of the following is the correct way to define a type for event handlers in React with TypeScript?
    *   a) `const handleClick: () => void`
    *   b) `const handleClick: MouseEventHandler`
    *   c) `const handleClick: EventHandler`
    *   d) `const handleClick: () => any`

    **Answer:** b) `const handleClick: MouseEventHandler`

---

4.  What is the main purpose of an Error Boundary in React?
    *   a) To prevent syntax errors in JSX
    *   b) To catch JavaScript errors in component rendering
    *   c) To log HTTP errors
    *   d) To prevent performance issues

    **Answer:** b) To catch JavaScript errors in component rendering

---

5.  In React, where should you place your API call to avoid multiple requests on each render?
    *   a) Inside `useState`
    *   b) Inside `useEffect` with an empty dependency array
    *   c) Inside the render method
    *   d) In CSS files

    **Answer:** b) Inside `useEffect` with an empty dependency array

---

6.  What does `[]` as the second argument to `useEffect` mean in React?
    *   a) The effect will run on every render
    *   b) The effect will never run
    *   c) The effect will run only once after the initial render
    *   d) The effect will run only when a fetch completes

    **Answer:** c) The effect will run only once after the initial render

---

7.  Which syntax is correct for defining state with `useState` in TypeScript?
    *   a) `const [count, setCount] = useState(0);`
    *   b) `const [count, setCount] = useState[0];`
    *   c) `const [count, setCount] = useState{0};`
    *   d) `const [count, setCount]:number = useState(0);`

    **Answer:** a) `const [count, setCount] = useState(0);`

---

8.  When using `fetch()`, which method is used to convert the response to JSON?
    *   a) `res.json()`
    *   b) `res.toJson()`
    *   c) `res.data()`
    *   d) `JSON.parse(res)`

    **Answer:** a) `res.json()`

---

9.  Which is the correct way to handle API errors in a `fetch()` request?
    *   a) Using `try...catch` with `async/await`
    *   b) Using `.catch()` with `.then()`
    *   c) Both A and B
    *   d) Ignoring errors

    **Answer:** c) Both A and B

---

10. Which JavaScript function is commonly used to make API requests in React?
    *   a) `fetch()`
    *   b) `getData()`
    *   c) `retrieve()`
    *   d) `callAPI()`

    **Answer:** a) `fetch()`

---

11. Which of the following is a common way to display fetched API data in React?
    *   a) Using `map()` to loop through an array of data and render JSX
    *   b) Printing JSON directly in the console
    *   c) Storing data in `localStorage` only
    *   d) Using CSS to style JSON

    **Answer:** a) Using `map()` to loop through an array of data and render JSX

---

12. In TypeScript with React, what is the default type of a prop if no type is specified?
    *   a) `any`
    *   b) `string`
    *   c) `unknown`
    *   d) `void`

    **Answer:** a) `any`

---

13. Which React hook is commonly used to fetch data when a component loads?
    *   a) `useState`
    *   b) `useEffect`
    *   c) `useReducer`
    *   d) `useContext`

    **Answer:** b) `useEffect`

---

14. In React, if an error occurs in an async operation like a `fetch()` inside `useEffect`, how can you handle it since Error Boundaries won’t catch it?
    *   a) Wrap the `fetch()` in an Error Boundary
    *   b) Use `try...catch` inside the async function
    *   c) Call `componentDidCatch` manually
    *   d) Let React handle it automatically

    **Answer:** b) Use `try...catch` inside the async function

---

15. If you fetch data and get a promise, what must you do to access the data?
    *   a) Ignore the promise
    *   b) Wait for it to resolve using `.then()` or `await`
    *   c) Use `JSON.stringify` immediately
    *   d) Call the promise like a function

    **Answer:** b) Wait for it to resolve using `.then()` or `await`

---

16. What is the main benefit of using TypeScript in a React project?
    *   a) Faster build times
    *   b) Static type checking
    *   c) Smaller bundle size
    *   d) Automatic testing

    **Answer:** b) Static type checking

---

17. In a TypeScript React component, what does the `readonly` keyword in a prop type mean?
    *   a) The prop can be modified only once
    *   b) The prop cannot be changed after it is set
    *   c) The prop can only be a string
    *   d) The prop is private

    **Answer:** b) The prop cannot be changed after it is set

---

18. Which React lifecycle method is used in a class component to catch errors for an Error Boundary?
    *   a) `componentDidMount`
    *   b) `componentDidCatch`
    *   c) `shouldComponentUpdate`
    *   d) `componentWillUnmount`

    **Answer:** b) `componentDidCatch`

---

19. What should you do before rendering fetched data to avoid errors like “Cannot read property of undefined”?
    *   a) Refresh the page
    *   b) Check if the data exists before accessing it
    *   c) Call `fetch()` twice
    *   d) Use only static data

    **Answer:** b) Check if the data exists before accessing it

---

20. Which approach is preferred when defining prop types in TypeScript for a large project?
    *   a) Inline types inside the function signature
    *   b) Using a separate `interface` or `type` alias for props
    *   c) Defining types in a comment
    *   d) Using JavaScript and inferring types

    **Answer:** b) Using a separate `interface` or `type` alias for props

---

21. Which TypeScript type is commonly used for React component children?
    *   a) `React.Children`
    *   b) `ReactNode`
    *   c) `HTMLElement`
    *   d) `JSX.Element[]`

    **Answer:** b) `ReactNode`

---

22. How do you specify that a prop must be a number in a TypeScript React component?
    *   a) `prop: string;`
    *   b) `prop: number;`
    *   c) `prop: Number;`
    *   d) `prop: numeric;`

    **Answer:** b) `prop: number;`

---

23. How do you define the type for component props in a functional component using TypeScript?
    *   a) Pass a type as the second argument to `useState`
    *   b) Use a `type` or `interface` and pass it to the component as a generic in `React.FC`
    *   c) Use `propTypes`
    *   d) Use `PropValidation`

    **Answer:** b) Use a `type` or `interface` and pass it to the component as a generic in `React.FC`

---

24. Which of the following is true about Error Boundaries in React?
    *   a) They catch errors inside event handlers
    *   b) They catch errors in rendering, lifecycle methods, and constructors of child components
    *   c) They catch syntax errors before the app runs
    *   d) They automatically retry rendering after catching an error

    **Answer:** b) They catch errors in rendering, lifecycle methods, and constructors of child components

---

25. In TypeScript, what does `?` mean when used in a prop type definition?
    *   a) The prop is optional
    *   b) The prop is required
    *   c) The prop is a number
    *   d) The prop is private

    **Answer:** a) The prop is optional