import * as types from '../actions/actionTypes.js'
import cartItems from '../seeds/cartItems.js'

const cartState = {
  items: [...cartItems],
  deliveryFee: 300
}

export default (state = cartState, action) => {
  switch (action.type) {
    case types.UPDATE_ITEM_QUANTITY:
      const newItems = state.items.map(item => {
        return item.id === action.id
          ? { ...item, quantity: action.quantity }
          : { ...item }
      })
      return { ...state, items: newItems }
    default:
      return state
  }
}
