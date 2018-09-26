import styled from 'styled-components'
import { space } from 'styled-system'

const Container = styled.div`
  max-width: 10rem;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[2]};
  ${space}
`
Container.propTypes = {
  ...space.propTypes
}

Container.displayName = 'Container'

export default Container
