import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Pricing from './pages/Pricing';
import Register from './pages/Register';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
