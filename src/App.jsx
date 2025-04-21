import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { Route, Routes } from 'react-router-dom'

function App() {
  const pageSize = 10;
  const apiKey = "4dfe17d54f4fc4226c21b928b0bff2ea";

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
