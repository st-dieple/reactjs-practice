import React from 'react';

function Banner() {
  return (
    <div className="page-banner container">
    <div className="page-banner-inner">
      <div className="banner-item-left">
        <h3 className="caption">CONTEMPORARY DESIGN. </h3>
        <p className="des">A large set of beautiful & fully flexible homepage layouts <br/> lets you create your website quickly & easily. </p>
      </div>
      <div className="banner-item-right">
        <img src={require(`../../../assets/images/h1-slide3-img.jpg`)} alt="h1-slide3-img.jpg" />
      </div>
    </div>
  </div>
   )
}

export default Banner;
