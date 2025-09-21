# Quiz 4 - React

1.  What will the following code render? `{['A', 'B', 'C'].map(item => { item })}`
    *   A syntax error
    *   A list of letters wrapped in
    *   Only the last letter C
    *   Nothing

    **Answer:** Nothing

---

2.  How can you prevent a form from submitting in React?
    *   event.cancel()
    *   event.prevent()
    *   event.stop()
    *   event.preventDefault()

    **Answer:** event.preventDefault()

---

3.  What happens if a component returns null in its render method?
    *   It throws an error
    *   Nothing is rendered on the screen
    *   It renders a blank div
    *   It renders null as text

    **Answer:** Nothing is rendered on the screen

---

4.  Which of the following is NOT a valid mouse event in React?
    *   onMouseEnter
    *   onMouseLeave
    *   onMouseOut
    *   onMouseDrag

    **Answer:** onMouseDrag

---

5.  Which of the following is a valid inline event handler in JSX?
    *   `<button onClick={function() { alert('Hi') }}>Click</button>`
    *   `<button onClick='alert("Hi")'>Click</button>`
    *   `<button onClick=alert("Hi")>Click</button>`
    *   `<button click={alert("Hi")}>Click</button>`

    **Answer:** `<button onClick={function() { alert('Hi') }}>Click</button>`

---

6.  Enter Your Email:

    **Answer:** [No answer expected]

---

7.  How do you access the event object in a React event handler?
    *   It's not accessible
    *   Through this.event
    *   It is passed as an argument to the event handler
    *   Use window.event

    **Answer:** It is passed as an argument to the event handler

---

8.  What is the issue with reusing the same key for multiple elements in a list?
    *   React duplicates the items
    *   React ignores the list
    *   It causes performance issues and incorrect re-renders
    *   Nothing happens

    **Answer:** It causes performance issues and incorrect re-renders

---

9.  Enter Your Name:

    **Answer:** [No answer expected]

---

10. What happens if you try to access `event.target` in an asynchronous callback in React without persisting the event?
    *   It throws a runtime error
    *   It works without any issues
    *   It logs undefined
    *   It may log unexpected values due to event pooling

    **Answer:** It may log unexpected values due to event pooling

---

11. What is the correct way to use a ternary operator for conditional rendering in JSX?
    *   `{ condition : <A /> ? <B /> }`
    *   `{ condition ? <A /> : <B /> }`
    *   `{ if(condition) <A /> else <B /> }`
    *   `{ <A /> ? condition : <B /> }`

    **Answer:** `{ condition ? <A /> : <B /> }`

---

12. Which of the following is a bad practice when assigning keys?
    *   Using a unique ID from data
    *   Using the index of the array as a key
    *   Using a stringified object
    *   Both B and C

    **Answer:** Both B and C

---

13. You want to render a `Welcome` component only when a user is logged in. What is the most concise and readable way to do it in JSX?
    *   `{isLoggedIn ? <Welcome /> : ""}`
    *   `{isLoggedIn && <Welcome />}`
    *   `{if(isLoggedIn) <Welcome />}`
    *   `{isLoggedIn || <Welcome />}`

    **Answer:** `{isLoggedIn && <Welcome />}`

---

14. Which is the correct way to detect if the Enter key was pressed in an input field? `<input onKeyDown={handleKeyDown} />` What should `handleKeyDown` include?
    *   `if (event.key === 'Enter') { ... }`
    *   `if (event.keyCode === 13) { ... }`
    *   `if (event.code === 'Enter') { ... }`
    *   All of the above

    **Answer:** All of the above

---

15. Which JavaScript function is commonly used to render lists in React?
    *   forEach()
    *   filter()
    *   map()
    *   reduce()

    **Answer:** map()

---

16. What is React’s `SyntheticEvent`?
    *   A wrapper around the native event to normalize across browsers
    *   A third-party event library
    *   An outdated way to handle events
    *   A native browser event renamed by React

    **Answer:** A wrapper around the native event to normalize across browsers

---

17. What happens if you forget to include a key in a list?
    *   React throws a compile-time error
    *   The app will crash
    *   React shows a warning in the console
    *   The component won’t render

    **Answer:** React shows a warning in the console

---

18. What must be true about keys used in lists?
    *   They must be numbers
    *   They should be unique among siblings
    *   They should be class names
    *   They must come from an API

    **Answer:** They should be unique among siblings

---

19. Where should you place the `key` prop?
    *   On the tag
    *   On the wrapping `<div>`
    *   On the element returned by `map()`
    *   Anywhere inside JSX

    **Answer:** On the element returned by `map()`

---

20. Can you directly use if-else statements inside JSX?
    *   Yes, always
    *   No, JSX only allows expressions
    *   Only in class components
    *   Only in arrow functions

    **Answer:** No, JSX only allows expressions

---

21. Which line properly assigns a key when rendering a `User` component?
    *   `<User key={user.id} data={user} />`
    *   `<User data={user} />`
    *   `<User key={index} />`
    *   `<User id={user.id} />`

    **Answer:** `<User key={user.id} data={user} />`

---

22. How can you pass a custom value to an event handler in React?
    *   `<button onClick={handleClick(value)}>Click</button>`
    *   `<button onClick={handleClick => value}>Click</button>`
    *   `<button onClick={() => handleClick(value)}>Click</button>`
    *   `<button onClick={() => value(handleClick)}>Click</button>`

    **Answer:** `<button onClick={() => handleClick(value)}>Click</button>`

---

23. If you render a list inside another list, what should you ensure about keys?
    *   Only the outer list should have keys
    *   Keys are not needed in nested lists
    *   Each item in both inner and outer lists must have unique keys within their respective levels
    *   Use the same key in both lists

    **Answer:** Each item in both inner and outer lists must have unique keys within their respective levels

---

24. Why are keys used when rendering lists in React?
    *   To improve styling
    *   To enable routing
    *   To help React identify which items changed, added, or removed
    *   To avoid using `map()`

    **Answer:** To help React identify which items changed, added, or removed

---

25. What is the correct way to handle a click event in React?
    *   `<button onclick="handleClick()">Click</button>`
    *   `<button onclick={handleClick}>Click</button>`
    *   `<button onClick={handleClick}>Click</button>`
    *   `<button click={handleClick}>Click</button>`

    **Answer:** `<button onClick={handleClick}>Click</button>`

---

26. Which operator is commonly used for conditional rendering in React JSX?
    *   `&&`
    *   `||`
    *   `==`
    *   `===`

    **Answer:** `&&`

---

27. Which event is triggered when a user types in an `<input>` field?
    *   onClick
    *   onInput
    *   onSubmit
    *   onChange

    **Answer:** onChange