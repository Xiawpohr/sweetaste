import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Button from '../styles/Button.js'
import Text from '../styles/Text.js'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.add = this.add.bind(this)
    this.substract = this.substract.bind(this)
  }

  add () {
    this.setState({
      value: this.state.value + 1
    })
  }

  substract () {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1
      })
    }
  }

  render () {
    return (
      <Flex>
        <Box width={48} height={48} border='1px solid' borderColor='lightGreen'>
          <Button width={1} p={12} bg='white' onClick={this.substract}>
            <Text fontSize={0} fontWeight={200} color='darkGreen' textAlign='center'>
              -
            </Text>
          </Button>
        </Box>
        <Box width={48} height={48} ml='-1px' border='1px solid' borderColor='lightGreen'>
          <Flex p={12} justifyContent='center' alignItems='center'>
            <Text fontSize={0} fontWeight={200} color='darkGreen' textAlign='center'>
              {this.state.value}
            </Text>
          </Flex>
        </Box>
        <Box width={48} height={48} ml='-1px' border='1px solid' borderColor='lightGreen'>
          <Button width={1} p={12} bg='white' onClick={this.add}>
            <Text fontSize={0} fontWeight={200} color='darkGreen' textAlign='center'>
              +
            </Text>
          </Button>
        </Box>
      </Flex>
    )
  }
}

export default Counter
