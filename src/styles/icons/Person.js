import React from 'react'

const Person = ({
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
    <path fill={fill} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
)

export default Person
