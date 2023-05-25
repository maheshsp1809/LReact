import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import Question1 from './Components/Question1'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Question1/>
  </React.StrictMode>
)
