import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import GlobalFooter from './components/common/GlobalFooter'
import Stairs from './components/common/Stairs'

import Contact from './pages/Contact'
import Resume from './pages/Resume'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      
      <Navbar />
      <FullScreenNav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Stairs><Skills /></Stairs>} />
        <Route path='/projects' element={<Stairs><Projects /></Stairs>} />
        <Route path='/contact' element={<Stairs><Contact /></Stairs>} />
        <Route path='/resume' element={<Stairs><Resume /></Stairs>} />
      </Routes>

      <GlobalFooter />
    </div>
  )
}

export default App