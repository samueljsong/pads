import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//Pages
import { LandingPage } from './pages/LandingPage'
import { PairingPage } from './pages/PairingPage'

//Mobile Pages
import { MobilePairingPage } from './pages/mobile/MobilePairingPage'
import { MobileLandingPage } from './pages/mobile/MobileLandingPage'

import './App.css'

function App() {

  return (
    <>
        <Routes>
            <Route path='/'             element={<LandingPage/>}/>
            <Route path='/pairing'      element={<PairingPage/>}/>
            <Route path='/mobile'       element={<MobilePairingPage/>}/>
            <Route path='/mobile/:code' element={<MobileLandingPage/>}/>
        </Routes>
    </>
  )
}

export default App
