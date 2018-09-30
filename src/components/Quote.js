import React from 'react'
import Text from '../styles/Text.js'

const Quote = (props) => (
  <Text {...props}>
    {props.firstLine}<span style={{ letterSpacing: 0 }}>——</span><br/>
    <span style={{ marginTop: props.fontSize / 2 }}>{props.secondLine}</span>
  </Text>
)

Quote.defaultProps = {
  fontSize: 34,
  fontWeight: 700,
  letterSpacing: 10,
  lineHeight: 1.6,
  fontFamily: '"YuMincho +36p Kana"',
  color: 'darkGreen',
  mode: 'vertical-rl'
}
export default Quote
