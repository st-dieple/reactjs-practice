import React from 'react';

function ProductItem(props: any) {
  return (
    <div className="product">
      <div className="product-img">
        <img src={require(`../../../assets/images/${props.image}`)} alt={props.image}/>
      </div>
      <div className="product-info">
        <p className="product-name">{props.name}</p>
        <p className="product-price">${props.price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
