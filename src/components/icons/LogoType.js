import React from 'react'

const Email = ({
  style = {},
  fill = '#3F5D45',
  width = '172.379',
  height = '27.754',
  className = '',
  viewBox = '0 0 172.379 27.754'
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path fill={fill} d="M-1.728.072l.5.108A1.428,1.428,0,0,1,.144-.972C2.016-.972,3.2.5,7.164.5c6.876,0,10.908-4,10.908-8.064,0-2.7-1.224-4.248-2.952-5.8l-3.2-2.88c-1.44-1.3-2.736-2.7-2.736-4.932,0-2.664,2.34-4.428,5.508-4.428,2.34,0,5.544,1.4,5.544,4.716a7.21,7.21,0,0,1-.324,2.124h.432l2.484-6.876-.54-.108a1.288,1.288,0,0,1-1.3.936c-1.62,0-3.168-1.3-6.3-1.3-5.148,0-9.324,3.06-9.324,6.984,0,2.628,1.3,4.5,3.564,6.552l2.556,2.34a5.748,5.748,0,0,1,2.16,4.464C13.644-2.34,11.2,0,6.984,0,4.32,0,.828-1.692.828-4.968A6.077,6.077,0,0,1,1.3-7.092H.828Zm38.052.4A10.393,10.393,0,0,1,37.908-1.44c.72-.72,1.332-1.26,2.448-2.2l1.8-1.476c2.448-1.98,5.328-4.716,5.328-7.992,0-1.368-.576-2.808-2.2-2.808a1.861,1.861,0,0,0-2.016,1.8c0,1.44.828,2.016.828,3.492,0,2.232-1.044,4.176-4.536,7.02a5.633,5.633,0,0,0-.684-2.052c-.792-1.656-1.8-4-1.8-5.616a5.572,5.572,0,0,1,2.124-4.5l-.324-.4-.72.576-.936.792a1.923,1.923,0,0,0-1.836-1.116,1.861,1.861,0,0,0-2.016,1.8c0,1.44.828,2.016.828,3.492,0,2.232-1.26,4.176-4.752,7.02a5.633,5.633,0,0,0-.684-2.052c-.792-1.656-1.8-4-1.8-5.616a5.572,5.572,0,0,1,2.124-4.5l-.324-.4-.72.576c-2.52,2.016-4.392,4.248-4.392,6.768a8.8,8.8,0,0,0,.972,3.348l.936,2.016a4.755,4.755,0,0,1,.648,2.016A3.26,3.26,0,0,1,25.776.216l.432.252A10.393,10.393,0,0,1,27.792-1.44c.72-.72,1.332-1.26,2.448-2.2l1.8-1.476c.684-.54,1.4-1.116,2.088-1.764.18.468.4.936.612,1.4l.936,2.016a4.755,4.755,0,0,1,.648,2.016A3.26,3.26,0,0,1,35.892.216ZM60.768-3.924c-.684.972-2.556,3.744-5.76,3.744-1.656,0-2.772-.828-2.772-3.168A17.2,17.2,0,0,1,53.244-8.5a11.415,11.415,0,0,0,1.512.072c1.908,0,8.6-.648,8.6-4.536,0-1.944-2.052-2.952-4.608-2.952-5.4,0-10.224,6.48-10.224,10.8,0,3.24,2.3,5.58,5.9,5.58,4.248,0,6.3-3.42,6.768-4.1Zm-.792-9.9c0,2.736-2.232,4.9-5.472,4.9A9.02,9.02,0,0,1,53.424-9c.792-2.484,2.7-6.408,5.184-6.408C59.436-15.408,59.976-14.868,59.976-13.824Zm16.38,9.9C75.672-2.952,73.8-.18,70.6-.18c-1.656,0-2.772-.828-2.772-3.168A17.206,17.206,0,0,1,68.832-8.5a11.415,11.415,0,0,0,1.512.072c1.908,0,8.6-.648,8.6-4.536,0-1.944-2.052-2.952-4.608-2.952-5.4,0-10.224,6.48-10.224,10.8,0,3.24,2.3,5.58,5.9,5.58,4.248,0,6.3-3.42,6.768-4.1Zm-.792-9.9c0,2.736-2.232,4.9-5.472,4.9A9.02,9.02,0,0,1,69.012-9c.792-2.484,2.7-6.408,5.184-6.408C75.024-15.408,75.564-14.868,75.564-13.824Zm5.148,9.468a6.077,6.077,0,0,0-.468,2.124c0,1.764,1.224,2.7,3.168,2.7A5.29,5.29,0,0,0,88.524-3.1l-.4-.18C87.7-2.268,86.436-.36,84.888-.36a1.06,1.06,0,0,1-1.116-1.116A6.654,6.654,0,0,1,84.24-3.6l4.1-11.34h3.744l.108-.5H88.488l1.3-3.528H86.076l-1.332,3.528h-3.1l-.144.5h3.1ZM109.44-15.444H105.7l-.684,1.872h-.036a2.374,2.374,0,0,0-2.412-2.34c-4.284,0-10.908,5.832-10.908,11.7,0,3.06,1.692,4.68,3.96,4.68,2.628,0,4.716-2.592,5.9-4.212h.072a7.263,7.263,0,0,0-.324,1.872c0,1.44,1.08,2.34,2.772,2.34A5.343,5.343,0,0,0,109.152-3.2l-.4-.18c-.252.576-1.44,3.024-3.2,3.024-.54,0-.792-.36-.792-.936a10.6,10.6,0,0,1,.756-3.24ZM102.06-5.58c-.5,1.476-3.636,5.292-5.544,5.292-.864,0-1.152-.576-1.152-1.98,0-4.068,3.708-12.96,7.272-12.96a1.9,1.9,0,0,1,1.908,2.16,8.439,8.439,0,0,1-.648,2.52Zm17.748-9.828c.828,0,1.26.468,1.26,1.044s-.612.9-.612,1.728a1.36,1.36,0,0,0,1.476,1.4,1.723,1.723,0,0,0,1.836-1.908c0-1.692-1.8-2.772-3.924-2.772-3.1,0-6.12,2.268-6.12,4.824a5.685,5.685,0,0,0,1.44,3.456l1.728,2.268a3.813,3.813,0,0,1,.864,2.592,2.993,2.993,0,0,1-3.168,2.736,1.548,1.548,0,0,1-1.764-1.584c0-.72.432-1.476.432-2.2A1.087,1.087,0,0,0,112.1-4.932a1.958,1.958,0,0,0-2.016,2.124c0,2.088,2.124,3.276,4.428,3.276,2.7,0,6.7-1.692,6.7-4.932a4.626,4.626,0,0,0-.972-2.664L118.116-9.9a4.57,4.57,0,0,1-1.188-3.024A2.668,2.668,0,0,1,119.808-15.408Zm5.8,11.052a6.077,6.077,0,0,0-.468,2.124c0,1.764,1.224,2.7,3.168,2.7A5.29,5.29,0,0,0,133.416-3.1l-.4-.18c-.432,1.008-1.692,2.916-3.24,2.916a1.06,1.06,0,0,1-1.116-1.116,6.654,6.654,0,0,1,.468-2.124l4.1-11.34h3.744l.108-.5H133.38l1.3-3.528h-3.708l-1.332,3.528h-3.1l-.144.5h3.1Zm23.148.432c-.684.972-2.556,3.744-5.76,3.744-1.656,0-2.772-.828-2.772-3.168A17.206,17.206,0,0,1,141.228-8.5a11.415,11.415,0,0,0,1.512.072c1.908,0,8.6-.648,8.6-4.536,0-1.944-2.052-2.952-4.608-2.952-5.4,0-10.224,6.48-10.224,10.8,0,3.24,2.3,5.58,5.9,5.58,4.248,0,6.3-3.42,6.768-4.1Zm-.792-9.9c0,2.736-2.232,4.9-5.472,4.9A9.02,9.02,0,0,1,141.408-9c.792-2.484,2.7-6.408,5.184-6.408C147.42-15.408,147.96-14.868,147.96-13.824Zm14.112-4.824a8.822,8.822,0,0,1,1.8-2.844c.612-.828,1.476-1.728,1.476-2.844a1.7,1.7,0,0,0-1.836-1.692,1.91,1.91,0,0,0-1.98,1.98,17.246,17.246,0,0,0,.252,2.016,9.213,9.213,0,0,1,.144,3.348c-2.232-2.916-1.62-5.832-4.14-5.832a1.961,1.961,0,0,0-1.872,2.016c0,.72.432,1.4,1.656,1.872a19.549,19.549,0,0,1,4.212,2.052A14.973,14.973,0,0,1,158-18.72a12.563,12.563,0,0,0-1.584-.18,1.818,1.818,0,0,0-2.016,1.872,1.979,1.979,0,0,0,1.872,1.98c.9,0,1.764-.756,2.664-1.548a8.256,8.256,0,0,1,2.916-1.836,9.147,9.147,0,0,1-1.836,2.844c-.612.828-1.476,1.728-1.476,2.844a1.7,1.7,0,0,0,1.836,1.692,1.91,1.91,0,0,0,1.98-1.98,17.246,17.246,0,0,0-.252-2.016A8.941,8.941,0,0,1,162-18.4c2.232,2.916,1.584,5.832,4.1,5.832a1.961,1.961,0,0,0,1.872-2.016c0-.72-.432-1.4-1.656-1.872a19.549,19.549,0,0,1-4.212-2.052,14.973,14.973,0,0,1,3.78.144,12.562,12.562,0,0,0,1.584.18,1.818,1.818,0,0,0,2.016-1.872,1.979,1.979,0,0,0-1.872-1.98c-.9,0-1.764.756-2.664,1.548A8.128,8.128,0,0,1,162.072-18.648Z" transform="translate(2.391 26.6)"/>
  </svg>
)

export default Email
