import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import './bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
