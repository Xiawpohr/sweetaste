import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Icon from '../styles/Icon.js'
import Position from '../styles/Position.js'
import Hr from '../styles/Hr.js'

class FormStepper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      completedSteps: 0
    }
  }

  render () {
    return (
      <div>
        <Position position='relative' top={10}>
          <Hr bg='darkGreen'/>
        </Position>
        <Position position='relative'>
          <Flex justifyContent='space-between' alignItems='center'>
            <Box width={20} height={20} bg='darkGreen' border='1px solid' borderColor='darkgreen' borderRadius='50%'>
              <Icon name='Check' mt='-1px' ml='-1px' width={20} fill='white'/>
            </Box>
            <Box width={20} height={20} bg='darkGreen' border='1px solid' borderColor='darkgreen' borderRadius='50%'>
              <Icon name='Check' mt='-1px' ml='-1px' width={20} fill='white'/>
            </Box>
            <Box width={20} height={20} bg='darkGreen' border='1px solid' borderColor='darkgreen' borderRadius='50%'>
              <Icon name='Check' mt='-1px' ml='-1px' width={20} fill='white'/>
            </Box>
          </Flex>
        </Position>
      </div>
    )
  }
}

export default FormStepper
