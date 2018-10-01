import cartItems from '../seeds/cartItems.js'

const cartState = {
  items: [...cartItems],
  deliveryFee: 300
}

export default (state = cartState, action) => {
  return state
}
