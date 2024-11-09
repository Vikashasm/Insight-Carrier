

import { useState, useEffect } from "react";
import logo from "../../assets/images/svg/logo.svg";
import contactPageLogo from "../../assets/Dashboard/images/svg/logo.svg";
import { headerData } from "./Helper";
import CommonBtn from "./CommonBtn";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon } from "./Icon";

const Header = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggleNav ? "clip" : "auto";
  }, [toggleNav]);

  // Color scheme based on path
  const isContactPage = location.pathname === "/contact-us";
  const navTabColor = isContactPage ? "text-white" : "text-[#1D1D1D]";
  const activeTabColor = "text-[#00ADEF]";

  return (
    <>
      <div
        className={`duration-300 shadow-custom_boxShadow ${
          isContactPage ? "bg-[#611D69]" : "bg-[#FBFBFB]"
        }`}
      >
        <div
          className="sm:py-7 py-3 px-5 max-w-[1280px] mx-auto flex justify-between w-full items-center"
        >
          <div className="flex items-center gap-6 lg:gap-10">
            <Link to="/">
              {isContactPage ? (
                <img className="w-24 sm:w-auto" src={contactPageLogo} alt="logo" />
              ) : (
                <img className="w-24 sm:w-auto" src={logo} alt="logo" />
              )}
            </Link>
            <div
              className={`flex gap-4 xl:gap-10 max-md:fixed top-0 max-md:h-screen max-md:w-screen max-md:items-center max-md:justify-center flex-col md:!flex-row ${
                isContactPage ? "bg-[#611D69]" : "bg-[#FBFBFB]"
              } md:bg-transparent duration-300 z-10 ${
                !toggleNav ? "-left-full" : "left-0"
              }`}
            >
              {headerData.map((tab, index) => (
                <div key={index} onClick={() => setToggleNav(false)}>
                  <Link
                    to={tab.path}
                    className={`font-bold text-sm lg:text-[15px] capitalize flex items-center gap-6 justify-between duration-300 hover:text-[#00ADEF] ${
                      location.pathname === tab.path ? activeTabColor : navTabColor
                    }`}
                  >
                    {tab.tabs}
                  </Link>
                </div>
              ))}
              <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 min-[400px]:hidden">
                <CommonBtn
                  path="/sign-in"
                  btnName="Sign in"
                  btnStyling={`font-bold text-[15px] flex items-center ${
                    isContactPage ? "text-white" : "text-[#1D1D1D]"
                  }`}
              
                />
                <CommonBtn
                  path="/register"
                  btnName="start now"
                  btnStyling={`font-bold text-[15px]  flex gap-6 items-center bg-[#611D69] ${
                    isContactPage ? "text-[#611D69] bg-white" : "bg-[#611D69] !text-white"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1.5 sm:gap-2.5 ">
              <SearchIcon isContactPage={isContactPage}/>
              <CommonBtn
                path="/sign-in"
                btnName="Sign in"
                btnStyling={`font-bold text-[15px] flex items-center max-[400px]:hidden ${
                  isContactPage ? "text-white" : "text-[#1D1D1D]"
                }`}
              />
              <CommonBtn
                path="/register"
                btnName="start now"
                btnStyling={`font-bold text-[15px] flex gap-6 items-center bg-[#611D69] max-[400px]:hidden !uppercase ${
                  isContactPage ? "text-[#611D69] bg-white" : "bg-[#611D69] !text-white"
                }`}
              />
            </div>
            <div
              onClick={() => setToggleNav(!toggleNav)}
              className="flex flex-col justify-between h-5 w-6 md:hidden z-[100] relative cursor-pointer duration-300"
            >
              <span
                className={`border-2 bg-[#00ADEF] w-full rounded-sm duration-300 ${
                  toggleNav ? "translate-y-[8px] -rotate-45 border-[#00ADEF]" : "border-[#00ADEF]"
                }`}
              ></span>
              <span
                className={`border-2 bg-[#00ADEF] w-full rounded-sm duration-300 ${
                  toggleNav ? "rotate-45 border-[#00ADEF]" : "border-[#00ADEF]"
                }`}
              ></span>
              <span
                className={`border-2 bg-[#00ADEF] w-full rounded-sm duration-300 ${
                  toggleNav ? "opacity-0 border-[#00ADEF]" : "border-[#00ADEF]"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
