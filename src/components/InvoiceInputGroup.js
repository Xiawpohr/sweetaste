import React from 'react'
import Input from './Input.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

class InvoiceInputGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
    this.switchTo = this.switchTo.bind(this)
  }

  switchTo () {
    if (this.state.tabIndex === 0) {
      this.setState({
        tabIndex: 1
      })
    } else {
      this.setState({
        tabIndex: 0
      })
    }
  }

  render () {
    const tabIndex = this.state.tabIndex
    return (
      <div>
        <Flex mb={3}>
          <Box onClick={this.switchTo} clickable flex={1} py={14} bg={tabIndex === 0 ? 'lightGreen' : 'darkGreen'} border='1px solid' borderColor='lightGreen'>
            <Text fontSize={1} color={tabIndex === 0 ? 'darkGreen' : 'lightGreen'} textAlign='center'>電子發票</Text>
          </Box>
          <Box onClick={this.switchTo} clickable flex={1} py={14} bg={tabIndex === 1 ? 'lightGreen' : 'darkGreen'} border='1px solid' borderColor='lightGreen'>
            <Text fontSize={1} color={tabIndex === 1 ? 'darkGreen' : 'lightGreen'} textAlign='center'>郵寄發票</Text>
          </Box>
        </Flex>
        {tabIndex === 0 ? (
          <div>
            <Text mb={0} fontSize={1} color='lightGreen'>電子郵件信箱</Text>
            <Input mb={1} placeholder='example@email.com'/>
          </div>
        ) : (
          <div>
            <Text mb={0} fontSize={1} color='lightGreen'>地址</Text>
            <Flex mb={0} justifyContent='space-between'>
              <Box mr={0} flex={1}>
                <Input placeholder='高雄市'/>
              </Box>
              <Box flex={1}>
                <Input placeholder='新興區'/>
              </Box>
            </Flex>
            <Input mb={1} placeholder='幸福路 520 號'/>
          </div>
        )}
        <Text mb={0} fontSize={1} color='lightGreen'>統一編號（選填）</Text>
        <Input placeholder='12345678'/>
      </div>
    )
  }
}

export default InvoiceInputGroup
