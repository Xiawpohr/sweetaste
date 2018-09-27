import styled from 'styled-components'
import {
  space,
  width,
  height,
  color,
  display
} from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${display}
`

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...display.propTypes
}

Box.displayName = 'Box'

export default Box
