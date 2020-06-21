import React from 'react';

function ProductList() {
  return (
    <div className="product-list container">
      <ul className="product-list-inner">
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-1.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-2.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-3.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-4.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-5.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-6.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-7.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
        <li className="product-list-item">
          <div className="product">
            <div className="product-img">
              <img src={require('../../../assets/images/h1-product-8.jpg')} alt="h1-product-1.jpg"/>
            </div>
            <div className="product-info">
              <p className="product-name">Basket With Handles</p>
              <p className="product-price">$160</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;