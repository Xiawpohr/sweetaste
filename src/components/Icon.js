import React from 'react'
import styled from 'styled-components'
import { display } from 'styled-system'
import ArrowForward from './icons/ArrowForward.js'
import Cart from './icons/Cart.js'
import Delete from './icons/Delete.js'
import Email from './icons/Email.js'
import Facebook from './icons/Facebook.js'
import Favorite from './icons/Favorite.js'
import Line from './icons/Line.js'
import LogoAll from './icons/LogoAll.js'
import LogoDark from './icons/LogoDark.js'
import LogoLight from './icons/LogoLight.js'
import LogoType from './icons/LogoType.js'
import Menu from './icons/Menu.js'

const Icon = (props) => {
  switch (props.name) {
    case 'ArrowForward':
      return <ArrowForward {...props} />
    case 'Cart':
      return <Cart {...props} />
    case 'Delete':
      return <Delete {...props} />
    case 'Email':
      return <Email {...props} />
    case 'Facebook':
      return <Facebook {...props} />
    case 'Favorite':
      return <Favorite {...props} />
    case 'Line':
      return <Line {...props} />
    case 'LogoAll':
      return <LogoAll {...props} />
    case 'LogoDark':
      return <LogoDark {...props} />
    case 'LogoLight':
      return <LogoLight {...props} />
    case 'LogoType':
      return <LogoType {...props} />
    case 'Menu':
      return <Menu {...props} />
    default:
  }
}

const styledIcon = styled(Icon)`
  ${display}
`

export default styledIcon
