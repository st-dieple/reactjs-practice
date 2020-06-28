import React from 'react';
import ProductItem from './product-item';

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

export default ProductList;
