import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'scss/main.scss'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
  )
}
