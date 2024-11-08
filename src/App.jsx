import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/common/Header'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
     <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
