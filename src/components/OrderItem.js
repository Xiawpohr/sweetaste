import React from 'react'
import numeral from 'numeral'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Background from '../styles/Background.js'
import Text from '../styles/Text.js'

const OrderItem = ({ name, price, quantity, image }) => (
  <Flex alignItems='center'>
    <Box width={115}>
      <Background height={80} backgroundImage={`url(${image})`}/>
    </Box>
    <Box ml={2}>
      <Text mb='2px' fontSize={0} fontWeight={200} color='green'>{name}（{quantity}）</Text>
      <Text fontSize={1} fontWeight={400} color='green'>NT{numeral(price * quantity).format('$ 0,0')}</Text>
    </Box>
  </Flex>
)

export default OrderItem
