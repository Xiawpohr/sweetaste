import styled from 'styled-components'
import { space, maxWidth } from 'styled-system'

const Container = styled.div`
  ${space}
  ${maxWidth}
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[3]};
`
Container.propTypes = {
  ...space.propTypes,
  ...maxWidth.propTypes
}

Container.defaultProps = {
  maxWidth: '10rem'
}

Container.displayName = 'Container'

export default Container
