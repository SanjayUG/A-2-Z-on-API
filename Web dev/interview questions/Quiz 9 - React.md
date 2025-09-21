# Quiz 9 - React Hooks

1.  How would you prevent setting state inside `useEffect` after a component has unmounted to avoid memory leaks in asynchronous operations?
    *   A) `Use a cleanup function with a mounted flag or AbortController to cancel async calls`
    *   B) `Put state updates inside useMemo`
    *   C) `Use useRef to hold state`
    *   D) `Avoid async operations inside useEffect altogether`

Answer:
```
Use a cleanup function with a mounted flag or AbortController to cancel async calls
```

---

2.  What arguments does `useMemo` take?
    *   A) `A callback function and a dependency array`
    *   B) `Only a callback function`
    *   C) `Only a dependency array`
    *   D) `Event handlers and dependencies`

Answer:
```
A callback function and a dependency array
```

---

3.  What are potential pitfalls when overusing `useMemo` in React components?
    *   A) `Unnecessary complexity and memory overhead without noticeable performance gains`
    *   B) `Blocking the component from rendering`
    *   C) `Causing component unmount errors`
    *   D) `Preventing useEffect from running`

Answer:
```
Unnecessary complexity and memory overhead without noticeable performance gains
```

---

4.  When does `useMemo` recompute its memoized value?
    *   A) `Every render regardless of dependencies`
    *   B) `Only when one of the dependencies changes`
    *   C) `Never`
    *   D) `On component unmount`

Answer:
```
Only when one of the dependencies changes
```

---

5.  What is the purpose of the `useMemo` hook?
    *   A) `To memoize the result of a calculation to optimize performance`
    *   B) `To fetch data from an API`
    *   C) `To manage state inside a component`
    *   D) `To handle events`

Answer:
```
To memoize the result of a calculation to optimize performance
```

---

6.  What does the `useRef` hook return?
    *   A) `A mutable object with a .current property that persists across renders`
    *   B) `A new stateful value`
    *   C) `A memoized function`
    *   D) `A string`

Answer:
```
A mutable object with a .current property that persists across renders
```

---

7.  What issues might arise if you omit dependency array or specify dependencies incorrectly in `useEffect`?
    *   A) `Infinite loops or stale closures causing bugs`
    *   B) `The component will not mount`
    *   C) `The component will render only once`
    *   D) `There will be no effect of the hook`

Answer:
```
Infinite loops or stale closures causing bugs
```

---

8.  If a `useEffect` has a cleanup function, when is this cleanup function executed?
    *   A) `Immediately after the effect runs`
    *   B) `Before the next effect runs or when the component unmounts`
    *   C) `Only on the first render`
    *   D) `Never`

Answer:
```
Before the next effect runs or when the component unmounts
```

---

9.  Which of the following is a common use case of `useEffect`?
    *   A) `Fetching data from an API after the component mounts`
    *   B) `Declaring local state variables`
    *   C) `Creating constants inside components`
    *   D) `Styling JSX elements`

Answer:
```
Fetching data from an API after the component mounts
```

---

10. What is the main purpose of `forwardRef` in React?
    *   A) `To forward a ref through a component to a child component or DOM element`
    *   B) `To memoize a component`
    *   C) `To manage component state`
    *   D) `To perform side effects`

Answer:
```
To forward a ref through a component to a child component or DOM element
```

---

11. What could happen if you omit the dependency array from `useMemo`?
    *   A) `The memoized value is recomputed on every render, losing optimization benefits`
    *   B) `The component crashes`
    *   C) `The component never rerenders`
    *   D) `The memoized value is cached forever without updates`

Answer:
```
The memoized value is recomputed on every render, losing optimization benefits
```

---

12. When does the effect function inside `useEffect` run if no dependency array is provided?
    *   A) `Only once after the initial render`
    *   B) `After every render`
    *   C) `Only when a specific prop changes`
    *   D) `Only when the component unmounts`

Answer:
```
After every render
```

---

13. Which of the following is a benefit of using `useMemo`?
    *   A) `Prevents expensive computations on every render`
    *   B) `Automatically updates state values`
    *   C) `Runs an effect after render`
    *   D) `Triggers re-rendering automatically`

