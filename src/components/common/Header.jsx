
// import { useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/images/svg/logo.svg'


const Header = () => {
    // const [toggleNav, setToggleNav] = useState(false);
  return (
    <div>
        
        <img src={logo} alt="logo" />
        <Link className='text-red-500' to="/">Home</Link>



        {/* <div
            className={`flex gap-5 xl:gap-10 max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:!flex-row bg-white lg:bg-transparent duration-300 z-10 ${
              !toggleNav ? "-left-full" : "left-0"
            }`}
          >
           
          </div> */}
    </div>
  )
}

export default Header