import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Navbar from './Dashboard/common/Navbar'
import Sidebar from './Dashboard/common/Sidebar'
import Layout from './Dashboard/Layout/Layout'
import MainPage from './Dashboard/MainPage'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <>
<div>
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<MainPage/>}/>
  </Route>
</Routes>
</div>
     {/* <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
    </Routes> */}
    </>
  )
}

export default App
