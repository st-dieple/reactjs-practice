## Day 4 - 2020/06/26


### The children Prop.

- The `children Prop` is anything inside component JSX tag

#### Example

- Parent component:
```
function Home() {
  return (
    <div className="Home">
      <TitleBox title={'Hi'}></TitleBox>
      <TitleBox title={'Hello'}>Color Box</TitleBox>
      <TitleBox title={'Welcome to DEPOT!'}> 
        <p style={{background: 'blue'}}>Let's go</p>
      </TitleBox>
    </div>
  )
}
```

- Children Component:
```
function TitleBox(props: any) {
  console.log(props.children); // in first TitleBox, props.children is undefined
  return (
    <div className="TitleBox">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
```

- props children only display in view when it is rendered in children component


***



### The different between state and props

  - Props
    + Get from parent component
    + props is read-only (can not changed)

  - State
    + can change
    + only be used in one component


***



### Lifecycle of component

Lifecycle of component has 3 states:
  + Mounting
  + Updating
  + Unmounting

#### **Lifecycle of Class component**
**1. Mounting**
   - Mounting, will call the functions in following order:

    ```
    constructor() -> render() -> update DOM -> componentDidMount()
    ```

   - Mounting is run only one time
   - `componentDidMount` for calling API, updating state

**2. Updating**
   - Updating will call the functions in following order:
   ```
   new Props     |
   setState      | -> shouldComponentUpdate() -> render() -> update DOM -> componentDidUpdate()
   forceUpdate() |
   ```
   - Updating will run every time props/state change or call forceUpdate() function
   - `shouldComponentUpdate` will check `next props/state === previous props/state`
     + if return false -> render again
     + if return true -> no render
   - `shouldComponentUpdate` only use in `React.PureComponent`

**3. Unmounting**
   - Call `componentWillUnmount()`
   - Unmounting is run only one time.
   - For clearing timeout or interval if available

=> Be careful when using `componentDidUpdate` because it easy to got endless loop error

***


#### **Lifecycle of Functional component**

**1. Using useEffect hook**
   - useEffect() run after render
   - after first render, useEffect() will run or not depend on `dependencies`

**2. useEffect() syntax**
    `function useEffect(callback, dependencies) {}`
   - callback: effect function
   - dependencies: only execute callback if one of dependencies changes
   - effect function have 2 parts:
     + side effect: call API, interact with DOM, subscription, setTimeout, setInterval...
     + clean up (option)


  example:
  ```
  function App() {
    const [title, setTitle] = useState('Hello');

    useEffect(() => {
      // side effect code here...

      return() => {
        // Clean up code here...
      }
    }, []);

    return <h1>{title}</h1>
  }
  ```
  **3. Lifecycle with useEffect**

     - MOUNTING
       + rendering (first rendering)
       + run useEffect() (only run side effect part)

     - UPDATING
       + rendering
       + run `useEffect() clean up` if `dependencies` changes
       + run `useEffect()` if `dependencies` changes

     - UNMOUNTING
       + run `useEffect() clean up`

**4. useEffect() dependencies cases:**
   - No dependencies: 
     + `useEffect()` always execute after every render 
     + `useEffect() clean up` execute before next effect or unmount
  
   - Dependencies is empty ([]):
     + `useEffect()` only execute `ONCE` after first render  - same `componentDidMount()`
     + `useEffect() clean up` only execute `ONCE` when unmount - same `componentWillUnmount()`

   - Has Dependencies:
     + `useEffect()` only execute after the first render or state (dependencies param) changes
     + `useEffect() clean up` execute before next effect or unmount
