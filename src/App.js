import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Work from './screens/Work'
import About from './screens/About'
import Contact from './screens/Contact'
import Footer from './components/Footer'
import './scss/styles.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
