# Quiz 7: Context API, Local Storage & Session Storage

1.  How does Context differ from props in data transmission?
    *   A) Context sends data top-down, while props are bottom-up
    *   B) Props work with hooks, context doesn’t
    *   C) Context allows avoiding prop drilling
    *   D) Props are only for classes

    **Answer:** C

---

2.  If you open the same website in two tabs, what will be the value of a key stored in `sessionStorage`?
    *   A) Shared across both tabs
    *   B) Available only in the tab where it was set
    *   C) Automatically synced between tabs
    *   D) Stored in cookies

    **Answer:** B

---

3.  What happens if a component uses a context without a matching provider?
    *   A) Error will be thrown
    *   B) It will use the default context value
    *   C) It will crash the app
    *   D) It will return `undefined`

    **Answer:** B

---

4.  Where is the best place to define the `createContext()` in an app?
    *   A) Inside every component
    *   B) Inside the component that consumes it
    *   C) In a separate file and export it
    *   D) In `App.js` only

    **Answer:** C

---

5.  What type of prop is passed to `<Context.Provider>`?
    *   A) JSX elements
    *   B) Boolean only
    *   C) Any data (object, array, string, etc.)
    *   D) Only numbers

    **Answer:** C

---

6.  Which of the following can access the value from a context?
    *   A) Only the provider
    *   B) Only class components
    *   C) Any component wrapped in the provider
    *   D) Only sibling components

    **Answer:** C

---

7.  Email

    **Answer:** (Skip - No answer required)

---

8.  Which of the following correctly stores and retrieves an object in `sessionStorage`?
    *   A) `sessionStorage.setItem("user", {name:"Tom"}); let user = sessionStorage.getItem("user");`
    *   B) `sessionStorage.user = {name:"Tom"}; let user = sessionStorage.user;`
    *   C) `sessionStorage.setItem("user", JSON.stringify({name:"Tom"})); let user = JSON.parse(sessionStorage.getItem("user"));`
    *   D) `sessionStorage.set("user", JSON.stringify({name:"Tom"})); let user = JSON.get(sessionStorage["user"]);`

    **Answer:** C

---

9.  Which of the following statements is true about multiple contexts in a component?
    *   A) Only one context can be used per component
    *   B) You must use nested consumers
    *   C) You can use multiple `useContext()` calls for different contexts
    *   D) You must use Redux for multiple contexts

    **Answer:** C

---

10. Which of the following best explains prop drilling?
    *   A) Passing props only once at the top level
    *   B) Passing data directly to deeply nested components via context
    *   C) Passing data through every intermediate component unnecessarily
    *   D) Using hooks instead of props

    **Answer:** C

---

11. How can you store an object in `localStorage` properly?
    *   A) `localStorage.setItem("obj", {a:1})`
    *   B) `localStorage.setItem("obj", JSON.stringify({a:1}))`
    *   C) `localStorage.store("obj", {a:1})`
    *   D) `localStorage.push("obj", {a:1})`

    **Answer:** B

---

12. What prop is required by `<Context.Provider>`?
    *   A) `context`
    *   B) `value`
    *   C) `state`
    *   D) `children`

    **Answer:** B

---

13. Which React hook is used to consume a context inside a functional component?
    *   A) `useState()`
    *   B) `useReducer()`
    *   C) `useContext()`
    *   D) `useEffect()`

    **Answer:** C

---

14. What do you wrap around a component tree to provide a context?
    *   A) `<Context.Provider>`
    *   B) `<Context.Consumer>`
    *   C) `<Context>`
    *   D) `<Context.Use>`

    **Answer:** A

---

15. What method is used to remove all items from `sessionStorage`?
    *   A) `sessionStorage.empty()`
    *   B) `sessionStorage.deleteAll()`
    *   C) `sessionStorage.clear()`
    *   D) `sessionStorage.removeAll()`

    **Answer:** C

---

16. What is the main purpose of the React Context API?
    *   A) Manage routing
    *   B) Manage global state
    *   C) Perform animations
    *   D) Handle form validation

    **Answer:** B

---

17. What is the main difference between `localStorage` and `sessionStorage`?
    *   A) `sessionStorage` stores data permanently
    *   B) `sessionStorage` shares data across tabs
    *   C) `sessionStorage` clears data when the tab is closed
    *   D) `sessionStorage` stores only numbers

    **Answer:** C

---

18. Can React Context API replace Redux for all state management?
    *   A) Yes, always
    *   B) No, never
    *   C) It depends on the complexity of the app
    *   D) Only for class components

    **Answer:** C

---

19. How do you retrieve a value from `sessionStorage`?
    *   A) `sessionStorage.get("key")`
    *   B) `sessionStorage.read("key")`
    *   C) `sessionStorage.fetch("key")`
    *   D) `sessionStorage.getItem("key")`

    **Answer:** D

---

20. Which of the following will remove a specific item from `localStorage`?
    *   A) `localStorage.clearItem("key")`
    *   B) `localStorage.remove("key")`
    *   C) `localStorage.removeItem("key")`
    *   D) `localStorage.delete("key")`

    **Answer:** C

---

21. What happens if you try to store too much data in `localStorage`?
    *   A) Browser automatically increases the limit
    *   B) Older items are automatically removed
    *   C) `QuotaExceededError` is thrown
    *   D) It silently fails and stores nothing

    **Answer:** C

---

22. What method is used to store data in `localStorage`?
    *   A) `storeItem()`
    *   B) `saveData()`
    *   C) `localStorage.save()`
    *   D) `localStorage.setItem()`

    **Answer:** D

---

23. What is a common performance issue with React Context and how can it be optimized?
    *   A) Components using context are never updated
    *   B) All consumers re-render on context change, use memoization or split contexts
    *   C) Context prevents `useEffect` from running
    *   D) Context causes memory leaks in large apps

    **Answer:** B

---

24. Which method is used to create a context?
    *   A) `createState()`
    *   B) `createContext()`
    *   C) `new Context()`
    *   D) `useContext()`

    **Answer:** B

---

25. Name

    **Answer:** (Skip - No answer required)

---

26. What is the default data type stored in `localStorage`?
    *   A) Number
    *   B) Object
    *   C) String
    *   D) Boolean

    **Answer:** C

---

27. When should you not use Context API in React?
    *   A) When you need global styling
    *   B) When shared state changes frequently and impacts performance
    *   C) When state needs to be passed to sibling components
    *   D) When creating a theme toggler

    **Answer:** B