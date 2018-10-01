export default (cartItems) => {
  return cartItems.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
}
