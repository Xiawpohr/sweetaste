import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 625%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'PingFang TC', Helvetica, Arial, sans-serif;
    font-size: 0.16rem;
    line-height: 1.6;
  }
`
