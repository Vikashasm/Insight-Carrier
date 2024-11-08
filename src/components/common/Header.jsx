
import  { useState, useEffect } from "react";
import logo from "../../assets/images/svg/logo.svg";
import { headerData } from "./Helper";
import CommonBtn from "./CommonBtn";
import { Link, useLocation } from "react-router-dom";



const Header = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);


  useEffect(() => {
    document.body.style.overflow = toggleNav ? "clip" : "auto";
  }, [toggleNav]);



  return (
    <div>
  
        
      <div className={`duration-300 bg-[#FBFBFB] shadow-custom_boxShadow`}>
        <div
          className={`sm:py-3 p-2 sm:px-4 max-w-[1360px] mx-auto flex justify-between w-full items-center`}
        >
          <Link href="/">
            <img
              className={`w-28 sm:w-32 md:w-[180px] `}
              src={logo}
              alt="logo"
            />
          </Link>

          <div
            className={`flex gap-5 xl:gap-10 max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:!flex-row bg-white lg:bg-transparent duration-300 z-10 ${
              !toggleNav ? "-left-full" : "left-0"
            }`}
          >
            {headerData.map((tab, index) => (
              <div key={index} onClick={() => setToggleNav(false)}>
                <Link
                  href={tab.path}
                  className={`font-normal text-base capitalize flex items-center gap-3 justify-between duration-300 hover:text-[#C04000] ${
                    location === tab.path
                      ? "text-[#C04000] font-medium"
                      : "text-black"
                  }`}
                >
                  {tab.tabs}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            {" "}
            <div className="flex gap-1.5 sm:gap-2.5">
           
                <>
                  <CommonBtn
                    path="/sign-in"
                    btnName="Sign in"
                    btnStyling="text-black hover:bg-[#C04000] hover:text-white"
                  />
                  <CommonBtn
                    path="/register"
                    btnName="Sign up"
                    btnStyling="bg-[#C04000] text-white"
                  />
                </>
          
            </div>
            <div
              onClick={() => setToggleNav(!toggleNav)}
              className="flex flex-col justify-between h-5 w-6 lg:hidden z-[100] relative cursor-pointer duration-300"
            >
              <span
                className={` border-2 bg-[#C04000] w-full rounded-sm duration-300 ${
                  toggleNav
                    ? "translate-y-[8px] -rotate-45 border-[#C04000]"
                    : "border-[#C04000]"
                }`}
              ></span>
              <span
                className={` border-2 bg-[#C04000] w-full rounded-sm duration-300 ${
                  toggleNav ? "rotate-45 border-[#C04000]" : "border-[#C04000]"
                }`}
              ></span>
              <span
                className={` border-2 bg-[#C04000] w-full rounded-sm duration-300 ${
                  toggleNav ? "opacity-0 border-[#C04000]" : "border-[#C04000]"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
