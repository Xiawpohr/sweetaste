import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../styles/Icon.js'
import Container from '../styles/Container.js'
import Flex from '../styles/Flex.js'
import NavLink from '../styles/NavLink.js'

const Header = () => (
  <header>
    <Container>
      <Flex py={3} justifyContent='space-between' alignItems='center'>
        <Icon name='Menu' display={['block', 'none']} />
        <Link to='/'>
          <Icon name='LogoType' width='114.14' height='17.74' display={['block', 'none']} />
        </Link>
        <Flex
          display={['none', 'flex']}
          justifyContent='space-between'
          alignItems='center'
          flex='1'
          mr={4}
        >
          <Link to='/'><Icon name='LogoAll' /></Link>
          <div>
            <NavLink to='/'>首頁</NavLink>
            <NavLink to='/products'>甜點</NavLink>
            <NavLink to='/login'>登入</NavLink>
          </div>
        </Flex>
        <Link to='/cart'><Icon name='Cart' /></Link>
      </Flex>
    </Container>
  </header>
)

export default Header
