import React from 'react'
import Mobile from './Mobile.js'
import Desktop from './Desktop.js'
import CartItem from './CartItem.js'
import Container from '../styles/Container.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

const CartContent = () => (
  <div>
    <Mobile>
      <Text py={1} fontSize={2} fontWeight={600} color='darkGreen' bg='lightGreen' textAlign='center'>您的購物車</Text>
      <Container>
        <Box py={3} >
          <Box>
            <CartItem />
          </Box>
          <Box pt={3}>
            <CartItem />
          </Box>
          <Box pt={3}>
            <CartItem />
          </Box>
        </Box>
      </Container>
    </Mobile>
    <Desktop>
      <Text mb={10} py={1} fontSize={2} fontWeight={600} color='darkGreen' bg='lightGreen' textAlign='center'>您的購物車</Text>
      <Box py={2}>
        <CartItem />
      </Box>
      <Box py={2} borderTop='1px solid' borderColor='lightGreen'>
        <CartItem />
      </Box>
      <Box py={2} borderTop='1px solid' borderColor='lightGreen'>
        <CartItem />
      </Box>
    </Desktop>
  </div>
)

export default CartContent
