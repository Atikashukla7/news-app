import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Route, Routes } from 'react-router-dom'

function App() {
  const pageSize = 5;
  const apiKey = "449a9c561e7b47dbab2a5af9aa141853";

  return (  
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="us" category="general" />} />
        <Route path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="us" category="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="us" category="entertainment" />} />
        <Route path="/general" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="us" category="general" />} />
        <Route path="/health" element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="us" category="health" />} />
        <Route path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="us" category="science" />} />
        <Route path="/sports" element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="us" category="sports" />} />
        <Route path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="us" category="technology" />} />
      </Routes>
    </>
  )
}

export default App
