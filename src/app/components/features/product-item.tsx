import React from 'react';

function ProductItem(props: any) {
  return (
    <div className="product">
      <div className="product-inner">
        <div className="product-img">
          <img src={require(`../../../assets/images/${props.image}`)} alt={props.image}/>
        </div>
        <div className="product-action">
          <button className="btn btn-primary">ADD TO CART</button>
        </div>
      </div>
      <div className="product-text-wrapper">
        <p className="product-name">{props.name}</p>
        <p className="product-price">${props.price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
