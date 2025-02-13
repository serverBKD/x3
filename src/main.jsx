import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import NavBar from './components/v1/NavBar'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>
)
