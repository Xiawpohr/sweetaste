import styled from 'styled-components'
import {
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  flex,
  space,
  display
} from 'styled-system'

const Flex = styled.div`
  height: ${props => props.fillHeight && '100%'};
  display: flex;
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignItems}
  ${alignContent}
  ${flex}
  ${space}
  ${display}
`

Flex.propTypes = {
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...justifyContent.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes
}

Flex.displayName = 'Flex'

export default Flex
