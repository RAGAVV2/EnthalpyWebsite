import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ThemeProvider>,
)
