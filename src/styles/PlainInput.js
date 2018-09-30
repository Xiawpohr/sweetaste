import styled from 'styled-components'

const PlainInput = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  background-color: unset;
  border: none;
  color: ${props => props.theme.colors.green};

  &:focus {
    outline: none;
    border: none;
  }
`

PlainInput.displayName = 'PlainInput'

export default PlainInput
