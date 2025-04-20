import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Route, Routes } from 'react-router-dom'
function App() {
 


  return (  
    <>
      <Navbar/>
      <News pageSize={5} country="in" apiKey="f5934662480a4031b9b5db6293062871"/>
    </>
  )
}



export default App
