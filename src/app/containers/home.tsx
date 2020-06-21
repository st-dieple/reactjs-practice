import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Banner from '../components/layout/banner';
import ProductList from '../components/features/product-list';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <div className="page-wrapper">
        <ProductList />
      </div>
      <Footer />
    </div>
  )
}

export default Home; 