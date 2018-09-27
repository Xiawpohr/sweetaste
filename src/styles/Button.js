import styled from 'styled-components'

const Button = styled.button`
  padding: ${props => props.theme.space[1]};
  border: none;
  color: ${props => props.theme.colors.darkGreen};
  background-color: ${props => props.theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: cneter;
`

Button.displayName = 'Button'

export default Button
