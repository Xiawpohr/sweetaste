import React from 'react'
import ProductListItem from './ProductListItem.js'
import Grid from '../styles/Grid.js'

const ProductList = ({ products }) => (
  <Grid itemWidth={[315, 300]} gap={[30, 20]}>
    {products.map(({ name, price, image }, index) => (
      <ProductListItem key={index} name={name} price={price} image={image} />
    ))}
    <div></div>
  </Grid>
)

export default ProductList
