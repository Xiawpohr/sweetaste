import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Background from '../styles/Background.js'
import Text from '../styles/Text.js'
import strawberrySmoothe from '../images/strawberry-smoothe.jpg'

const OrderItem = () => (
  <Flex alignItems='center'>
    <Box width={115}>
      <Background height={80} backgroundImage={`url(${strawberrySmoothe})`}/>
    </Box>
    <Box ml={2}>
      <Text mb='2px' fontSize={0} fontWeight={200} color='green'>焦糖馬卡龍（2）</Text>
      <Text fontSize={1} fontWeight={400} color='green'>NT$ 900</Text>
    </Box>
  </Flex>
)

export default OrderItem
