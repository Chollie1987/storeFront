import React from 'react'
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import { Category } from '@mui/icons-material';

const Products = () => {
  const data = useSelector(state => state.product.data);
  const categories = useSelector(state => state.product.categories)
  return <Grid container spacing={2} marginTop={'20px'}>
    {data.products.filter(p => p.categories === categories || categories === 'Categories' ).map(product => <Product key={product.name} product={product} />)}
  </Grid>;

};

export default Products