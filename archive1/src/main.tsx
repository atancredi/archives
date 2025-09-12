import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Fanzine from './components/Fanzine/Fanzine'
import Links from './components/Links/Links'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Fanzine /> */}
    <Links></Links>
  </StrictMode>,
)
