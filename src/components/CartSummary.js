import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import getSubtotal from '../selectors/getSubtotal.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import BtnLink from '../styles/BtnLink.js'
import Hr from '../styles/Hr.js'

const CartSummary = ({ subtotal, deliveryFee }) => (
  <div>
    <Box bg={['unset', 'darkGreen']}>
      <Container px={[3, 2]}>
        <Text p={1} fontSize={2} fontWeight={400} color={['darkGreen', 'lightGreen']} bg={['lightGreen', 'unset']} textAlign='center'>
          訂單摘要
        </Text>
        <Hr display={['none', 'block']}/>
        <Flex pt={1} justifyContent='space-between'>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>
            小計
          </Text>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>
            NT{numeral(subtotal).format('$ 0,0')}
          </Text>
        </Flex>
        <Flex pt={0} justifyContent='space-between'>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>
            運費
          </Text>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>
            NT{numeral(deliveryFee).format('$ 0,0')}
          </Text>
        </Flex>
        <Flex py={1} justifyContent='space-between'>
          <Text fontSize={1} fontWeight={400} color={['darkGreen', 'lightGreen']}>
            總計
          </Text>
          <Text fontSize={1} fontWeight={400} color={['darkGreen', 'lightGreen']}>
            NT{numeral(subtotal + deliveryFee).format('$ 0,0')}
          </Text>
        </Flex>
      </Container>
    </Box>
    <BtnLink width={1} to='/checkout'>
      <Text fontSize={2} fontWeight={600} color='darkGreen' textAlign='center'>結帳</Text>
    </BtnLink>
  </div>
)

const mapStateToProps = state => ({
  subtotal: getSubtotal(state.cart.items),
  deliveryFee: state.cart.deliveryFee
})

export default connect(mapStateToProps)(CartSummary)
