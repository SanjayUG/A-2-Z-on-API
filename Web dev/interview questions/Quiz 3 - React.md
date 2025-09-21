
# Quiz 3 - React

1.  What is the correct command to create a new React app using Create React App (CRA)?
    *   `npx create-react my-app`
    *   `npm install react-app my-app`
    *   `npx create-react-app my-app`
    *   `npm create react-app my-app`

Answer:
```
npx create-react-app my-app
```

---

2.  Which command installs all project dependencies defined in package.json?
    *   `npm build`
    *   `npm run install`
    *   `npm update`
    *   `npm install`

Answer:
```
npm install
```

---

3.  How do you manage state in a functional component?
    *   `this.state = {}`
    *   `this.setState()`
    *   `useState() hook`
    *   `useEffect() hook`

Answer:
```
useState() hook
```

---

4.  Which of the following is true about props in React?
    *   `Props can be changed inside the child component`
    *   `Props are immutable within the receiving component`
    *   `Props are used to store local state`
    *   `Props must be defined in package.json`

Answer:
```
Props are immutable within the receiving component
```

---

5.  What is the primary purpose of useState in React functional components?
    *   `To define global variables in the application`
    *   `To manage and preserve local state in a functional component`
    *   `To fetch data from an API`
    *   `To navigate between routes`

Answer:
```
To manage and preserve local state in a functional component
```

---

6.  How do you handle a click event in a React functional component?
    *   `<button onClick="handleClick()">Click Me</button>`
    *   `<button click={handleClick}>Click Me</button>`
    *   `<button onClick={handleClick}>Click Me</button>`
    *   `<button onclick={handleClick}>Click Me</button>`

Answer:
```html
<button onClick={handleClick}>Click Me</button>
```

---

7.  What are props in React?
    *   `Built-in state management functions`
    *   `Functions used to change state`
    *   `Read-only inputs passed to components`
    *   `CSS styling rules in components`

Answer:
```
Read-only inputs passed to components
```

---

8.  Which of the following is valid JSX syntax for rendering a component with a prop?
    *   `<MyComponent name="John" />`
    *   `<MyComponent name='John'>`
    *   `<MyComponent name=John />`
    *   `MyComponent(name="John")`

Answer:
```html
<MyComponent name="John" />
```

---

9.  What is the primary difference between state and props in React?
    *   `State is immutable; props are mutable`
    *   `Props are used for dynamic data; state is used for static data`
    *   `Props are passed to components; state is managed within the component`
    *   `State and props are the same`

Answer:
```
Props are passed to components; state is managed within the component
```

---

10. How do you update state in a functional component?
    *   `this.setState()`
    *   `useState returns a setter function`
    *   `setState({})`
    *   `setProps({})`

Answer:
```
useState returns a setter function
```

---

11. What does the `event.preventDefault()` method do in a React event handler?
    *   `Stops the event from reaching the DOM`
    *   `Prevents the component from rendering`
    *   `Prevents the default browser behavior for the event`
    *   `Cancels the JavaScript function execution`

Answer:
```javascript
event.preventDefault()
```

---

12. Which of the following best describes React’s event system?
    *   `React attaches event listeners directly to every DOM node`
    *   `React uses inline JavaScript to handle all events`
    -   `React uses a synthetic event system for consistency across browsers`
    *   `React does not support browser events`

Answer:
```
React uses a synthetic event system for consistency across browsers
```

---

13. What is required at the top of a JSX file to use JSX syntax in a modern React app (v17+)?
    *   `import React from 'react'`
    *   `import { JSX } from 'react'`
    *   `import ReactDOM from 'react-dom'`
    *   `Nothing is required`

Answer:
```
Nothing is required
```

---

14. Which hook in functional components replaces the use of multiple lifecycle methods from class components?
    *   `useState()`
    *   `useRef()`
    *   `useEffect()`
    *   `useContext()`

Answer:
```
useEffect()
```

---

15. What happens when a component’s state is updated using setState or a hook’s setter function?
    *   `Nothing happens`
    *   `The component re-renders`
    *   `The component is destroyed and recreated`
    *   `Only child components re-render`

Answer:
```
The component re-renders
```

---

16. What happens when you update the state using the setter function (e.g., setCount) returned by useState?
    *   `The entire page is reloaded`
    *   `Only the updated variable is logged in console`
    *   `The component is re-rendered with the updated state`
    *   `The component is destroyed and rebuilt from scratch`

Answer:
```
The component is re-rendered with the updated state
```

---

17. How do you pass a name prop with value "John" to a User component?
    *   `<User.name="John" />`
    *   `<User prop="John" />`
    *   `<User name="John" />`
    *   `<User:name="John" />`

Answer:
```html
<User name="John" />
```

---

18. How do you update state in a class component?
    *   `this.setState()`
    *   `this.state = {}`
    *   `useState()`
    *   `updateState()`

Answer:
```
this.setState()
```

---

19. Which lifecycle method is used in a class component to perform an action after the component mounts?
    *   `componentDidUpdate()`
    *   `componentWillMount()`
    *   `componentDidMount()`
    *   `useEffect()`

Answer:
```
componentDidMount()
```

---

20. What is the purpose of the `package.json` file in a React (Node.js) project?
    *   `It stores only frontend component details`
    *   `It compiles JSX to JavaScript`
    *   `It manages dependencies, scripts, and project metadata`
    *   `It defines HTML templates`

Answer:
```
It manages dependencies, scripts, and project metadata
```

---

21. Which of the following is not true about functional components?
    *   `They can use hooks to manage state`
    *   `They are generally easier to read and test`
    *   `They do not support lifecycle methods`
    *   `They can be defined using arrow functions`

Answer:
```
They do not support lifecycle methods
```

---

22. Which keyword is used to define state in a class component?
    *   `let`
    *   `state`
    *   `this.state`
    *   `useState`

Answer:
```
this.state
```

---

23. Which of the following is true about `propTypes` in React?
    *   `It sets default values for props`
    *   `It validates the type of props passed to a component`
    *   `It handles internal component state`
    *   `It renders child components conditionally`

Answer:
```
It validates the type of props passed to a component
```

---

24. How do you pass a prop named `title` with the value "Welcome" to a component?
    *   `<MyComponent title="Welcome" />`
    *   `<MyComponent prop="title:Welcome" />`
    *   `<MyComponent>Welcome</MyComponent>`
    *   `<MyComponent title={Welcome} />`

Answer:
```html
<MyComponent title="Welcome" />
```

---

25. In React synthetic events, how do you access the value of a text input on change?
    *   `event.value`
    *   `event.target.value`
    *   `event.text`
    *   `event.input.value`

Answer:
```javascript
event.target.value
```
