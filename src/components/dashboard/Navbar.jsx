
import { useState } from "react";
import Logo from "../../assets/Dashboard/images/svg/logo.svg";
import { Link } from 'react-router-dom';

export default function Navbar({open,setOpen}) {
  
  return (
    <>
      <nav className='flex items-center justify-between bg-[#611D69] py-[27px] px-6'>
<div className="flex items-center">
<button
        onClick={()=>setOpen(!open)}
        className="space-y-2 flex flex-col items-center justify-center z-10 md:hidden"
      >
        <div
          className={`w-6 h-0.5 bg-white transition-transform duration-300 rounded ${
            open ? 'rotate-45 translate-y-2.5' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-opacity duration-300 rounded ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-transform duration-300 rounded ${
            open ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        ></div>
      </button>
       <Link className="ms-4 md:ms-0" to={'/'}><img src={Logo} alt='Logo' /></Link> 
</div>
        <ul className='flex items-center justify-between gap-6'>
        
          <li>
            <select className='bg-[#611D69] text-white text-[15px] font-bold border-none outline-none cursor-pointer'>
              <option> Insights</option>
              <option>Insights</option>
              <option>Insights</option>
            </select>
          </li>
          <li>
            <select className='bg-[#611D69] text-white text-[15px] font-bold cursor-pointer'>
              <option> Account</option>
              <option>Account</option>
              <option>Account </option>
            </select>
          </li>
        
        </ul>
      </nav>
    </>
  );
}
