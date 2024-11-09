import { Route, Routes } from "react-router-dom";
import Layout from "../pages/dashdoard-pages/Layout";
import MainPage from '../pages/dashdoard-pages/MainPage';
import  PolicyRenewal  from "../pages/dashdoard-pages/PolicyRenewal";
import NewVenture from "../pages/dashdoard-pages/NewVenture";
import MidTerm from "../pages/dashdoard-pages/MidTerm";
import CompanySafety from "../pages/dashdoard-pages/CompanySafety";

function DashboardRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/dashboard/PolicyRenewal" element={<PolicyRenewal/>} />
          <Route path="/dashboard/NewVenture" element={<NewVenture/>} />
          <Route path="/dashboard/MidTerm" element={<MidTerm/>} />
          <Route path="/dashboard/CompanySafety" element={<CompanySafety/>} />
        </Route>
      </Routes>
    </>
  );
}


export default DashboardRoutes
