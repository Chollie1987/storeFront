import React from 'react'
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import { Category } from '@mui/icons-material';

const Products = () => {
  const products = useSelector(state => state.product.products);
  const selectedCategory = useSelector(state => state.category.selectedCategory)
  return <Grid container spacing={2} marginTop={'20px'}>
    {products.filter(p => p.category === selectedCategory || !selectedCategory).map(product => <Product key={product.name} product={product} />)}
  </Grid>;

};

export default Products;