import styled from 'styled-components'

const Grid = styled.div`
  margin: ${props => -(props.gap / 200)}rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;

  > * {
    margin: ${props => props.gap / 200}rem; 
  }
`

Grid.defaultProps = {
  gap: 30
}

Grid.displayName = 'Grid'

export default Grid
