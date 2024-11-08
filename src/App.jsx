import { Route, Routes } from 'react-router-dom'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './Dashboard/Layout/Layout'
import MainPage from './Dashboard/MainPage'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path='/dashboard' element={<Layout/>}>
    <Route index element={<MainPage/>}/>
  </Route>
    </Routes>

  
    </>
  )
}

export default App
