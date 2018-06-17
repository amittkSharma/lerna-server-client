import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
// tslint:disable-next-line:no-submodule-imports
import { purple, green } from '@material-ui/core/colors'
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
)
