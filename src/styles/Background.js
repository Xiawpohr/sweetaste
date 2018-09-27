import styled from 'styled-components'
import { background, color } from 'styled-system'

const Background = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${background}
  ${color}
`

Background.propTypes = {
  ...background.propTypes,
  ...color.propTypes
}

Background.displayName = 'Background'

export default Background
