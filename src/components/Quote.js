import React from 'react'
import Text from '../styles/Text.js'

const Quote = ({ firstLine, secondLine, fontSize }) => (
  <Text
    fontSize={22}
    fontWeight={600}
    fontFamily='"YuMincho +36p Kana"'
    color='darkGreen'
    letterSpacing={5}
    mode='vertical-rl'
  >
    {firstLine}<span style={{ letterSpacing: 0 }}>——</span><br/>
    <span style={{ marginTop: 10 }}>{secondLine}。</span>
  </Text>
)

export default Quote
