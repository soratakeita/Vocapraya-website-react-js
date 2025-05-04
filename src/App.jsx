import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HalamanUtama from './pages/Homes';
import Header from './component/Header';
import Artist from './pages/Artist';
import Footer from './component/Footer';
import Album from './pages/Song';
function App() {

  return (
    <>
  <Router>   
    <Header />
      <Routes>
        <Route path="/" element={<HalamanUtama />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    <Footer />
  </Router>
    

    </>
  )
}

export default App
