
import React from 'react'
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'

import MyPortfolio from './Component/MyPortfolio'
export default function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<MyPortfolio/>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio/>}></Route>
     
      </Routes>
    </div>
  )
}
