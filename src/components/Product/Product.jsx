//component showing singular product
import React from 'react'
import data from '../../data.json';

const Product = ({product}) => {
  return (
    <div>{product.name}</div>
  )
}

export default Product