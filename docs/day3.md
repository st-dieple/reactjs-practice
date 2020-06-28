## Day3 - 2020/06/25


### Style and class binding

**1. Way to style React component**

- CSS Stylesheet
   import css/scss file. This file will be separated for each component

  ```
  import React from 'react';
  import './header.scss'

  function Header() {
    return (
      <header className="page-header">
        <div className="logo">
          DEPOT
        </div>
      </header>
    )
  }
  ```

- Inline styling
  + in React, inline style are specified with an object.
  + Object `key` is the `camelCased` version of style name
  + Object `value` is style's value, usually `string` or `number`

```
  import React from 'react';

  function Header() {
    return (
      <header className="page-header" style={{color: 'gray', backgroundColor: 'green'}}>
        <div className="logo">
          DEPOT
        </div>
      </header>
    )
  }
```

- CSS Modules
  refer: https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.re1pdcz87)
- Styled-components
  Styled-components is a library for React and React Native that allows you to use component-level styles in your application
  https://github.com/styled-components/styled-components

Have no deeper research about `CSS Modules` and `Styled-components`. They docs will be updated soon.

**2. Add class in JSX**

- using `className`:  
```
render() {
  return <span className="nav-menu">Menu</span>
```
- using class dynamically:
```
render() {
  let menuClass = 'nav-menu;
  return <span className={menuClass}>Menu</span>
}
```


***


### State

- State is a object in component
- State use for storing property value of component
- Use only in one component


***

### useState

- `useState` is a `Hook` => only use in  `functional component`
- use for update state
- `useState` basically is a function
  + input: initial state (value or callback function)
  + output: 2 element array `[state, setState]`

```
function ColorBox() {
  const [color, setColor] = useState('green');
  function handleClick() {
    setColor('purple');
  }
  return (
    <div style={{background: color}}
         onClick={handleClick}>
    </div>
  );
}
```


***


### How to add Two Way Binding ?

1. To add two way binding: 
- Using event handler to get data changed from view (ex: `onChange`, ...)
- Using set state method to update state
  + Class Component: `setState()`
  + Functional Component: `useState()` hook

2. Example

- Class Component:
```
export class DataBindingPrac extends React.Component {
  state = {
    text: 'Welcome to DEPOT'
  }

  handleOnchange = (e: any) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h1 style={{fontSize: 24}}>
          {this.state.text}
        </h1>
        <input  type="text"
                value={this.state.text}
                onChange={this.handleOnchange}/>
      </div>
    )
  }
}
```

- Functional Component:
```
import React, { useState } from 'react';

function DataBindingPrac(props: any) {
  const [text, setText] = useState('Welcome to DEPOT');
  function handleOnchange(e: any) {
    setText(e.target.value);
  }
  return (
    <div className="container">
      <h1 style={{textTransform: 'uppercase', fontSize: 24}}>{text}</h1>
      <input type="text"
             value={text}
             onChange={handleOnchange}/>
    </div>
  )
}

export default DataBindingPrac;
```

***

### Props

- `Props` is a special keyword in React, which stands for `properties`.
- `Props` is used for `passing data from one component to another`.
- `Props` is passed in one way from parent to child, no reverse.
- `Props` data is read-only (data from parent should not be changed by child components)

#### Example
- Parent component:
```
import React, { useState } from 'react';

function Home() {
  return (
    <div className="Home">
      <h1>Parent Component</h1>
    </div>
  )
}

export default Home; 
```


- Child Component, with props from parent component:
```
import React, { useState } from 'react';

function ChildComponent(props: any) {
  const initialTitle = props.title;
  const [title, setTile] = useState(initialTitle);
  
  return (
    <div className="container">
      <h2 style={{fontSize: 24}}>{title}</h2>
    </div>
  )
}

export default ChildComponent;
```

- Using Children Component:

```
import React, { useState } from 'react';
import ChildComponent from '../components/features/child-component';

function Home() {
  return (
    <div className="Home">
      <h1>Parent Component</h1>
      <ChildComponent title={'Hello'}/>
      <ChildComponent title={'Welcome to DEPOT!'}/>
    </div>
  )
}
```

