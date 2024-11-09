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
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggleNav || isSearchVisible ? "clip" : "auto";
  }, [toggleNav,isSearchVisible]);

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
        <div className="sm:py-7 py-3 px-5 max-w-[1280px] mx-auto flex justify-between w-full items-center">
          <div className="flex items-center gap-6 lg:gap-10">
            <Link to="/">
              {isContactPage ? (
                <img
                  className="w-24 sm:w-auto"
                  src={contactPageLogo}
                  alt="logo"
                />
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
                      location.pathname === tab.path
                        ? activeTabColor
                        : navTabColor
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
                    isContactPage
                      ? "text-[#611D69] bg-white"
                      : "bg-[#611D69] !text-white"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1.5 sm:gap-2.5 ">
             
                <div className={` fixed left-1/2 -translate-x-1/2 w-full h-full flex gap-3 justify-center bg-black/50 z-[2] p-6 ${isSearchVisible ? "top-20":"-top-full"}`}>
                  <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 max-w-[300px ] sm:w-[300px] h-12 bg-white text-gray-900 rounded outline-none border border-[#D3D3D3] duration-300"
                /> <button onClick={() => setIsSearchVisible(false)} className="h-12 bg-[#611D69] text-sm text-white px-5 rounded">search</button>
                </div>
           
              <span onClick={() => setIsSearchVisible(!isSearchVisible)} className="cursor-pointer">
                <SearchIcon isContactPage={isContactPage} />
              </span>
              <CommonBtn
                path="/sign-in"
                btnName="Sign in"
                btnStyling={`font-bold text-[15px] flex items-center max-[400px]:hidden hover:bg-[#611D69] hover:text-white ${
                  isContactPage ? "text-white" : "text-[#1D1D1D]"
                }`}
              />
              <CommonBtn
                path="/register"
                btnName="start now"
                btnStyling={`font-bold text-[15px] flex gap-6 items-center bg-[#611D69] max-[400px]:hidden !uppercase ${
                  isContactPage
                    ? "text-[#611D69] bg-white"
                    : "bg-[#611D69] !text-white"
                }`}
              />
            </div>
            <div
              onClick={() => setToggleNav(!toggleNav)}
              className="flex flex-col justify-between h-5 w-6 md:hidden z-[100] relative cursor-pointer duration-300"
            >
              <span
                className={`border-2 bg-[#00ADEF] w-full rounded-sm duration-300 ${
                  toggleNav
                    ? "translate-y-[8px] -rotate-45 border-[#00ADEF]"
                    : "border-[#00ADEF]"
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
