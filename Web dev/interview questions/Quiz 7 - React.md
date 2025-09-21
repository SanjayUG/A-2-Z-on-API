# Quiz 7: Context API, Local Storage & Session Storage

1.  How does Context differ from props in data transmission?
    *   A) `Context sends data top-down, while props are bottom-up`
    *   B) `Props work with hooks, context doesn’t`
    *   C) `Context allows avoiding prop drilling`
    *   D) `Props are only for classes`

Answer:
```
Context allows avoiding prop drilling
```

---

2.  If you open the same website in two tabs, what will be the value of a key stored in `sessionStorage`?
    *   A) `Shared across both tabs`
    *   B) `Available only in the tab where it was set`
    *   C) `Automatically synced between tabs`
    *   D) `Stored in cookies`

Answer:
```
Available only in the tab where it was set
```

---

3.  What happens if a component uses a context without a matching provider?
    *   A) `Error will be thrown`
    *   B) `It will use the default context value`
    *   C) `It will crash the app`
    *   D) `It will return undefined`

Answer:
```
It will use the default context value
```

---

4.  Where is the best place to define the `createContext()` in an app?
    *   A) `Inside every component`
    *   B) `Inside the component that consumes it`
    *   C) `In a separate file and export it`
    *   D) `In App.js only`

Answer:
```
In a separate file and export it
```

---

5.  What type of prop is passed to `<Context.Provider>`?
    *   A) `JSX elements`
    *   B) `Boolean only`
    *   C) `Any data (object, array, string, etc.)`
    *   D) `Only numbers`

Answer:
```
Any data (object, array, string, etc.)
```

---

6.  Which of the following can access the value from a context?
    *   A) `Only the provider`
    *   B) `Only class components`
    *   C) `Any component wrapped in the provider`
    *   D) `Only sibling components`

Answer:
```
Any component wrapped in the provider
```

---

7.  Which of the following correctly stores and retrieves an object in `sessionStorage`?
    *   A) `sessionStorage.setItem("user", {name:"Tom"}); let user = sessionStorage.getItem("user");`
    *   B) `sessionStorage.user = {name:"Tom"}; let user = sessionStorage.user;`
    *   C) `sessionStorage.setItem("user", JSON.stringify({name:"Tom"})); let user = JSON.parse(sessionStorage.getItem("user"));`
    *   D) `sessionStorage.set("user", JSON.stringify({name:"Tom"})); let user = JSON.get(sessionStorage["user"]);`

Answer:
```javascript
sessionStorage.setItem("user", JSON.stringify({name:"Tom"})); let user = JSON.parse(sessionStorage.getItem("user"));
```

---

8.  Which of the following statements is true about multiple contexts in a component?
    *   A) `Only one context can be used per component`
    *   B) `You must use nested consumers`
    *   C) `You can use multiple useContext() calls for different contexts`
    *   D) `You must use Redux for multiple contexts`

Answer:
```
You can use multiple useContext() calls for different contexts
```

---

9.  Which of the following best explains prop drilling?
    *   A) `Passing props only once at the top level`
    *   B) `Passing data directly to deeply nested components via context`
    *   C) `Passing data through every intermediate component unnecessarily`
    *   D) `Using hooks instead of props`

Answer:
```
Passing data through every intermediate component unnecessarily
```

---

10. How can you store an object in `localStorage` properly?
    *   A) `localStorage.setItem("obj", {a:1})`
    *   B) `localStorage.setItem("obj", JSON.stringify({a:1}))`
    *   C) `localStorage.store("obj", {a:1})`
    *   D) `localStorage.push("obj", {a:1})`

Answer:
```javascript
localStorage.setItem("obj", JSON.stringify({a:1}))
```

---

11. What prop is required by `<Context.Provider>`?
    *   A) `context`
    *   B) `value`
    *   C) `state`
    *   D) `children`

Answer:
```
value
```

---

12. Which React hook is used to consume a context inside a functional component?
    *   A) `useState()`
    *   B) `useReducer()`
    *   C) `useContext()`
    *   D) `useEffect()`

Answer:
```
useContext()
```

---

13. What do you wrap around a component tree to provide a context?
    *   A) `<Context.Provider>`
    *   B) `<Context.Consumer>`
    *   C) `<Context>`
    *   D) `<Context.Use>`

Answer:
```html
<Context.Provider>
```

---

14. What method is used to remove all items from `sessionStorage`?
    *   A) `sessionStorage.empty()`
    *   B) `sessionStorage.deleteAll()`
    *   C) `sessionStorage.clear()`
    *   D) `sessionStorage.removeAll()`

Answer:
```javascript
sessionStorage.clear()
```

---

15. What is the main purpose of the React Context API?
    *   A) `Manage routing`
    *   B) `Manage global state`
    *   C) `Perform animations`
    *   D) `Handle form validation`

Answer:
```
Manage global state
```

---

16. What is the main difference between `localStorage` and `sessionStorage`?
    *   A) `sessionStorage stores data permanently`
    *   B) `sessionStorage shares data across tabs`
    *   C) `sessionStorage clears data when the tab is closed`
    *   D) `sessionStorage stores only numbers`

Answer:
```
sessionStorage clears data when the tab is closed
```

---

17. Can React Context API replace Redux for all state management?
    *   A) `Yes, always`
    *   B) `No, never`
    *   C) `It depends on the complexity of the app`
    *   D) `Only for class components`

Answer:
```
It depends on the complexity of the app
```

---

18. How do you retrieve a value from `sessionStorage`?
    *   A) `sessionStorage.get("key")`
    *   B) `sessionStorage.read("key")`
    *   C) `sessionStorage.fetch("key")`
    *   D) `sessionStorage.getItem("key")`

Answer:
```javascript
sessionStorage.getItem("key")
```

---

19. Which of the following will remove a specific item from `localStorage`?
    *   A) `localStorage.clearItem("key")`
    *   B) `localStorage.remove("key")`
    *   C) `localStorage.removeItem("key")`
    *   D) `localStorage.delete("key")`

Answer:
```javascript
localStorage.removeItem("key")
```

---

20. What happens if you try to store too much data in `localStorage`?
    *   A) `Browser automatically increases the limit`
    *   B) `Older items are automatically removed`
    *   C) `QuotaExceededError is thrown`
    *   D) `It silently fails and stores nothing`

Answer:
```
QuotaExceededError is thrown
```

---

21. What method is used to store data in `localStorage`?
    *   A) `storeItem()`
    *   B) `saveData()`
    *   C) `localStorage.save()`
    *   D) `localStorage.setItem()`

Answer:
```javascript
localStorage.setItem()
```

---

22. What is a common performance issue with React Context and how can it be optimized?
    *   A) `Components using context are never updated`
    *   B) `All consumers re-render on context change, use memoization or split contexts`
    *   C) `Context prevents useEffect from running`
    *   D) `Context causes memory leaks in large apps`

Answer:
```
All consumers re-render on context change, use memoization or split contexts
```

---

23. Which method is used to create a context?
    *   A) `createState()`
    *   B) `createContext()`
    *   C) `new Context()`
    *   D) `useContext()`

Answer:
```
createContext()
```

---

24. What is the default data type stored in `localStorage`?
    *   A) `Number`
    *   B) `Object`
    *   C) `String`
    *   D) `Boolean`

Answer:
```
String
```

---

25. When should you not use Context API in React?
    *   A) `When you need global styling`
    *   B) `When shared state changes frequently and impacts performance`
    *   C) `When state needs to be passed to sibling components`
    *   D) `When creating a theme toggler`

Answer:
```
When shared state changes frequently and impacts performance
```