## Day 1 - 2020/06/20


### Using Create React App

- Create ReactJS project with [Create React App](https://create-react-app.dev/docs/getting-started/)
- Adding Sass stylesheet: `npm install node-sass --save`
- Adding Typescript: `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

### Creating a Functional Component

1. Import React for creating & using component: `import React from 'react';`
2. Create a function (the function accepts a single object argument (props) and returns a React element.
    ```
    function ProductItem(props: any) {
      return (
        <div className="product-list-item">
          {props.name}
        </div>
      )
    }
    ```
3. Export component: `export default ProductItem;`

**Note**: Aways start component names with capital letter. If component names are stared by lowercase letter, React with treats them as DOM tags.

### Working with Components & Re-Using Them

1. Create a `Home` component. It will a container where handle data and using other component.
2. `Home` will be rendered in `App` component

    ```
    import React from 'react';
    import Home from './containers/home';

    function App() {
      return (
        <div className="App">
          <Home />
        </div>
      );
    }
    ```

2. Create components for layout and feature.
3. Import and using components in `Home` component
   - `ProductList` component have a props is list product
   - Layout component (`Header`, `Banner`, `Footer`) have no props