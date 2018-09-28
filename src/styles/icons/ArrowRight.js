import React from 'react'

const ArrowRight = ({
  style = {},
  fill = '#3F5D45',
  width = '24',
  className = '',
  viewBox = '0 0 24 24'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path fill={fill} d="M10 17l5-5-5-5v10z"/>
  </svg>
)

export default ArrowRight
