import React from 'react';
import Logo from "../../assets/Dashboard/images/svg/logo.svg";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between bg-[#611D69] py-[27px] px-6'>
        <img src={Logo} alt='Logo' />
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
