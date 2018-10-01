import React from 'react'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

const CategoryList = () => (
  <div>
    <Text p={1} fontSize={2} fontWeight={500} letterSpacing={2} color='lightGreen' bg='darkGreen' textAlign='center'>
      甜點類別
    </Text>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen' bg='ligthGreen'>
      <Text fontSize={2} fontWeight={500} letterSpacing={2} color='darkGreen' textAlign='center'>
        所有甜點（48）
      </Text>
    </Box>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen'>
      <Text fontSize={2} fontWeight={500} letterSpacing={2} color='darkGreen' textAlign='center'>
        本日精選（10）
      </Text>
    </Box>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen'>
      <Text fontSize={2} fontWeight={500} letterSpacing={2} color='darkGreen' textAlign='center'>
        人氣推薦（26）
      </Text>
    </Box>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen'>
      <Text fontSize={2} fontWeight={500} letterSpacing={2} color='darkGreen' textAlign='center'>
        新品上市（12）
      </Text>
    </Box>
  </div>
)

export default CategoryList
