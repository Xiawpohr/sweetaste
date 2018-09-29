import React from 'react'
import Mobile from '../components/Mobile'
import Desktop from '../components/Desktop'
import CartContent from '../components/CartContent.js'
import CartSummary from '../components/CartSummary.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'

const Cart = () => (
  <div>
    <Mobile>
      <CartContent />
      <CartSummary />
    </Mobile>
    <Desktop>
      <Container>
        <Flex py={3}>
          <Box pr={2} flex={32}>
            <CartContent />
          </Box>
          <Box flex={15}>
            <CartSummary />
          </Box>
        </Flex>
      </Container>
    </Desktop>
  </div>
)

export default Cart
