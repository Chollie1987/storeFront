import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import { useSelector } from 'react-redux';
import ProductModal from './components/productModal/ProductModal';

const App = () => {

  return <div>
    <Header />
    <Products/>
    <ProductModal/>
    <Footer />
  </div>
}

export default App