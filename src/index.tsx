import './stylesheets/index.scss'
import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')!
)

declare const module: any

if (module.hot) {
  module.hot.accept()
}
