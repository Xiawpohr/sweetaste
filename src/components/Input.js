import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Icon from '../styles/Icon.js'
import PlainInput from '../styles/PlainInput.js'

const Input = (props) => (
  <Box bg='lightGreen' maxWidth={props.maxWidth}>
    <Flex p={1} alignItems='center'>
      { props.icon && <Icon mr={1} name={props.icon} /> }
      <PlainInput {...props} />
    </Flex>
  </Box>
)

export default Input
