import React from 'react'
import { connect } from 'react-redux'
import { updateItemQuantity, removeItem } from '../actions/cart.js'
import Mobile from './Mobile.js'
import Desktop from './Desktop.js'
import CartItem from './CartItem.js'
import Container from '../styles/Container.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import Hr from '../styles/Hr.js'

const CartContent = ({ items, updateItemQuantity, removeItem }) => (
  <div>
    <Mobile>
      <Text py={1} fontSize={2} fontWeight={600} color='darkGreen' bg='lightGreen' textAlign='center'>您的購物車</Text>
      <Container>
        <Box pt={3}>
          {items.map(({ id, name, price, quantity, image }) => (
            <Box pb={3} key={id}>
              <CartItem
                name={name}
                price={price}
                quantity={quantity}
                image={image}
                updateQuantity={(value) => updateItemQuantity(id, value)}
                removeItem={() => removeItem()}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Mobile>
    <Desktop>
      <Text mb={10} py={1} fontSize={2} fontWeight={600} color='darkGreen' bg='lightGreen' textAlign='center'>您的購物車</Text>
      {items.map(({ id, name, price, quantity, image }, index, items) => (
        <div key={id}>
          <Box py={2}>
            <CartItem
              name={name}
              price={price}
              quantity={quantity}
              image={image}
              updateQuantity={(value) => updateItemQuantity(id, value)}
              removeItem={() => removeItem(id)}
            />
          </Box>
          {index + 1 !== items.length && <Hr />}
        </div>
      ))}
    </Desktop>
  </div>
)

const mapStateToProps = state => ({
  items: state.cart.items
})

const mapDispatchToProps = dispatch => ({
  updateItemQuantity: (id, quantity) => dispatch(updateItemQuantity(id, quantity)),
  removeItem: (id) => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContent)
