import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstApp from './FirstApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp />
  </StrictMode>,
)
