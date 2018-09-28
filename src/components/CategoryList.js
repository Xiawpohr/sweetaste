import React from 'react'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

const CategoryList = () => (
  <div>
    <Text p={1} fontSize={2} fontWeight={600} letterSpacing={2} color='lightGreen' bg='darkGreen' textAlign='center'>甜點類別</Text>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen'>
      <Text fontSize={2} fontWeight={600} letterSpacing={2} color='darkGreen' bg='white' textAlign='center'>所有甜點</Text>
    </Box>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen'>
      <Text fontSize={2} fontWeight={600} letterSpacing={2} color='darkGreen' bg='white' textAlign='center'>本日精選</Text>
    </Box>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen'>
      <Text fontSize={2} fontWeight={600} letterSpacing={2} color='darkGreen' bg='white' textAlign='center'>人氣推薦</Text>
    </Box>
    <Box my='-.5px' p={1} border='1px solid' borderColor='lightGreen'>
      <Text fontSize={2} fontWeight={600} letterSpacing={2} color='darkGreen' bg='white' textAlign='center'>新品上市</Text>
    </Box>
  </div>
)

export default CategoryList
