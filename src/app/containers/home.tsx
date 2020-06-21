import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Banner from '../components/layout/banner';


function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <div className="page-wrapper"></div>
      <Footer />
    </div>
  )
}

export default Home; 