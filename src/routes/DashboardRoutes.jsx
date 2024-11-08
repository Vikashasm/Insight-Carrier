import { Route, Routes } from "react-router-dom";
import Layout from "../pages/dashdoard-pages/Layout";
import MainPage from '../components/dashboard/MainPage';

function DashboardRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}


export default DashboardRoutes