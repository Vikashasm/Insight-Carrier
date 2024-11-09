import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import {
  EmailIcon,
  MessageIcon,
  PhoneIcon,
  RightTikIcon,
  UserIcon,
} from "../../components/common/Icon";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
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
      phone: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="bg-contactUs_gradient mb-12">
        <Header />
        <div className="container xl:max-w-[1280px] mx-auto px-5 ">
          <div className="flex flex-wrap justify-center lg:justify-between mt-10 lg:mt-14 lg:pt-1.5 ">
            <div className="w-full lg:w-4/12">
              <div className="flex flex-col pb-7 md:pb-14 lg:pb-24 lg:mb-1.5">
                <h2 className="ff_poppins font-semibold text-3xl md:text-5xl lg:text-[54px] text-white lg:leading-[64px]">
                  Contact our sales team
                </h2>
                <p className="ff_salesforce_ragular font-normal text-base xl:text-lg text-white mt-3 md:mt-5">
                  We&apos;re happy to answer questions and get you acquainted
                  with Insight Freight.
                </p>
              </div>

              <div className="mt-14 lg:mt-20 flex-col gap-4  lg:gap-[30px] hidden lg:flex">
                <div className="flex gap-2 w-full sm:max-w-[212px]">
                  <span className="mt-1">
                    <RightTikIcon />
                  </span>
                  <p className="ff_poppins font-semibold text-sm text-[#1D1D1D] tracking-[2%]">
                    Learn how to use Insight carrier
                  </p>
                </div>
                <div className="flex gap-2 max-w-[212px]">
                  <span className="mt-1">
                    <RightTikIcon />
                  </span>
                  <p className="ff_poppins font-semibold text-sm text-[#1D1D1D] tracking-[2%]">
                    Get pricing information
                  </p>
                </div>
                <div className="flex gap-2 max-w-[212px]">
                  <span className="mt-1">
                    <RightTikIcon />
                  </span>
                  <p className="ff_poppins font-semibold text-sm text-[#1D1D1D] tracking-[2%]">
                    Explore Comprehensive Carrier Data Solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-10/12 lg:w-6/12 ">
              <div className="bg-white px-5 lg:px-12 py-5 lg:py-10 shadow-card_shadow rounded">
                {" "}
                <form onSubmit={handleSubmit} className="w-full">
                  <div>
                    <label
                      htmlFor="username"
                      className="ff_poppins font-semibold text-sm text-[#1D1D1D] uppercase"
                    >
                      name
                    </label>
                    <div className="flex gap-2.5 py-3.5 px-5 border border-[#D3D3D3] rounded ff_salesforce_ragular text-base outline-none items-center mt-2.5">
                      <UserIcon />
                      <input
                        required
                        type="text"
                        name="username"
                        placeholder="User name"
                        value={formData.username}
                        onChange={handleChange}
                        className="placeholder:text-[#1D1D1D] w-full text-[#1d1d1d] ff_salesforce_ragular text-base outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-5 md:mt-10">
                    <label
                      htmlFor="email"
                      className="ff_poppins font-semibold text-sm text-[#1D1D1D] uppercase"
                    >
                      Email
                    </label>
                    <div className="flex gap-2.5 py-3.5 px-5 border border-[#D3D3D3] rounded items-center mt-2.5">
                      <EmailIcon />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="placeholder:text-[#1D1D1D] w-full text-[#1d1d1d] ff_salesforce_ragular text-base outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-5 md:mt-10">
                    <label
                      htmlFor="phone"
                      className="ff_poppins font-semibold text-sm text-[#1D1D1D] uppercase"
                    >
                      Phone
                    </label>
                    <div className="flex gap-2.5 py-3.5 px-5 border border-[#D3D3D3] rounded items-center mt-2.5">
                      <PhoneIcon />
                      <input
                        required
                        type="number"
                        name="phone"
                        placeholder="Your number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="placeholder:text-[#1D1D1D] w-full text-[#1d1d1d] ff_salesforce_ragular text-base outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-5 md:mt-10">
                    <label
                      htmlFor="message"
                      className="ff_poppins font-semibold text-sm text-[#1D1D1D] uppercase"
                    >
                      Message
                    </label>
                    <div className="flex gap-2.5 py-3.5 px-5 border border-[#D3D3D3] rounded mt-2.5">
                      <span className="mt-1"><MessageIcon /></span>
                      <textarea
                        name="message"
                        placeholder="Type message..."
                        value={formData.message}
                        onChange={handleChange}
                        id="message"
                        className="w-full h-[100px] ff_salesforce_ragular text-base outline-none placeholder:text-[#1D1D1D] text-[#1d1d1d] resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-10">
                    <button
                      type="submit"
                      className="font-bold text-sm sm:text-[15px] text-white flex !py-4 px-6 sm:!px-10 gap-6 items-center bg-[#611D69] !uppercase rounded justify-center"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-14 lg:mt-20 flex-col gap-4  lg:gap-[30px] lg:hidden flex">
                <div className="flex gap-2 w-full sm:max-w-[212px]">
                  <span className="mt-1">
                    <RightTikIcon />
                  </span>
                  <p className="ff_poppins font-semibold text-sm text-[#1D1D1D] tracking-[2%]">
                    Learn how to use Insight carrier
                  </p>
                </div>
                <div className="flex gap-2 w-full sm:max-w-[212px]">
                  <span className="mt-1">
                    <RightTikIcon />
                  </span>
                  <p className="ff_poppins font-semibold text-sm text-[#1D1D1D] tracking-[2%]">
                    Get pricing information
                  </p>
                </div>
                <div className="flex gap-2 w-full sm:max-w-[212px]">
                  <span className="mt-1">
                    <RightTikIcon />
                  </span>
                  <p className="ff_poppins font-semibold text-sm text-[#1D1D1D] tracking-[2%]">
                    Explore Comprehensive Carrier Data Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
