import styled from 'styled-components'
import { space, maxWidth } from 'styled-system'

const Container = styled.div`
  ${space}
  ${maxWidth}
`
Container.propTypes = {
  ...space.propTypes,
  ...maxWidth.propTypes
}

Container.defaultProps = {
  maxWidth: '10rem',
  m: '0 auto',
  p: '0 .3rem'
}

Container.displayName = 'Container'

export default Container
