import React from 'react'
import ProductListItem from './ProductListItem.js'
import Grid from '../styles/Grid.js'

const ProductList = () => (
  <Grid itemWidth={[315, 300]} gap={[30, 20]}>
    <ProductListItem />
    <ProductListItem />
    <ProductListItem />
    <div></div>
  </Grid>
)

export default ProductList
