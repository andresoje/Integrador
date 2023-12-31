import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './components/Redux/Store.js'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
)
