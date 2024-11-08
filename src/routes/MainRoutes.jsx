import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/main-website-pages/HomePage"
import AboutPage from "../pages/main-website-pages/AboutPage"
import Pricing from "../pages/main-website-pages/Pricing"
import Register from "../pages/main-website-pages/Register"
import Login from "../pages/main-website-pages/Login"


const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        </Routes>
    </div>
  )
}

export default MainRoutes