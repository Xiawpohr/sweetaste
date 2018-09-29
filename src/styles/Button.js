import styled from 'styled-components'
import { width, color, borders, space } from 'styled-system'

const Button = styled.button`
  ${width}
  ${color}
  ${borders}
  ${space}
  display: flex;
  justify-content: center;
  align-items: center;
`

Button.defaultProps = {
  p: 1,
  border: 'none',
  color: 'darkGreen',
  bg: 'yellow'
}

Button.propTypes = {
  ...width.propTypes,
  ...color.propTypes,
  ...borders.propsTypes,
  ...space.propTypes
}

Button.displayName = 'Button'

export default Button
