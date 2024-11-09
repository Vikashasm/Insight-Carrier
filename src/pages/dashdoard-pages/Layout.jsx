import { useState } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col relative">
      <div className="sticky top-0 left-0">
      
        <Navbar open={open} setOpen={setOpen}/>
      </div>

      <div className="flex grow -mt-[1px] overflow-hidden">
        <div className="px-[8px] lg:px-[14px] pt-6 pb-[100px] hidden md:block bg-[#611D69] w-[30%] lg:w-[28%] xl:w-[20%] 2xl:w-[19.7%]">
          <Sidebar setOpen={setOpen}/>
        </div>
        {open && (
          <div className="fixed top-[74px] ms:top-[94px]  inset-0 z-50 bg-[#611D69] px-[10px] lg:px-6 pt-6 pb-[100px] block md:hidden  w-full sm:w-[29%] lg:w-[28%] ">
          <Sidebar setOpen={setOpen}/>
        
          </div>
        )}

        <div className="bg-white overflow-auto rounded-l-[4px] pt-10 pb-[100px] px-5 lg:px-10 w-full">
        
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
