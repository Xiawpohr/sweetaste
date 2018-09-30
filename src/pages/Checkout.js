import React from 'react'
import Mobile from '../components/Mobile.js'
import Desktop from '../components/Desktop.js'
import CheckoutForm from '../components/CheckoutForm.js'
import OrderSummary from '../components/OrderSummary.js'
import OrderContent from '../components/OrderContent.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'

const Checkout = () => (
  <div>
    <Mobile>
      <CheckoutForm />
    </Mobile>
    <Desktop>
      <Container maxWidth='8.4rem'>
        <Flex pt={3} pb={5}>
          <Box flex={8}>
            <Box pr={2}>
              <CheckoutForm />
            </Box>
          </Box>
          <Box flex={5}>
            <Box mb={2}>
              <OrderSummary />
            </Box>
            <Box>
              <OrderContent />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Desktop>
  </div>
)

export default Checkout
