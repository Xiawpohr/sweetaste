import React from 'react'
import Mobile from '../components/Mobile'
import Desktop from '../components/Desktop'
import CartContent from '../components/CartContent.js'
import CartSummary from '../components/CartSummary.js'

const Cart = () => (
  <div>
    <Mobile>
      <CartContent />
      <CartSummary />
    </Mobile>
    <Desktop>

    </Desktop>
  </div>
)

export default Cart
