import React from 'react'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import Button from '../styles/Button.js'
import Hr from '../styles/Hr.js'

const CartSummary = () => (
  <div>
    <Box bg={['unset', 'darkGreen']}>
      <Container px={[3, 2]}>
        <Text p={1} fontSize={2} fontWeight={400} color={['darkGreen', 'lightGreen']} bg={['lightGreen', 'unset']} textAlign='center'>訂單摘要</Text>
        <Hr display={['none', 'block']}/>
        <Flex pt={1} justifyContent='space-between'>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>小計</Text>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>NT $2700</Text>
        </Flex>
        <Flex pt={0} justifyContent='space-between'>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>運費</Text>
          <Text fontSize={0} fontWeight={200} color={['darkGreen', 'lightGreen']}>NT $300</Text>
        </Flex>
        <Flex py={1} justifyContent='space-between'>
          <Text fontSize={1} fontWeight={400} color={['darkGreen', 'lightGreen']}>總計</Text>
          <Text fontSize={1} fontWeight={400} color={['darkGreen', 'lightGreen']}>NT $3000</Text>
        </Flex>
      </Container>
    </Box>
    <Button width={1}>
      <Text fontSize={2} fontWeight={600} color='darkGreen' textAlign='center'>結帳</Text>
    </Button>
  </div>
)

export default CartSummary
