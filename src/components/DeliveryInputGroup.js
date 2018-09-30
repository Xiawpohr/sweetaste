import React from 'react'
import Input from './Input.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

class DeliveryInputGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Flex mb={1} justifyContent='space-between'>
          <Box mr={0} flex={1}>
            <Text mb={0} fontSize={1} color='lightGreen'>姓氏</Text>
            <Input placeholder='王'/>
          </Box>
          <Box flex={1}>
            <Text mb={0} fontSize={1} color='lightGreen'>名字</Text>
            <Input placeholder='小明'/>
          </Box>
        </Flex>
        <Flex mb={1}>
          <Box flex={1}>
            <Text mb={0} fontSize={1} color='lightGreen'>電話</Text>
            <Input placeholder='0912-345-678'/>
          </Box>
        </Flex>
        <Text mb={0} fontSize={1} color='lightGreen'>地址</Text>
        <Flex mb={0} justifyContent='space-between'>
          <Box mr={0} flex={1}>
            <Input placeholder='高雄市'/>
          </Box>
          <Box flex={1}>
            <Input placeholder='新興區'/>
          </Box>
        </Flex>
        <Input placeholder='幸福路 520 號'/>
      </div>
    )
  }
}

export default DeliveryInputGroup
