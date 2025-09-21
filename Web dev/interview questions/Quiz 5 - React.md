# Quiz 5 - React

1.  Which static lifecycle method is used to synchronize state with props when a component receives new props?
    *   getSnapshotBeforeUpdate
    *   getDerivedStateFromProps
    *   componentDidUpdate
    *   componentWillUnmount

    **Answer:** getDerivedStateFromProps

---

2.  Which method is called just before the DOM is updated?
    *   getSnapshotBeforeUpdate
    *   componentWillUnmount
    *   componentDidMount
    *   render

    **Answer:** getSnapshotBeforeUpdate

---

3.  What happens if `shouldComponentUpdate` returns `false` after a props change?
    *   The component continues updating
    *   The component will still re-render
    *   The component does not re-render or call `componentDidUpdate`
    *   The component unmounts

    **Answer:** The component does not re-render or call `componentDidUpdate`

---

4.  What is the correct order of lifecycle methods when a component is mounted?
    *   `render` → `constructor` → `componentDidMount`
    *   `constructor` → `render` → `componentDidMount`
    *   `componentDidMount` → `render` → `constructor`
    *   `constructor` → `componentDidMount` → `render`

    **Answer:** `constructor` → `render` → `componentDidMount`

---

5.  In what scenario could `getDerivedStateFromProps` lead to redundant or stale state, and how would you avoid it?
    *   When directly copying props to state; avoid by only updating state if props and state differ.
    *   When updating state every render; avoid by unmounting component.
    *   When using `componentWillUnmount`; avoid by using `getSnapshotBeforeUpdate`.
    *   When not binding methods; avoid by binding in `constructor`.

    **Answer:** When directly copying props to state; avoid by only updating state if props and state differ.

---

6.  Which method is suitable for fetching API data after initial render?
    *   `componentWillUnmount`
    *   `componentDidUpdate`
    *   `componentDidMount`
    *   `shouldComponentUpdate`

    **Answer:** `componentDidMount`

---

7.  Which method cannot access `this.props` or `this.state`?
    *   `render`
    *   `getDerivedStateFromProps`
    *   `componentDidUpdate`
    *   `componentWillUnmount`

    **Answer:** `getDerivedStateFromProps`

---

8.  What argument does `componentDidUpdate` NOT receive?
    *   `prevProps`
    *   `prevState`
    *   `snapshot`
    *   `nextProps`

    **Answer:** `nextProps`

---

9.  Which lifecycle method allows you to read the DOM before changes are committed?
    *   `getSnapshotBeforeUpdate`
    *   `getDerivedStateFromProps`
    *   `render`
    *   `shouldComponentUpdate`

    **Answer:** `getSnapshotBeforeUpdate`

---

10. Which method is deprecated and should not be used in modern React code (post v16.3)?
    *   `componentWillMount`
    *   `componentDidMount`
    *   `componentDidUpdate`
    *   `constructor`

    **Answer:** `componentWillMount`

---

11. Which of the following lifecycle methods is invoked when an error is thrown in a descendant component?
    *   `componentDidMount`
    *   `componentDidCatch`
    *   `getDerivedStateFromError`
    *   Both b and c

    **Answer:** Both b and c

---

12. Which of the following methods is required in every class-based React component?
    *   `componentDidMount`
    *   `constructor`
    *   `render`
    *   `componentWillUnmount`

    **Answer:** `render`

---

13. A component fetches remote data upon mounting and receives new props affecting its data source. Describe a robust pattern for handling both initial and subsequent fetches while preventing memory leaks.
    *   Use `componentDidMount` for initial fetch, `componentDidUpdate` for prop changes, handle cleanup in `componentWillUnmount`, and use a flag or `AbortController` to prevent setting state after unmounting.
    *   Use `getDerivedStateFromProps` for all fetching.
    *   Dispatch fetch in `constructor`, handle abort in `render`.
    *   Use only `componentWillUnmount`.

    **Answer:** Use `componentDidMount` for initial fetch, `componentDidUpdate` for prop changes, handle cleanup in `componentWillUnmount`, and use a flag or `AbortController` to prevent setting state after unmounting.

---

14. Which lifecycle method is called immediately after a component is mounted?
    *   `componentWillUnmount`
    *   `componentDidMount`
    *   `componentDidUpdate`
    *   `render`

    **Answer:** `componentDidMount`

---

15. Which method is called after every render when the component's props or state change?
    *   `componentWillUnmount`
    *   `componentDidUpdate`
    *   `getDerivedStateFromProps`
    *   `constructor`

    **Answer:** `componentDidUpdate`

---

16. If you want to store the previous value of a prop before it changes, which pair of methods could you use?
    *   `constructor` and `render`
    *   `getDerivedStateFromProps` and `componentWillUnmount`
    *   `getSnapshotBeforeUpdate` and `componentDidUpdate`
    *   `shouldComponentUpdate` and `render`

    **Answer:** `getSnapshotBeforeUpdate` and `componentDidUpdate`

---

17. What is called first, `constructor` or `render`?
    *   `render`
    *   `constructor`
    *   `componentDidMount`
    *   `componentWillUnmount`

    **Answer:** `constructor`

---

18. Which method is invoked before the component is removed from the DOM?
    *   `getDerivedStateFromProps`
    *   `componentWillUnmount`
    *   `shouldComponentUpdate`
    *   `componentDidUpdate`

    **Answer:** `componentWillUnmount`

---

19. What does the `shouldComponentUpdate` method return?
    *   String
    *   Boolean
    *   Number
    *   Object

    **Answer:** Boolean

---

20. Which method is used to perform clean-up in a React class component?
    *   `componentDidMount`
    *   `componentWillUnmount`
    *   `shouldComponentUpdate`
    *   `getDerivedStateFromProps`

    **Answer:** `componentWillUnmount`

---

21. Which method can be static in a class component?
    *   `getDerivedStateFromProps`
    *   `componentWillUnmount`
    *   `shouldComponentUpdate`
    *   `render`

    **Answer:** `getDerivedStateFromProps`

---

22. Which method can cause an infinite loop if `setState` is called inside it without a condition?
    *   `componentWillUnmount`
    *   `componentDidUpdate`
    *   `render`
    *   `constructor`

    **Answer:** `componentDidUpdate`

---

23. What will cause `render` to be called again?
    *   Only state change
    *   Only props change
    *   Either state or props change
    *   Only `constructor` is called

    **Answer:** Either state or props change

---

24. Where should you bind class methods if needed?
    *   `render` method
    *   `componentWillUnmount`
    *   `constructor`
    *   `componentDidUpdate`

    **Answer:** `constructor`

---

25. Which lifecycle method is best for initiating animations after a DOM update?
    *   `componentDidMount`
    *   `getDerivedStateFromProps`
    *   `componentDidUpdate`
    *   `constructor`

    **Answer:** `componentDidUpdate`