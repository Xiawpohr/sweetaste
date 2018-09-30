import React from 'react'
import { withRouter } from 'react-router-dom'
import FormStepper from './FormStepper.js'
import DeliveryInputGroup from './DeliveryInputGroup.js'
import PaymentInputGroup from './PaymentInputGroup.js'
import InvoiceInputGroup from './InvoiceInputGroup.js'
import Flex from '../styles/Flex.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import Button from '../styles/Button.js'

class CheckoutForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 1
    }
    this.nextStep = this.nextStep.bind(this)
    this.handleButton = this.handleButton.bind(this)
  }

  nextStep () {
    this.setState({
      step: this.state.step + 1
    })
  }

  handleButton () {
    if (this.state.step < 3) {
      this.nextStep()
    } else {
      this.props.history.push('/checkout-success')
    }
  }

  render () {
    const formSteps = [
      { title: '運送', inputs: <DeliveryInputGroup />, btnText: '下一步' },
      { title: '付款', inputs: <PaymentInputGroup />, btnText: '下一步' },
      { title: '發票', inputs: <InvoiceInputGroup />, btnText: '確認結帳' }
    ]
    const formStep = formSteps[this.state.step - 1]
    return (
      <div>
        <Box px={4} py={3} bg='darkGreen'>
          <Flex mb={3} justifyContent='space-between' alignItems='flex-end'>
            <Box mr={0} flex={1}>
              <Text fontSize={3} fontWeight={500} color='lightGreen'>{formStep.title}</Text>
            </Box>
            <Box flex={1}>
              <FormStepper completedSteps={this.state.step - 1} color='lightGreen'/>
            </Box>
          </Flex>
          {formStep.inputs}
        </Box>
        <Button width={1} onClick={this.handleButton}>
          <Text fontSize={2} fontWeight={500} color='darkGreen' textAlign='center'>{formStep.btnText}</Text>
        </Button>
      </div>
    )
  }
}

export default withRouter(CheckoutForm)
