import styled from 'styled-components'
import { width, color, borders, space } from 'styled-system'
import { Link } from 'react-router-dom'

const BtnLink = styled(Link)`
  ${width}
  ${color}
  ${borders}
  ${space}
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

BtnLink.defaultProps = {
  p: 1,
  border: 'none',
  color: 'darkGreen',
  bg: 'yellow'
}

BtnLink.propTypes = {
  ...width.propTypes,
  ...color.propTypes,
  ...borders.propsTypes,
  ...space.propTypes
}

BtnLink.displayName = 'BtnLink'

export default BtnLink
