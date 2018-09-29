import React from 'react'
import Mobile from './Mobile'
import Desktop from './Desktop'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Text from '../styles/Text.js'
import Button from '../styles/Button.js'

const CartSummary = () => (
  <div>
    <Mobile>
      <Container>
        <Text p={1} fontSize={2} fontWeight={600} color='darkGreen' bg='lightGreen' textAlign='center'>訂單摘要</Text>
        <Flex pt={1} justifyContent='space-between'>
          <Text fontSize={0} fontWeight={200} color='darkGreen'>小計</Text>
          <Text fontSize={0} fontWeight={200} color='darkGreen'>NT $2700</Text>
        </Flex>
        <Flex pt={0} justifyContent='space-between'>
          <Text fontSize={0} fontWeight={200} color='darkGreen'>運費</Text>
          <Text fontSize={0} fontWeight={200} color='darkGreen'>NT $300</Text>
        </Flex>
        <Flex py={1} justifyContent='space-between'>
          <Text fontSize={1} fontWeight={400} color='darkGreen'>總計</Text>
          <Text fontSize={1} fontWeight={400} color='darkGreen'>NT $3000</Text>
        </Flex>
      </Container>
      <Button width={1}>
        <Text fontSize={2} fontWeight={600} color='darkGreen' textAlign='center'>結帳</Text>
      </Button>
    </Mobile>
    <Desktop>

    </Desktop>
  </div>
)

export default CartSummary
