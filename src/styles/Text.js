import styled from 'styled-components'
import {
  space,
  color,
  display,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign
} from 'styled-system'

const Text = styled.div`
  ${space}
  ${color}
  ${display}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${textAlign}
  writing-mode: ${props => props.mode};
`
Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...textAlign.propTypes
}

Text.displayName = 'Text'

export default Text
