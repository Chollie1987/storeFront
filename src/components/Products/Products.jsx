import React from 'react'
import data from '../../data.json';
import Product from '../Product/Product';

const Products = () => {
  return <div>{data.products.map(product => <Product key={product.name} product={product}/>)}</div>;
  
};

export default Products