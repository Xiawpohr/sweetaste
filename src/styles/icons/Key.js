import React from 'react'

const Key = ({
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
    <path fill={fill} d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
)

export default Key
