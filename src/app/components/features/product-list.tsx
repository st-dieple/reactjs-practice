import React from 'react';
import ProductItem from './product-item';

function ProductList(props: any) {
  console.log('list', props, props.products);
  const products = props.products
  let list = products.map((item: any) => 
    <li className="product-list-item" key={item.id.toString()}>
      <ProductItem name={item.name}
                    price={item.price}
                    image={item.image} />
    </li>
  );
  return (
    <div className="product-list container">
      <ul className="product-list-inner">
        {list}
      </ul>
    </div>
  )
}

export default ProductList;