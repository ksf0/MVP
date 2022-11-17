import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ErrorPage from './ErrorPage.jsx'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
