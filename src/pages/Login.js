import React from 'react'
import Desktop from '../components/Desktop.js'
import Mobile from '../components/Mobile.js'
import Input from '../components/Input.js'
import Background from '../styles/Background.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import Button from '../styles/Button.js'
import Checkbox from '../styles/Checkbox.js'

const Login = () => (
  <div>
    <Mobile>
      <Background bg='darkGreen'>
        <Text py={3} fontSize={3} color='lightGreen' textAlign='center'>會員登入</Text>
      </Background>
      <Background bg='lightGreen'>
        <Container>
          <Flex py={3}>
            <Box p={2} flex={1} bg='white'>
              <Text color='green' textAlign='center'>Facebook</Text>
            </Box>
            <Box ml='1px' p={2} flex={1} bg='white'>
              <Text color='green' textAlign='center'>Google</Text>
            </Box>
            <Box ml='1px' p={2} flex={1} bg='white'>
              <Text color='green' textAlign='center'>Yahoo!</Text>
            </Box>
          </Flex>
        </Container>
      </Background>
      <Background bg='darkGreen'>
        <Container>
          <Flex py={3} flexDirection='column'>
            <Input placeholder='電子信箱/手機號碼' icon='Person' />
            <Input my={1} placeholder='請輸入使用者密碼' icon='Key' />
            <Flex alignItems='center'>
              <Checkbox />
              <Text ml={0} fontSize={0} color='lightGreen'>記住我</Text>
            </Flex>
          </Flex>
        </Container>
      </Background>
      <Button width={1}>
        <Text fontSize={2} color='darkGreen'>登入帳號</Text>
      </Button>
    </Mobile>
    <Desktop>
      <Container maxWidth='8.4rem'>
        <Flex mb={3} py={3} alignItems='center'>
          <Box flex={1}>
            <Background bg='darkGreen'>
              <Flex p={3} flexDirection='column'>
                <Text pt={10} pb={40} fontSize={3} color='lightGreen' textAlign='center'>會員登入</Text>
                <Input placeholder='電子信箱/手機號碼' icon='Person' />
                <Input my={1} placeholder='請輸入使用者密碼' icon='Key' />
                <Flex alignItems='center'>
                  <Checkbox />
                  <Text ml={0} fontSize={0} color='lightGreen'>記住我</Text>
                </Flex>
              </Flex>
            </Background>
            <Button width={1}>
              <Text fontSize={2} color='darkGreen'>登入帳號</Text>
            </Button>
          </Box>
          <Box flex={1}>
            <Background bg='lightGreen'>
              <Flex p={3} flexDirection='column'>
                <Text py={10} fontSize={2} color='green' textAlign='center'>—— 連結社群帳號 ——</Text>
                <Flex py={10} flexDirection='column'>
                  <Box my={8} p={1} bg='white'>
                    <Text color='green' textAlign='center'>Facebook</Text>
                  </Box>
                  <Box my={8} p={1} bg='white'>
                    <Text color='green' textAlign='center'>Google</Text>
                  </Box>
                  <Box my={8} p={1} bg='white'>
                    <Text color='green' textAlign='center'>Yahoo!</Text>
                  </Box>
                </Flex>
              </Flex>
            </Background>
          </Box>
        </Flex>
      </Container>
    </Desktop>
  </div>
)

export default Login
