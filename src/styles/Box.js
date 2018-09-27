import styled from 'styled-components'
import {
  space,
  maxWidth,
  width,
  height,
  color,
  display,
  flex,
  alignSelf,
  justifySelf,
  order
} from 'styled-system'

const Box = styled.div`
  ${space}
  ${maxWidth}
  ${width}
  ${height}
  ${color}
  ${display}
  ${flex}
  ${alignSelf}
  ${justifySelf}
  ${order}
`

Box.propTypes = {
  ...space.propTypes,
  ...maxWidth.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...alignSelf.propTypes,
  ...justifySelf.propTypes,
  ...order.propTypes
}

Box.displayName = 'Box'

export default Box
