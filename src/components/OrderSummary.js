import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

const OrderSummary = () => (
  <Box border='1px solid' borderColor='lightGreen'>
    <Text p={1} fontSize={2} fontWeight={400} color='green' bg='lightGreen' textAlign='center'>訂單摘要</Text>
    <Box px={2} py={1}>
      <Flex mb={0} justifyContent='space-between'>
        <Text fontSize={0} fontWeight={200} color='green'>小計</Text>
        <Text fontSize={0} fontWeight={200} color='green'>NT$ 2,700</Text>
      </Flex>
      <Flex mb={1} justifyContent='space-between'>
        <Text fontSize={0} fontWeight={200} color='green'>運費</Text>
        <Text fontSize={0} fontWeight={200} color='green'>NT$ 300</Text>
      </Flex>
      <Flex justifyContent='space-between'>
        <Text fontSize={1} fontWeight={400} color='green'>總計</Text>
        <Text fontSize={1} fontWeight={400} color='green'>NT$ 3,000</Text>
      </Flex>
    </Box>
  </Box>
)

export default OrderSummary
