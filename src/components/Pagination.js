import React from 'react'
import PaginationItem from './PaginationItem.js'
import Flex from '../styles/Flex.js'
import Text from '../styles/Text.js'
import Icon from '../styles/Icon.js'

const Pagination = () => (
  <Flex alignItems='start'>
    <PaginationItem>
      <Icon name='ArrowLeft' />
    </PaginationItem>
    <PaginationItem active>
      <Text fontSize={1} fontWeight={200} textAlign='center'>
        1
      </Text>
    </PaginationItem>
    <PaginationItem>
      <Text fontSize={1} fontWeight={200} textAlign='center'>
        2
      </Text>
    </PaginationItem>
    <PaginationItem>
      <Text fontSize={1} fontWeight={200} textAlign='center'>
        3
      </Text>
    </PaginationItem>
    <PaginationItem>
      <Icon name='ArrowRight' />
    </PaginationItem>
  </Flex>
)

export default Pagination
