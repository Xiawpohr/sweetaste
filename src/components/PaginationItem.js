import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'

const PaginationItem = ({ children }) => (
  <Box m='-.5px' width={60} height={60} border='1px solid' borderColor='lightGreen'>
    <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
      {children}
    </Flex>
  </Box>
)

export default PaginationItem
