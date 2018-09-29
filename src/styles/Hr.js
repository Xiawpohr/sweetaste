import styled from 'styled-components'
import { display, color } from 'styled-system'

const Hr = styled.hr`
  ${display}
  ${color}
  height: 1px;
  margin: 0;
  border: none;
`

Hr.defaultProps = {
  bg: 'lightGreen'
}

Hr.propTypes = {
  ...display.propTypes,
  ...color.propTypes
}

Hr.displayName = 'Hr'

export default Hr
