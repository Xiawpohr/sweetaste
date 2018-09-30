import React from 'react'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Icon from '../styles/Icon.js'
import Position from '../styles/Position.js'
import Hr from '../styles/Hr.js'

const FormStepper = ({ color, completedSteps }) => (
  <div>
    <Position position='relative' top={10}>
      <Flex px={10}>
        <Box px={10} flex={1}>
          <Hr bg={color}/>
        </Box>
        <Box px={10} flex={1}>
          <Hr bg={color}/>
        </Box>
      </Flex>
    </Position>
    <Position position='relative'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box width={20} height={20} border='1px solid' borderColor={color} borderRadius='50%'>
          {completedSteps === 0 && <Box m='2px' width={14} height={14} bg={color} borderRadius='50%'/>}
          {completedSteps >= 1 && <Icon name='Check' mt='-2px' ml='-2px' width={22} color={color}/>}
        </Box>
        <Box width={20} height={20} border='1px solid' borderColor={color} borderRadius='50%'>
          {completedSteps === 1 && <Box m='2px' width={14} height={14} bg={color} borderRadius='50%'/>}
          {completedSteps >= 2 && <Icon name='Check' mt='-2px' ml='-2px' width={22} color={color}/>}
        </Box>
        <Box width={20} height={20} border='1px solid' borderColor={color} borderRadius='50%'>
          {completedSteps === 2 && <Box m='2px' width={14} height={14} bg={color} borderRadius='50%'/>}
          {completedSteps >= 3 && <Icon name='Check' mt='-2px' ml='-2px' width={22} color={color}/>}
        </Box>
      </Flex>
    </Position>
  </div>
)

FormStepper.defaultProps = {
  color: 'darkGreen',
  completedSteps: 0
}

export default FormStepper
