import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import logo from "../assets/images/svg/logo.svg";
import { EmailIcon, LockIcon } from "../components/common/Icon";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("Form submitted:", formData);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  

  return (
    <div>
      <section className="py-6 md:py-12">
        <div className="container xl:max-w-[1280px] mx-auto px-5 z-[1] relative">
          <div className="flex justify-center sm:mt-3 mb-6 lg:mb-14 pb-1">
            {" "}
            <Link to="/">
              <img className="w-24 sm:w-auto" src={logo} alt="logo" />
            </Link>
          </div>
          <h1 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-[#611D69] text-center">
            Register to <span className="text-[#00ADEF]"> Insight </span>{" "}
            Carrier
          </h1>
          <p className="ff_salesforce_ragular font-normal text-base xl:text-lg text-[#1D1D1D] text-center mt-4">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <div className="flex justify-center mt-3.5 pt-2 max-w-[460px] mx-auto">
            <form onSubmit={handleSubmit} className="w-full">
             
              <div className="mt-5 md:mt-10">
                <label
                  htmlFor="email"
                  className="ff_poppins font-semibold text-sm text-[#1D1D1D] uppercase"
                >
                Account
                </label>
                <div className="flex gap-2.5 py-3.5 px-5 border border-[#D3D3D3] rounded items-center mt-2.5">
                  <EmailIcon />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email or user name"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-[#1D1D1D] w-full text-[#1d1d1d] ff_salesforce_ragular text-base outline-none"
                  />
                </div>
                
              </div>
              <div className="mt-5 md:mt-10">
                <label
                  htmlFor="password"
                  className="ff_poppins font-semibold text-sm text-[#1D1D1D] uppercase"
                >
                  Password
                </label>
                <div className="flex gap-2.5 py-3.5 px-5 border border-[#D3D3D3] rounded items-center mt-2.5">
                  <LockIcon />
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="placeholder:text-[#1D1D1D] w-full text-[#1d1d1d] ff_salesforce_ragular text-base outline-none"
                  />
                </div>
               
              </div>
              <div className="flex justify-end"><Link className="ff_salesforce_ragular font-normal text-base text-black text-center mt-2.5">Forgot password?</Link></div>
             
              <div className="mt-5 md:mt-10 mb-5">
                <button
                  type="submit"
                  className="font-bold text-sm sm:text-[15px] text-white flex !py-3.5 sm:!px-10 gap-6 items-center bg-[#611D69] !uppercase rounded w-full justify-center"
                >
                  login
                </button>
              </div>
              <p className="ff_salesforce_ragular font-normal text-base text-black text-center mt-4">
              Don’t you have an account? 
                <Link to={"/register"} className="text-[#611D69] font-bold">
                Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};


export default Login