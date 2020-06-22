## Day 2 - 2020/06/21


### Binding Variables into View

- Using `{}` to binding variable into View
- Example:  
  ```
  <div className="product-list-item">
    {props.name}
  </div>
  ```

### Conditional and List rendering.

#### Conditional rendering
1. Using Element variable
Check condition and assign element variable before render

```
function ProductList(props: any) {
  const products = props.products;
  let result = products.length === 0 ? (
    <h2 className="pb-15"> No product available!!!!!</h2>
  ) : (
    <ul className="product-list-inner">
      {products.map((item: any) => 
        <li className="product-list-item" key={item.id.toString()}>
          <ProductItem  name={item.name}
                        price={item.price}
                        image={item.image} />
        </li>
      )}
    </ul>
  );

  return (
    <div className="product-list container">
      {result}
    </div>
  )
}
```
2. Inline If
- For conditionally including an element
- Wrapping expressions in JSX in `{}`

```
function ProductList(props: any) {
  const products = props.products;
  return (
    <div className="product-list container">
      {unreadMessages.length > 0 &&
         <h2 className="pb-15"> No product available!!!!!</h2>
      }
    </div>
  )
}
```

3. Inline If-Else
Using inline if - else in `{}`

#### List rendering
- Using `map()` function make list view

```
<ul className="product-list-inner">
      {products.map((item: any) => 
        <li className="product-list-item" key={item.id.toString()}>
          <ProductItem  name={item.name}
                        price={item.price}
                        image={item.image} />
        </li>
      )}
    </ul>
```

- Can use `map()` inline by wrappung in `{}`

```
 return (
    <div className="product-list container">
      <ul className="product-list-inner">
        {products.map((item: any) => 
          <li className="product-list-item" key={item.id.toString()}>
            <ProductItem  name={item.name}
                          price={item.price}
                          image={item.image} />
          </li>
        )}
      </ul>
    </div>
  )
```

- When redering with array, we need to add `key` atrribute. React will use `key` to identify item in list
