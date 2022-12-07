import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import './theme/theme.css'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
