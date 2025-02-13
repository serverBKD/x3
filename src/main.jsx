import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import NavBar from './components/v1/NavBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
  </StrictMode>
)
