import styled from 'styled-components'
import {
  position,
  zIndex,
  top,
  right,
  bottom,
  left
} from 'styled-system'

const Position = styled.div`
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
`

Position.propTypes = {
  ...position.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes
}

Position.displayName = 'Position'

export default Position
