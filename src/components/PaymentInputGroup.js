import React from 'react'
import Input from './Input.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

class PaymentInputGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Flex mb={1}>
          <Box flex={1}>
            <Text mb={0} fontSize={1} color='lightGreen'>信用卡卡號</Text>
            <Input placeholder='9012-3456-7890-1234'/>
          </Box>
        </Flex>
        <Text mb={0} fontSize={1} color='lightGreen'>持卡人姓名</Text>
        <Flex mb={1} justifyContent='space-between'>
          <Box mr={0} flex={1}>
            <Input placeholder='王'/>
          </Box>
          <Box flex={1}>
            <Input placeholder='小明'/>
          </Box>
        </Flex>
        <Text mb={0} fontSize={1} color='lightGreen'>有效期限</Text>
        <Flex mb={1} justifyContent='space-between'>
          <Box mr={0} flex={1}>
            <Input placeholder='月'/>
          </Box>
          <Box flex={1}>
            <Input placeholder='年'/>
          </Box>
        </Flex>
        <Text mb={0} fontSize={1} color='lightGreen'>背面末三碼</Text>
        <Flex mb={1} justifyContent='space-between'>
          <Box mr={0} flex={1}>
            <Input placeholder='123'/>
          </Box>
          <Box flex={1} />
        </Flex>
      </div>
    )
  }
}

export default PaymentInputGroup
