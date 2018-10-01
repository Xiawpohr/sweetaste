import React from 'react'
import { connect } from 'react-redux'
import Mobile from './Mobile.js'
import Desktop from './Desktop.js'
import CartItem from './CartItem.js'
import Container from '../styles/Container.js'
import Box from '../styles/Box.js'
import Text from '../styles/Text.js'
import Hr from '../styles/Hr.js'

const CartContent = ({ items }) => (
  <div>
    <Mobile>
      <Text py={1} fontSize={2} fontWeight={600} color='darkGreen' bg='lightGreen' textAlign='center'>您的購物車</Text>
      <Container>
        <Box pt={3}>
          {items.map(({ id, name, price, quantity, image }) => (
            <Box pb={3} key={id}>
              <CartItem name={name} price={price} quantity={quantity} image={image}/>
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
            <CartItem name={name} price={price} quantity={quantity} image={image}/>
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

export default connect(mapStateToProps)(CartContent)
