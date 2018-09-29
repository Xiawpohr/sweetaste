import React from 'react'
import Mobile from './Mobile.js'
import Desktop from './Desktop.js'
import Counter from './Counter.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Background from '../styles/Background.js'
import Text from '../styles/Text.js'
import Icon from '../styles/Icon.js'
import strawberrySmoothe from '../images/strawberry-smoothe.jpg'

const CartItem = () => (
  <div>
    <Mobile>
      <Flex pb={8.5}>
        <Box mr={1} width={157} >
          <Background height={106} backgroundImage={`url(${strawberrySmoothe})`}/>
        </Box>
        <Box>
          <Text fontSize={1} fontWeight={200} color='darkGreen'>焦糖馬卡龍</Text>
          <Text mb={0} fontSize={0} fontWeight={200} color='darkGreen'>NT$ 450</Text>
          <Counter />
        </Box>
      </Flex>
      <Box py={8.5} borderTop='1px solid' borderBottom='1px solid' borderColor='lightGreen'>
        <Text fontSize={1} fontWeight={600} color='darkGreen' textAlign='right'>NT$ 900</Text>
      </Box>
    </Mobile>
    <Desktop>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box width={110}>
          <Background height={110} backgroundImage={`url(${strawberrySmoothe})`}/>
        </Box>
        <div>
          <Text mb='3px' fontSize={1} fontWeight={200} color='darkGreen'>焦糖馬卡龍</Text>
          <Text fontSize={0} fontWeight={200} color='darkGreen'>NT$ 450</Text>
        </div>
        <Counter />
        <Text fontSize={1} fontWeight={600} color='darkGreen'>NT$ 900</Text>
        <Icon name='Delete' fill='#8DA291' />
      </Flex>
    </Desktop>
  </div>
)

export default CartItem
