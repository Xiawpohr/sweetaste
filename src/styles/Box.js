import styled from 'styled-components'
import {
  space,
  maxWidth,
  width,
  height,
  color,
  display
} from 'styled-system'

const Box = styled.div`
  ${space}
  ${maxWidth}
  ${width}
  ${height}
  ${color}
  ${display}
`

Box.propTypes = {
  ...space.propTypes,
  ...maxWidth.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...display.propTypes
}

Box.displayName = 'Box'

export default Box
