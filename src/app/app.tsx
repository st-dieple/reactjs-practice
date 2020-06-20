import React from 'react';
// import Home from './containers/home';

function App() {
  return (
    <div className="App">
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
              <img src={require(`../assets/images/logo.png`)} alt="logo.png" />
            </div>
          </div>
          <ul className="header-item-right nav-menu">
            <li className="nav-menu-item">CART</li>
            <li className="nav-menu-item">LOGIN</li>
          </ul>
        </div>
      </header>
      <div className="page-banner">
        <img src={require(`../assets/images/h1-slide3-img.jpg`)} alt="h1-slide3-img.jpg" />
      </div>
      <div className="page-wrapper"></div>
      <footer>
        Copyright©Mikado-Themes
      </footer>
    </div>
  );
}

export default App;
