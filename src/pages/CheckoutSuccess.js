import React from 'react'
import Mobile from '../components/Mobile.js'
import Desktop from '../components/Desktop.js'
import FormStepper from '../components/FormStepper.js'
import Background from '../styles/Background.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import Button from '../styles/Button.js'
import picnicTable from '../images/picnic-table.jpg'

const CheckoutSuccess = () => (
  <div>
    <Mobile>
      <Background height={518} backgroundImage={`url(${picnicTable})`}>
        <Flex flexDirection='column' justifyContent='center' alignItems='center' fillHeight>
          <Box mb={3} width={190}>
            <FormStepper completedSteps={3}/>
          </Box>
          <Text fontSize={4} fontWeight={700} fontFamily='"YuMincho +36p Kana"' color='darkGreen'>付款成功</Text>
        </Flex>
      </Background>
      <Button width={1}>
        <Text fontSize={2} fontWeight={500} color='darkGreen' textAlign='center'>繼續逛逛</Text>
      </Button>
    </Mobile>
    <Desktop>
      <Container mb={5}>
        <Background height={518} backgroundImage={`url(${picnicTable})`}>
          <Flex flexDirection='column' justifyContent='center' alignItems='center' fillHeight>
            <Box mb={3} width={190}>
              <FormStepper completedSteps={3}/>
            </Box>
            <Text mb={4} fontSize={4} fontWeight={700} fontFamily='"YuMincho +36p Kana"' color='darkGreen'>付款成功</Text>
            <Button width={300}>
              <Text fontSize={2} fontWeight={500} color='darkGreen' textAlign='center'>繼續逛逛</Text>
            </Button>
          </Flex>
        </Background>
      </Container>
    </Desktop>
  </div>
)

export default CheckoutSuccess
