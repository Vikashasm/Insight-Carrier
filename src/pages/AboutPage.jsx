import aboutHeroImg from '../assets/images/png/homapage-img/truck3.png'
import AreYouReady from "../components/AreYouReady";
import Footer from "../components/common/Footer";
import Header from '../components/common/Header';

const AboutPage = () => {
  return (
    <div >
     <Header/>

      {/* ABOUT US */}
      <section className="pb-6 md:py-12">
        <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
          <h2 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-[#611D69] text-center">
            About Us
          </h2>
          <div className="flex items-center flex-wrap flex-col-reverse lg:flex-row -mx-2 mt-6 lg:mt-11">
            <div className="w-full lg:w-1/2 xl:pe-10  mt-6 lg:mt-0">
             
                <p className="ff_salesforce_ragular font-normal text-base xl:text-lg text-[#1D1D1D] mt-1 text-center lg:text-start">
                  Insight Carrier is at the forefront of supporting insurance
                  agents, Managing General Agents (MGAs), and underwriters
                  within insurance companies by providing them with access to
                  high-quality, daily updated truck insurance leads and
                  comprehensive safety data. Our platform is designed to
                  facilitate informed decision-making and strategic growth by
                  offering critical insights that enhance the efficiency of
                  underwriting processes and the acquisition of new clients.
                </p>
                <p className="ff_salesforce_ragular font-normal text-base xl:text-lg text-[#1D1D1D] mt-4 text-center lg:text-start">
                  By leveraging our meticulously curated data, industry
                  professionals can effectively identify viable leads while also
                  gaining a deeper understanding of safety performance metrics
                  associated with trucking operations. This dual access empowers
                  our clients to tailor their offerings, optimize risk
                  assessment, and refine their marketing strategies, ultimately
                  driving business expansion. With Insight Carrier, insurance
                  stakeholders are equipped to navigate the complexities of the
                  truck insurance landscape confidently, ensuring they remain
                  competitive in a dynamic market environment.
                </p>
             
            </div>
            <div className="w-full sm:w-3/4 lg:w-1/2 lg:ps-10">
                <img className='w-full' src={aboutHeroImg} alt="about-hero-img" />
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

export default AboutPage;
