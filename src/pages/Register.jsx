import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import logo from "../assets/images/svg/logo.svg";

const Register = () => {
  return (
    <div>
    
      <section className="py-6 md:py-12">
        <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
        <div className="flex justify-center mt-3 mb-14 pb-1">
        {" "}
        <Link to="/">
          <img className="w-24 sm:w-auto" src={logo} alt="logo" />
        </Link>
      </div>
          <h1 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-[#611D69] text-center">
          Register to   <span className="text-[#00ADEF]"> Insight </span>{" "}
          Carrier
          </h1>
          <p className="ff_salesforce_ragular font-normal text-base xl:text-lg text-[#1D1D1D] text-center mt-4">
          Lorem ipsum dolor sit amet consectetur.
          </p>
         
          <div className="flex justify-center">
           
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Register;
