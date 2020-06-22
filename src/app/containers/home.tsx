import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Banner from '../components/layout/banner';
import ProductList from '../components/features/product-list';

function fetchData() {
  const products = [
    {
      id: 1,
      name: 'Basket With Handles',
      image: 'h1-product-1.jpg',
      price: 160
    },
    {
      id: 2,
      name: 'Flower Vase',
      image: 'h1-product-2.jpg',
      price: 170
    },
    {
      id: 3,
      name: 'Deco Accessory',
      image: 'h1-product-3.jpg',
      price: 15
    },
    {
      id: 4,
      name: 'Wall Clock',
      image: 'h1-product-4.jpg',
      price: 110
    },
    {
      id: 5,
      name: 'Newspaper Storage',
      image: 'h1-product-5.jpg',
      price: 90
    },
    {
      id: 6,
      name: 'Pottery Vase',
      image: 'h1-product-6.jpg',
      price: 60
    },
    {
      id: 7,
      name: 'Rose Holdback',
      image: 'h1-product-7.jpg',
      price: 24
    },
    {
      id: 8,
      name: 'Table Lame',
      image: 'h1-product-8.jpg',
      price: 240
    },
    {
      id: 9,
      name: 'Rose Holdback',
      image: 'h1-product-7.jpg',
      price: 24
    },
    {
      id: 10,
      name: 'Table Lame',
      image: 'h1-product-8.jpg',
      price: 240
    }
  ];
  return products;
}

function Home() {
  const products = fetchData();
  return (
    <div className="Home">
      <Header />
      <Banner />
      <div className="page-wrapper">
        <ProductList products={products}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home; 