import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import reportWebVitals from './reportWebVitals'
import store from 'store/store'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family:
      --apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
