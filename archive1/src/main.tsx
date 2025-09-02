import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fanzine from './components/Fanzine/Fanzine'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fanzine />
  </StrictMode>,
)
