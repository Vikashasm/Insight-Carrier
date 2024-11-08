import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/svg/logo.svg";
import { EmailIcon, FbIcon, InstaIcon, LinkdinIcon } from "./Icon";
import { headerData } from "./Helper";

const Footer = () => {
  const location = useLocation();
  return (
    <section className="py-6 md:py-12">
      <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img className="w-24 sm:w-auto" src={logo} alt="logo" />
          </Link>
          <span className="flex items-center gap-4">
            <a href="">
              <FbIcon />
            </a>
            <a href="">
              <InstaIcon />
            </a>
            <a href="">
              <LinkdinIcon />
            </a>
          </span>
        </div>
        <div className="flex flex-wrap items-end lg:justify-between mt-[30px]">
          <p className="flex items-center gap-2 ff_salesforce_ragular font-normal text-xs sm:text-base lg:text-lg text-[#1D1D1D]">
            <EmailIcon />
            For inquiries, reach out at [support@insightcarrier.com]
          </p>
          <div className="flex flex-col gap-2.5 mt-8 lg:mt-0">
            <h3 className="ff_poppins font-semibold text-sm text-[#611D69]">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-6">
              {headerData.map((tab, index) => (
                <div key={index}>
                  <Link
                    href={tab.path}
                    className={`font-bold text-sm lg:text-[15px] capitalize flex items-center gap-3 sm:gap-6 justify-between duration-300 hover:text-[#00ADEF] ${
                      location.pathname === tab.path
                        ? "text-[#00ADEF]"
                        : "text-[#1D1D1D]"
                    }`}
                  >
                    {tab.tabs}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
