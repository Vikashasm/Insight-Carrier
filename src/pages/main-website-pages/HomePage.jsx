// import Hero from "../components/Hero";
import { NextGoIcon } from "../../components/common/Icon";
import { solutionData, testimonialData } from "../../components/common/Helper";
import AreYouReady from "../../components/main-website/AreYouReady";
import Footer from "../../components/common/Footer";
import Header from '../../components/common/Header';
import Hero from "../../components/main-website/Hero";

const HomePage = () => {
  return (
    <div>
     <Header/>

      <Hero />
      {/* Insight Carrier Solutions */}
      <section className="py-6 md:py-12">
        <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
          <h2 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-[#00ADEF] text-center mt-10">
            Insight <span className="text-[#611D69]">Carrier</span> Solutions
          </h2>
          <div className="flex flex-wrap -mx-2 mt-6 lg:mt-11">
            {solutionData.map((solution, index) => (
              <div key={index} className="w-full sm:w-1/2 xl:w-1/4 px-2 mt-4">
                <div className="shadow-card_shadow p-4 flex flex-col justify-between rounded h-full hover:shadow-xl duration-300">
                  <div>
                    <img src={solution.img} alt="truck-img" />
                    <h2 className="text-xl lg:text-2xl text-black mt-3 md:mt-5">
                      {solution.heading}
                    </h2>
                    <p className="ff_salesforce_ragular font-normal text-base lg:text-lg text-[#1D1D1D] mt-1">
                      {solution.subHeading}
                    </p>
                  </div>{" "}
                  <div className="mt-5">
                    <button className="flex justify-between items-center w-full uppercase border-none outline-none">
                      learn more <NextGoIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Testimonials*/}
      <section className="py-6 md:py-12">
        <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
          <h2 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-[#1D1D1D] text-center mt-10">
            Client Testimonials
          </h2>
          <p className="ff_salesforce_ragular text-xl lg:text-2xl text-[#1D1D1D] mt-3 md:mt-5 text-center">What Our Clients Say</p>

          <div className="flex flex-wrap -mx-2 mt-6 lg:mt-11">
            {testimonialData.map((items, index) => (
              <div key={index} className="w-full sm:w-1/2 xl:w-1/4 px-2 mt-4">
                <div className="shadow-card_shadow p-4 flex flex-col justify-between rounded h-full hover:shadow-xl duration-300">
                  <p className="ff_salesforce_ragular font-normal text-base lg:text-lg text-black mt-1">
                  {items.about}
                  </p>
                  <div className="flex gap-3 items-center mt-4 lg:mt-[30px]">
                    <img className="w-[60px] h-[60px]" src={items.profileImg} alt="profile-logo" />
                    <div>
                      <h2 className="text-xl lg:text-2xl text-black">
                        {items.name}
                      </h2>
                      <p className="ff_poppins font-normal text-xs text-[#00ADEF] capitalize">
                       {items.city}
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARE YOU READY */}
      <AreYouReady/>
      {/* FOOTER */}
      <Footer/>
    </div>
  );
};

export default HomePage;
