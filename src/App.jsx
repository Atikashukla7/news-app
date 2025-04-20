import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Route, Routes } from 'react-router-dom'
function App() {
 


  return (  
    <>
      <Navbar/>
      <News/>
    </>
  )
}

export default App
