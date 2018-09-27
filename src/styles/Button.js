import styled from 'styled-components'
import { width } from 'styled-system'

const Button = styled.button`
  ${width}
  padding: ${props => props.theme.space[1]};
  border: none;
  color: ${props => props.theme.colors.darkGreen};
  background-color: ${props => props.theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: cneter;
`

Button.propTypes = {
  ...width.propTypes
}

Button.displayName = 'Button'

export default Button
