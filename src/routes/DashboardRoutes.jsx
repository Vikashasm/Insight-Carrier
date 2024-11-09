import { Route, Routes } from "react-router-dom";
import Layout from "../pages/dashdoard-pages/Layout";
import MainPage from '../components/dashboard/MainPage';
import  PolicyRenewal  from "../components/dashboard/PolicyRenewal";
import NewVenture from "../components/dashboard/NewVenture";
import MidTerm from "../components/dashboard/MidTerm";
import CompanySafety from "../components/dashboard/CompanySafety";

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
