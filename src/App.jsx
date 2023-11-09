import React, { useEffect } from 'react';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/categories';
import Products from './components/Products/Products';
import { useSelector, useDispatch } from 'react-redux';
import ProductModal from './components/productModal/ProductModal';
import CartModal from './components/CartModal/CartModal';
import { getProducts } from './store/product';
import { getCategory } from './store/category';


const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [openModal, setOpenModal] = useState(false);

  const theme = createTheme({

    palette: {
      primary: {
        main: '#8561c5',
      },
      secondary: {
        main: '#2979ff',
      }
    }
  });

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
  <div>
    <Header openCart = { () => setOpenModal(true)}/>
    <Products/>
    <ProductModal/>
    <CartModal open = {openModal} handleClose = { () => setOpenModal(false)}/>
    <Footer />
  </div>
    </ThemeProvider>
  );
}

export default App