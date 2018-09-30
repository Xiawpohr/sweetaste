import { combineReducers } from 'redux'
import products from './products.js'
import cart from './cart.js'

export default combineReducers({
  products,
  cart
})
