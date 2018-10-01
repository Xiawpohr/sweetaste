import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'

const PaginationItem = ({ children, active }) => (
  <Box
    m='-.5px'
    width={60}
    height={60}
    border='1px solid'
    borderColor={active ? 'darkGreen' : 'lightGreen'}
    bg={active && 'darkGreen'}
    color={active ? 'lightGreen' : 'darkGreen'}
  >
    <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
      {children}
    </Flex>
  </Box>
)

export default PaginationItem
