import React from 'react';

function Header() {
  return (
    <header className="page-header">
      <div className="container page-header-inner">
        <ul className="header-item-left nav-menu">
          <li className="nav-menu-item">HOME</li>
          <li className="nav-menu-item">SHOP</li>
          <li className="nav-menu-item">PAGES</li>
          <li className="nav-menu-item">ELEMENTS</li>
        </ul>
        <div className="header-item-center">
          <div className="logo">
            <img src={require(`../../../assets/images/logo.png`)} alt="logo.png" />
          </div>
        </div>
        <ul className="header-item-right nav-menu">
          <li className="nav-menu-item">
            CART
            <span className="total text-number">($15)</span>
          </li>
          <li className="nav-menu-item">LOGIN</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
