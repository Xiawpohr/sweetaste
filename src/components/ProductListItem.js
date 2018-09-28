import React from 'react'
import Box from '../styles/Box.js'
import Background from '../styles/Background.js'
import Flex from '../styles/Flex.js'
import Text from '../styles/Text.js'
import Icon from '../styles/Icon.js'
import fruitYogurt from '../images/fruit-yogurt.jpg'

const ProductListItem = () => (
  <Box>
    <Background height={315} backgroundImage={`url(${fruitYogurt})`}>
      <Flex px={2} justifyContent='space-between'>
        <Text p={0} fontSize={0} fontWeight={400} color='lightGreen' bg='darkGreen' mode='vertical-rl' letterSpacing='0.06rem'>
          本日精選
        </Text>
        <Icon mt={2} name='Favorite'/>
      </Flex>
    </Background>
    <Flex>
      <Box flex={23} p='0.14rem' border='1px solid' borderColor='lightGreen'>
        <Text fontSize={1} fontWeight={200} color='darkGreen' textAlign='center'>
          焦糖馬卡龍
        </Text>
      </Box>
      <Box flex={17} p='0.14rem' border='1px solid' borderColor='lightGreen'>
        <Text fontSize={1} fontWeight={600} color='darkGreen' textAlign='center'>
          NT$ 450
        </Text>
      </Box>
    </Flex>
    <Text p={1} fontSize={2} fontWeight={600} color='darkGreen' bg='lightGreen' textAlign='center'>
      加入購物車
    </Text>
  </Box>
)

export default ProductListItem
