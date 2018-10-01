import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import getSubtotal from '../selectors/getSubtotal.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

const OrderSummary = ({ subtotal, deliveryFee }) => (
  <Box border='1px solid' borderColor='lightGreen'>
    <Text p={1} fontSize={2} fontWeight={400} color='green' bg='lightGreen' textAlign='center'>訂單摘要</Text>
    <Box px={2} py={1}>
      <Flex mb={0} justifyContent='space-between'>
        <Text fontSize={0} fontWeight={200} color='green'>小計</Text>
        <Text fontSize={0} fontWeight={200} color='green'>NT{numeral(subtotal).format('$ 0,0')}</Text>
      </Flex>
      <Flex mb={1} justifyContent='space-between'>
        <Text fontSize={0} fontWeight={200} color='green'>運費</Text>
        <Text fontSize={0} fontWeight={200} color='green'>NT{numeral(deliveryFee).format('$ 0,0')}</Text>
      </Flex>
      <Flex justifyContent='space-between'>
        <Text fontSize={1} fontWeight={400} color='green'>總計</Text>
        <Text fontSize={1} fontWeight={400} color='green'>NT{numeral(subtotal + deliveryFee).format('$ 0,0')}</Text>
      </Flex>
    </Box>
  </Box>
)

const mapStateToProps = state => ({
  subtotal: getSubtotal(state.cart.items),
  deliveryFee: state.cart.deliveryFee
})

export default connect(mapStateToProps)(OrderSummary)
