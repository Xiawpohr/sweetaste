import styled from 'styled-components'

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  appearance: none;
  width: 0.16rem;
  height: 0.16rem;
  background-color: ${props => props.theme.colors.lightGreen};

  &:focus {
    border: none;
    outline: none;
  }
  
  &:checked {
    background-color: ${props => props.theme.colors.yellow}
  }

`

export default Checkbox
