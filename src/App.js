import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppRouter from './routers/AppRouter.js'
import configureTheme from './configureTheme.js'
import './injectGlobalStyle.js'

const theme = configureTheme()

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>
)

export default App
