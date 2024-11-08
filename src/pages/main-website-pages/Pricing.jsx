import AreYouReady from "../../components/main-website/AreYouReady";
import CommonBtn from "../../components/common/CommonBtn";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { pricingData } from "../../components/common/Helper";
import ToggleSwitchBtn from "../../components/main-website/ToggleSwitchBtn";

const Pricing = () => {
  return (
    <div className="">
     <Header/>

      <section className="py-6 md:py-12">
        <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
          <h1 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-[#611D69] text-center">
            Trucking <span className="text-[#00ADEF]"> Insurance Leads </span>{" "}
            Pricing.
          </h1>
          <p className="ff_salesforce_ragular font-normal text-base xl:text-lg text-[#1D1D1D] text-center mt-4">
            Select monthly or yearly payment plans
          </p>
          <div className="py-14 my-1">
            <ToggleSwitchBtn />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center w-full md:w-10/12 mx-auto">
              {pricingData.map((items, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mt-4">
                  <div className="shadow-card_shadow p-4 flex flex-col gap-14 justify-between rounded h-full hover:shadow-xl duration-300">
                    <div>
                      <h2 className="text-xl lg:text-2xl text-black pb-4">
                        {items.insight}
                      </h2>
                      <p className="ff_salesforce_ragular text-black text-base">
                       {items.stateInfo}
                      </p>
                      <p className="ff_salesforce_ragular text-black text-base mt-4">
                       {items.discount}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-end">
                        <h2 className="ff_poppins font-semibold text-3xl md:text-4xl lg:text-[44px] text-black">
                          $99{" "}
                        </h2>
                        <span className="font-normal text-base lg:text-lg text-black">
                          USD/mo
                        </span>
                      </div>
                      <CommonBtn
                        path="/"
                        btnName="get started"
                        btnStyling="font-bold text-sm sm:text-[15px] text-[#611D69] !py-3.5 sm:!px-10 flex gap-6 items-center border border-[#611D69] !uppercase  hover:text-white hover:bg-[#611D69] duration-300 mt-10"
                      />
                    </div>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARE YOU READY */}
      <AreYouReady />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Pricing;