Answer:
```
Prevents expensive computations on every render
```

---

14. How is `useRef` commonly used in React components?
    *   A) `To store a reference to a DOM element or a mutable value that does not cause re-render on change`
    *   B) `To trigger re-renders`
    *   C) `To fetch API data`
    *   D) `To compute derived data`

Answer:
```
To store a reference to a DOM element or a mutable value that does not cause re-render on change
```

---

15. How can you access a DOM node of a child functional component using refs?
    *   A) `Wrap the child component with forwardRef and pass the ref from the parent`
    *   B) `Use useState in the parent`
    *   C) `Pass ref as a prop without forwardRef`
    *   D) `It’s not possible to access DOM nodes of functional components`

Answer:
```
Wrap the child component with forwardRef and pass the ref from the parent
```

---

16. Which of the following best describes the primary purpose of a custom hook in React?
    *   A) `To encapsulate reusable logic and stateful behavior that can be shared across components`
    *   B) `To replace React context entirely`
    *   C) `To optimize rendering performance by memoizing components`
    *   D) `To handle routing inside functional components`

Answer:
```
To encapsulate reusable logic and stateful behavior that can be shared across components
```

---

17. How often will the effect run if you pass an empty dependency array `[]` to `useEffect`?
    *   A) `Every render`
    *   B) `Once after the initial render only`
    *   C) `Never`
    *   D) `Only when component unmounts`

Answer:
```
Once after the initial render only
```

---

18. What happens if you include a state variable in the dependency array of `useEffect`?
    *   A) `The effect runs after the initial render and whenever that state changes`
    *   B) `The effect never runs`
    *   C) `The state variable is reset`
    *   D) `The component does not render`

Answer:
```
The effect runs after the initial render and whenever that state changes
```

---

19. What is the purpose of the dependency array as the second argument in `useEffect`?
    *   A) `To specify when the effect should rerun based on changes in dependencies`
    *   B) `To set initial state values`
    *   C) `To memoize a function`
    *   D) `To prevent component rendering`

Answer:
```
To specify when the effect should rerun based on changes in dependencies
```

---

20. What problem does `forwardRef` solve in React component composition?
    *   A) `It allows parent components to directly access child component's DOM nodes or instance methods`
    *   B) `It automatically renders child components`
    *   C) `It prevents unnecessary re-renders`
    *   D) `It manages component state more efficiently`

Answer:
```
It allows parent components to directly access child component's DOM nodes or instance methods
```

---

21. How do you define a React component that supports forwarding refs?
    *   A) `Wrap it with React.forwardRef and accept ref as the second argument`
    *   B) `Use useEffect inside it`
    *   C) `Use useMemo to forward refs`
    *   D) `None of the above`

Answer:
```
Wrap it with React.forwardRef and accept ref as the second argument
```

---

22. What kind of function can you optionally return from a `useEffect` callback?
    *   A) `An event handler`
    *   B) `A cleanup function that runs before the next effect or when the component unmounts`
    *   C) `An updater function for state`
    *   D) `A function to update props`

Answer:
```
A cleanup function that runs before the next effect or when the component unmounts
```

---

23. What does the `useEffect` hook primarily allow you to do in React function components?
    *   A) `Handle state initialization`
    *   B) `Perform side effects like data fetching or DOM manipulation`
    *   C) `Define component styles`
    *   D) `Manage routing`

Answer:
```
Perform side effects like data fetching or DOM manipulation
```

---

24. In which scenario is `useMemo` particularly helpful?
    *   A) `When you have a costly computation that depends on certain inputs and should be recalculated only when those inputs change`
    *   B) `When you want to perform side effects after render`
    *   C) `When you want to update the DOM directly`
    *   D) `When managing event listeners`

Answer:
```
When you have a costly computation that depends on certain inputs and should be recalculated only when those inputs change
```

---

25. What is a key rule you must follow when creating a custom hook in React?
    *   A) `It should be a class component`
    *   B) `Its name must start with use to allow React to recognize it as a hook`
    *   C) `It cannot use built-in hooks like useState or useEffect inside it`
    *   D) `It should always return JSX elements`

Answer:
```
Its name must start with use to allow React to recognize it as a hook
```