import React from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

const OrderContent = ({ items }) => (
  <Box border='1px solid' borderColor='lightGreen'>
    <Text p={1} fontSize={2} fontWeight={400} color='green' bg='lightGreen' textAlign='center'>購物清單</Text>
    <Box px={2} pt={1}>
      {items.map(({ id, name, price, quantity, image }) => (
        <Box pb={1} key={id}>
          <OrderItem name={name} price={price} quantity={quantity} image={image}/>
        </Box>
      ))}
    </Box>
  </Box>
)

const mapStateToProps = state => ({
  items: state.cart.items
})

export default connect(mapStateToProps)(OrderContent)
