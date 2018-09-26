import React from 'react'

const Facebook = ({
  style = {},
  fill = '#3F5D45',
  width = '32',
  className = '',
  viewBox = '0 0 32 32'
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
    <path fill={fill} d="M30.786,0H1.3A1.326,1.326,0,0,0,0,1.3V30.6A1.349,1.349,0,0,0,1.3,32H17.047V20H13.036V15h4.011V11c0-4.1,2.607-6.2,6.318-6.2,1.805,0,3.309.2,3.71.2V9.3H24.468c-2.006,0-2.507,1-2.507,2.4V15h5.014l-1,5H21.961l.1,12h8.624a1.326,1.326,0,0,0,1.3-1.3V1.3A1.182,1.182,0,0,0,30.786,0Z"/>
  </svg>
)

export default Facebook
