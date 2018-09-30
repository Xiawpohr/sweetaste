import React from 'react'
import Position from '../styles/Position.js'
import Background from '../styles/Background.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'

class CategoryHeroItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHover: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter () {
    this.setState({
      isHover: true
    })
  }

  handleMouseLeave () {
    this.setState({
      isHover: false
    })
  }

  render () {
    const { title, backgroundImage } = this.props
    const { isHover } = this.state
    return (
      <Position
        position='relative'
        style={{ overflow: 'hidden' }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Background height={256} backgroundImage={backgroundImage} style={{ filter: 'blur(5px)' }} />
        <Position position='absolute' top={0} left={0} style={{ width: '100%' }}>
          <Box height={256} opacity={0.8} bg={isHover ? 'yellow' : 'darkGreen'}>
            <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
              <Text fontSize={2} fontWeight={isHover ? 600 : 200} letterSpacing={4} color={isHover ? 'darkGreen' : 'white'} mode='vertical-rl'>
                {title}
              </Text>
            </Flex>
          </Box>
        </Position>
      </Position>
    )
  }
}

export default CategoryHeroItem
