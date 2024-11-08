
import { headerData } from "./Helper"
import { useState } from "react";


const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);
  return (
    <div>
        
        <div
            className={`flex gap-5 xl:gap-10 max-lg:fixed top-0 max-lg:h-screen max-lg:w-screen max-lg:items-center max-lg:justify-center flex-col lg:!flex-row bg-white lg:bg-transparent duration-300 z-10 ${
              !toggleNav ? "-left-full" : "left-0"
            }`}
          >
            {headerData.map((tab, index) => (
              <div key={index} onClick={() => setToggleNav(false)}>
                <button
                 
                  className={`font-normal text-base capitalize flex items-center gap-3 justify-between duration-300 hover:text-[#C04000] `}
                >
                  {tab.tabs}
                </button>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Header