# Quiz 8: React Router

1.  What is React Router primarily used for?
    *   A) Styling components
    *   B) Handling HTTP requests
    *   C) Managing navigation and routing in a React app
    *   D) Managing state in Redux

    **Answer:** C

---

2.  Which package needs to be installed to use React Router in a project?
    *   A) `react-navigation`
    *   B) `react-router-dom`
    *   C) `react-router-core`
    *   D) `react-dom-router`

    **Answer:** B

---

3.  Which component is used to define the routes in React Router v6?
    *   A) `<RouteList>`
    *   B) `<BrowserRouter>`
    *   C) `<Routes>`
    *   D) `<Navigation>`

    **Answer:** C

---

4.  What does `<Route path="/about" element={<About />} />` do?
    *   A) Redirects to the homepage
    *   B) Renders `<About />` when the path is `/about`
    *   C) Deletes the About page
    *   D) Adds a link to the About page

    **Answer:** B

---

5.  Which component should wrap the entire application to enable routing?
    *   A) `<Link>`
    *   B) `<Navigate>`
    *   C) `<RouterProvider>`
    *   D) `<BrowserRouter>`

    **Answer:** D

---

6.  Which component is used to navigate to another route without reloading the page?
    *   A) `<a href="/contact">`
    *   B) `<nav>`
    *   C) `<Link to="/contact">`
    *   D) `<Button>`

    **Answer:** C

---

7.  What is the main difference between `<Link>` and `<NavLink>`?
    *   A) `<NavLink>` can apply active styles
    *   B) `<Link>` allows animations
    *   C) `<NavLink>` is for external links only
    *   D) No difference

    **Answer:** A

---

8.  Which hook is used to programmatically navigate between routes?
    *   A) `useParams()`
    *   B) `useHistory()`
    *   C) `useNavigate()`
    *   D) `useLocation()`

    **Answer:** C

---

9.  What does the `element` prop in the `<Route>` component accept?
    *   A) A string
    *   B) A component function
    *   C) A JSX element
    *   D) A number

    **Answer:** C

---

10. What does the `*` path signify in a route?
    *   A) Homepage
    *   B) Dynamic route
    *   C) Catch-all / 404 page
    *   D) External link

    **Answer:** C

---

11. What is the purpose of the `useParams` hook?
    *   A) To fetch query strings
    *   B) To get route parameters from the URL
    *   C) To create new routes dynamically
    *   D) To access Redux state

    **Answer:** B

---

12. Which of the following best describes nested routes in React Router v6?
    *   A) Multiple `<Routes>` in one file
    *   B) Routes that share layout or UI structure
    *   C) Routes that call APIs
    *   D) Routes inside hooks

    **Answer:** B

---

13. What does the `replace` prop do in the `<Navigate />` component?
    *   A) Replaces text on the page
    *   B) Replaces history so back button skips the previous page
    *   C) Forces page refresh
    *   D) Replaces the component

    **Answer:** B

---

14. In nested routing, why must you include an `<Outlet />` component in the parent route?
    *   A) To define route boundaries
    *   B) To apply animations
    *   C) To render the child route component inside the parent layout
    *   D) To trigger scroll restoration

    **Answer:** C

---

15. How would you create protected routes in React Router v6?
    *   A) By using `<PrivateRoute>` from the library
    *   B) By setting `isProtected=true` on `<Route>`
    *   C) By wrapping a `<Route>` with a custom component that checks authentication and uses `<Navigate />`
    *   D) By using `requireAuth` attribute

    **Answer:** C

---

16. What is the purpose of `onChange` in a React form element?
    *   A) To validate form
    *   B) To reset form
    *   C) To update the component state when input changes
    *   D) To reload the page

    **Answer:** C

---

17. Which hook is commonly used to manage the form input state in React?
    *   A) `useEffect`
    *   B) `useInput`
    *   C) `useState`
    *   D) `useRef`

    **Answer:** C

---

18. Which attribute is used to bind a form field's value to component state?
    *   A) `bind`
    *   B) `model`
    *   C) `value`
    *   D) `content`

    **Answer:** C

---

19. What will happen if the input value is controlled by React but no `onChange` handler is provided?
    *   A) Input will be editable
    *   B) Input will show default value
    *   C) Input will become read-only
    *   D) It will throw a syntax error

    **Answer:** C

---

20. How do you prevent the page from reloading when a form is submitted in React?
    *   A) Use `<Link>` instead of `<form>`
    *   B) Use `return false`
    *   C) Call `event.preventDefault()` in the submit handler
    *   D) Use `stopSubmit()`

    **Answer:** C

---

21. Which is the correct way to handle a checkbox in React?
    *   A) Use `value` and `onClick`
    *   B) Use `checked` and `onChange`
    *   C) Use `selected` and `onSelect`
    *   D) Use `defaultChecked` and `onInput`

    **Answer:** B

---

22. Which pattern is recommended when dealing with multiple form fields in a single object?
    *   A) Use multiple `useState` hooks
    *   B) Use `useRef` only
    *   C) Use one `useState` with object and update using `name` and `value`
    *   D) Use Redux for every input

    **Answer:** C

---

23. You want to build a dynamic form where fields can be added/removed and managed efficiently. What is the most scalable solution?
    *   A) Use multiple `useState` for each input
    *   B) Use `useReducer` or form libraries like Formik or React Hook Form
    *   C) Use HTML forms without React control
    *   D) Create one global state variable for all forms

    **Answer:** B

---

24. Which of the following is the best approach to implement reusable and scalable form validation in a large React application?
    *   A) Manually write validation logic in each component’s submit handler
    *   B) Use HTML5 input attributes like `required` and `pattern` only
    *   C) Create custom hooks or use libraries like Formik or React Hook Form with schema validation (e.g., Yup)
    *   D) Use `setTimeout` to debounce user input and display errors after delay

    **Answer:** C