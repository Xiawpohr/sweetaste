import React from 'react'
import OrderItem from './OrderItem.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

const OrderContent = () => (
  <Box border='1px solid' borderColor='lightGreen'>
    <Text p={1} fontSize={2} fontWeight={400} color='green' bg='lightGreen' textAlign='center'>購物清單</Text>
    <Box px={2} pt={1}>
      <Box pb={1}>
        <OrderItem />
      </Box>
      <Box pb={1}>
        <OrderItem />
      </Box>
      <Box pb={1}>
        <OrderItem />
      </Box>
    </Box>
  </Box>
)

export default OrderContent
