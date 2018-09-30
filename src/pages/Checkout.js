import React from 'react'
import Mobile from '../components/Mobile.js'
import Desktop from '../components/Desktop.js'
import CheckoutForm from '../components/CheckoutForm.js'

const Checkout = () => (
  <div>
    <Mobile>
      <CheckoutForm />
    </Mobile>
    <Desktop>
      
    </Desktop>
  </div>
)

export default Checkout
