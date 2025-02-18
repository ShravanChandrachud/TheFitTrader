import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import { useState } from 'react'
import './App.css'
import './pages/styles/PageLayout.css'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
