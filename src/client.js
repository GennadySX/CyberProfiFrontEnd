import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import MobileApp from './mobileApp/App'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const state = window.__STATE__
const store = configureStore(state)

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
})

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          {state.mobile === null ? <App/> : <MobileApp/> }
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>,
    document.querySelector('#app')
  )
})
