# React 

## Fundamentals (JSX, components, props, state)

### [JSX](https://reactjs.org/docs/introducing-jsx.html) - JavaScript XML, a syntax extension of JavaScript to directly write HTML in React

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### [Components and props](https://reactjs.org/docs/components-and-props.html) - like JavaScript functions, accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
```

All React components must act like pure functions with respect to their props.

### [State](https://reactjs.org/docs/state-and-lifecycle.html) - state is similar to props, but it is private and fully controlled by the component


## Advanced (hooks, context, refs, Router, Redux)

### [Hooks](https://reactjs.org/docs/hooks-reference.html) - functions that let you “hook into” React state and lifecycle features from function components. 

`useState` is a Hook that lets you add React state to function components
`useEffect` Hook lets you perform side effects in function components

```js
function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Button</button>
        </div>
    );
}
```

`custom Hooks` - alternative to render props and higher-order components, a JavaScript function whose name starts with ”use” and that may call other Hooks

### [Context](https://reactjs.org/docs/context.html) - a way to share values between components without having to explicitly pass a prop through every level of the tree

```js
const MyContext = React.createContext(defaultValue);
<MyContext.Provider value={/* some value */}>
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

Hook `useContext` - accepts a context object (the value returned from React.createContext) and returns the current context value for that context
const value = useContext(MyContext);

### [refs](https://reactjs.org/docs/refs-and-the-dom.html) - “ a box” that can hold a mutable value in its .current property

A way to access the DOM. If you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes. It’s useful for keeping any mutable value around similar to how you’d use instance fields in classes

Hook `useRef`

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### [Router](https://reactrouter.com/) - a standard library for routing in React

```js
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### [Redux](https://react-redux.js.org/) - a library for managing and centralizing application state

React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app

```js
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store: useSelector reads a value from the store state and subscribes to updates, while useDispatch returns the store's dispatch method to let you dispatch actions

```js
export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
            -
        </button>
      </div>
    </div>
  )
}
```
