import { CSSProperties, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Fanzine from './components/Fanzine/Fanzine';

import './index.css'
import './fonts.css'


const flowsFinal: {
  id: number,
  imageUrl: string,
  style?: CSSProperties
}[] = [
  { id: 1, imageUrl: 'flows/DSCF7353_resized_1250_dithered_16.png', style: { backgroundPosition: "66% 0", filter: "contrast(1.2) brightness(1.2)"} },
  { id: 2, imageUrl: 'flows/DSCF7464_resized_1250_dithered_16.png', style: { backgroundPosition: "66% 0" } },
  // { id: 2, imageUrl: 'flows/DSCF7388_dithered_16.png', style: {backgroundPosition: "20% 0"} },
  { id: 3, imageUrl: 'flows/DSCF7519_1_resized_1250_dithered_16.png', },
  { id: 4, imageUrl: 'flows/DSCF7451_resized_1250_dithered_8.png', style: { backgroundPosition: "50% 0" } },
  // { id: 5, imageUrl: 'flows/DSCF7404_dithered_24.png', style: {backgroundPosition: "66% 0"} },
  { id: 5, imageUrl: 'flows/DSCF7429_resized_1250_dithered_8.png', style: { backgroundPosition: "50% 0" } },
  { id: 6, imageUrl: 'flows/DSCF7462_resized_1250_dithered_8.png', style: { backgroundPosition: "27% 0" } },
  { id: 7, imageUrl: 'flows/DSCF7390_dithered_24.png', style: { backgroundPosition: "66% 0" } },
  { id: 8, imageUrl: 'flows/DSCF7519_2_resized_1250_dithered_16.png', },
  { id: 9, imageUrl: 'flows/DSCF7433_resized_1250_dithered_8.png', },


]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename=''>
      <Routes>
        <Route path='/' element={<Fanzine defaultPages={flowsFinal} />} />
        <Route path='/dev' element={<Fanzine defaultPages={flowsFinal} dev={true} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
