import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/categories';
import Products from './components/Products/Products';
import { useSelector } from 'react-redux';
import ProductModal from './components/productModal/ProductModal';
import CartModal from './components/CartModal/CartModal';


const App = () => {

  const [openModal, setOpenModal] = useState(false);
  return <div>
    <Header openCart = { () => setOpenModal(true)}/>
    <Products/>
    <ProductModal/>
    <CartModal open = {openModal} handleClose = { () => setOpenModal(false)}/>
    <Footer />
  </div>
}

export default App