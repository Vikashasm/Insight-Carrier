import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Navbar from './Dashboard/common/Navbar'
import Sidebar from './Dashboard/common/Sidebar'
import { Dashboard } from './Dashboard/common/Icone'
import Layout from './Dashboard/Layout/Layout'
import MainPage from './Dashboard/MainPage'

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
    </>
  )
}

export default App
