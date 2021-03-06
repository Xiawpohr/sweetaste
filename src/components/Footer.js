import React from 'react'
import Quote from './Quote.js'
import Background from '../styles/Background.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import Icon from '../styles/Icon.js'
import Button from '../styles/Button.js'
import Input from './Input.js'

const Footer = () => (
  <footer>
    <Background bg='darkGreen'>
      <Container maxWidth='8.4rem'>
        <Flex py={3} flexDirection={['column', 'row']} justifyContent='space-between' alignItems={['stretch', 'center']} flexWrap='wrap'>
          <Flex mb={[3, '0px']} justifyContent='center' alignItems='center'>
            <Icon name='LogoLight' />
            <Text ml={2} fontSize={2} color='lightGreen' fontFamily='Helvetica Neue'>訂閱你我的甜蜜郵件</Text>
          </Flex>
          <Flex>
            <Input type='text' icon='Email' width={1} />
            <Button><Icon name='ArrowForward' /></Button>
          </Flex>
        </Flex>
      </Container>
    </Background>
    <Background bg='lightGreen'>
      <Container maxWidth='8.4rem'>
        <Flex py={3} justifyContent='space-between'>
          <Flex flexDirection='column' justifyContent='space-between'>
            <Icon mt={0} name="LogoType" />
            <Text mt={4} fontSize={0} fontFamily='"Helvetica Neue"' color='darkGreen' lineHeight={1.5}>
              07-1234-5678<br/>
              sweetaste@email.com<br/>
              800 高雄市新興區幸福路 520 號
            </Text>
          </Flex>
          <Box display={['none', 'block']} width={70} >
            <Quote firstLine='今天是個' secondLine='吃甜點的好日子。' fontSize={22} letterSpacing={6}/>
          </Box>
        </Flex>
        <Flex pb={3} justifyContent='space-between' alignItems='flex-end' flexWrap='wrap'>
          <div>
            <Icon name='Line' />
            <Icon name='Facebook' ml={0} />
          </div>
          <Text mt={1} fontSize={0} fontFamily='Times' color='darkGreen' letterSpacing={0.5}>© 2018 Sweetaste* All Rights Reserved</Text>
        </Flex>
      </Container>
    </Background>
  </footer>
)

export default Footer
