import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLink = styled(Link)`
  padding: 0 ${props => props.theme.space[2]};
  text-decoration: none;
  color: ${props => props.theme.colors.darkGreen};
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 1.375;
`

NavLink.displayName = 'NavLink'

export default NavLink
