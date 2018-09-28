import styled from 'styled-components'
import { backgroundImage, color, height } from 'styled-system'

const Background = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${backgroundImage}
  ${color}
  ${height}
`

Background.propTypes = {
  ...backgroundImage.propTypes,
  ...color.propTypes,
  ...height.propTypes
}

Background.displayName = 'Background'

export default Background
