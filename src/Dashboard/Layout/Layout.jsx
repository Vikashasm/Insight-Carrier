import React from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className=" sticky top-0 left-0">
        <Navbar />
      </div>
      <div className=" flex grow -mt-[1px]  overflow-hidden">
        <div className="px-6 pt-6 pb-[100px] bg-[#611D69] w-3/12">
          <Sidebar />
        </div>
        <div className=" overflow-auto py-10 px-10 w-9/12">
        <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
