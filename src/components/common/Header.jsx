import { useState, useEffect } from "react";
import logo from "../../assets/images/svg/logo.svg";
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

  return (
    <>
      <div className={`duration-300 bg-[#FBFBFB] shadow-custom_boxShadow`}>
        <div
          className={`sm:py-7 p-2 sm:px-4 max-w-[1280px] mx-auto flex justify-between w-full items-center`}
        >
          <div className="flex items-center gap-6 lg:gap-10">
            {" "}
            <Link href="/">
              <img className="w-24 sm:w-auto" src={logo} alt="logo" />
            </Link>
            <div
              className={`flex gap-5 xl:gap-10 max-md:fixed top-0 max-md:h-screen max-md:w-screen max-md:items-center max-md:justify-center flex-col md:!flex-row bg-white md:bg-transparent duration-300 z-10 ${
                !toggleNav ? "-left-full" : "left-0"
              }`}
            >
              {headerData.map((tab, index) => (
                <div key={index} onClick={() => setToggleNav(false)}>
                  <Link
                    href={tab.path}
                    className={`font-bold text-sm lg:text-[15px] capitalize flex items-center gap-6 justify-between duration-300 hover:text-[#00ADEF] ${
                      location.pathname === tab.path
                        ? "text-[#00ADEF]"
                        : "text-[#1D1D1D]"
                    }`}
                  >
                    {tab.tabs}
                  </Link>
                </div>
              ))}
              <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 min-[400px]:hidden">
                <CommonBtn
                  path="/register"
                  btnName="Sign in"
                  btnStyling="font-bold text-[15px] text-[#1D1D1D] flex items-center "
                />

                <CommonBtn
                  path="/register"
                  btnName="start now"
                  btnStyling="font-bold text-[15px] text-white flex gap-6 items-center bg-[#611D69]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1.5 sm:gap-2.5 ">
              <SearchIcon />

              <CommonBtn
                path="/register"
                btnName="Sign in"
                btnStyling="font-bold text-[15px] text-[#1D1D1D] flex items-center max-[400px]:hidden"
              />

              <CommonBtn
                path="/register"
                btnName="start now"
                btnStyling="font-bold text-[15px] text-white flex gap-6 items-center bg-[#611D69] max-[400px]:hidden"
              />
            </div>
            <div
              onClick={() => setToggleNav(!toggleNav)}
              className="flex flex-col justify-between h-5 w-6 md:hidden z-[100] relative cursor-pointer duration-300"
            >
              <span
                className={` border-2 bg-[#00ADEF] w-full rounded-sm duration-300 ${
                  toggleNav
                    ? "translate-y-[8px] -rotate-45 border-[#00ADEF]"
                    : "border-[#00ADEF]"
                }`}
              ></span>
              <span
                className={` border-2 bg-[#00ADEF] w-full rounded-sm duration-300 ${
                  toggleNav ? "rotate-45 border-[#00ADEF]" : "border-[#00ADEF]"
                }`}
              ></span>
              <span
                className={` border-2 bg-[#00ADEF] w-full rounded-sm duration-300 ${
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
