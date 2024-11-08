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
        <div className="px-6 pt-6 pb-[100px] bg-[#611D69] w-[19.7%]">
          <Sidebar />
        </div>
        <div className=" bg-white  overflow-auto rounded-l-[4px] pt-10 pb-[100px] px-10 w-[80%]">
        <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
