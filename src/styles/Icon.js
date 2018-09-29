import React from 'react'
import styled from 'styled-components'
import { space, display, color } from 'styled-system'
import ArrowForward from './icons/ArrowForward.js'
import ArrowLeft from './icons/ArrowLeft.js'
import ArrowRight from './icons/ArrowRight.js'
import Cart from './icons/Cart.js'
import Check from './icons/Check.js'
import Delete from './icons/Delete.js'
import Email from './icons/Email.js'
import Facebook from './icons/Facebook.js'
import Favorite from './icons/Favorite.js'
import Key from './icons/Key.js'
import Line from './icons/Line.js'
import LogoAll from './icons/LogoAll.js'
import LogoDark from './icons/LogoDark.js'
import LogoLight from './icons/LogoLight.js'
import LogoType from './icons/LogoType.js'
import Menu from './icons/Menu.js'
import Person from './icons/Person.js'

const Icon = (props) => {
  switch (props.name) {
    case 'ArrowForward':
      return <ArrowForward {...props} />
    case 'ArrowLeft':
      return <ArrowLeft {...props} />
    case 'ArrowRight':
      return <ArrowRight {...props} />
    case 'Cart':
      return <Cart {...props} />
    case 'Check':
      return <Check {...props} />
    case 'Delete':
      return <Delete {...props} />
    case 'Email':
      return <Email {...props} />
    case 'Facebook':
      return <Facebook {...props} />
    case 'Favorite':
      return <Favorite {...props} />
    case 'Key':
      return <Key {...props} />
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
    case 'Person':
      return <Person {...props} />
    default:
  }
}

const styledIcon = styled(Icon)`
  ${space}
  ${display}
  ${color}
  fill: currentColor;
`

styledIcon.propTypes = {
  ...space.propTypes,
  ...display.propTypes,
  ...color.propTypes
}

export default styledIcon
